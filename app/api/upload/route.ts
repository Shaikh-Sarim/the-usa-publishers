import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readdir, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads')

// Ensure upload directory exists
if (!existsSync(UPLOAD_DIR)) {
  mkdirSync(UPLOAD_DIR, { recursive: true })
}

export async function GET() {
  try {
    // List all uploaded files
    const files = await readdir(UPLOAD_DIR)
    
    const assets = files
      .filter(f => !f.startsWith('.'))
      .map(filename => ({
        filename,
        url: `/uploads/${filename}`,
        uploadedAt: new Date().toISOString(),
      }))
      .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))

    return NextResponse.json(assets)
  } catch (error) {
    console.error('Error reading uploads:', error)
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      )
    }

    const uploadedFiles = []

    for (const file of files) {
      console.log(`Uploading file: ${file.name}, type: ${file.type}, size: ${file.size}`)
      
      // Validate file - check extension as fallback for MIME type
      const ext = file.name.split('.').pop()?.toLowerCase() || ''
      const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
      const isValidImage = file.type.startsWith('image/') || validExtensions.includes(ext)
      
      if (!isValidImage) {
        console.warn(`Skipping invalid file type: ${file.name} (${file.type})`)
        continue
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Generate filename
      const timestamp = Date.now()
      const filename = `${timestamp}-${file.name.replace(/[^a-z0-9.-]/gi, '')}`

      // Save file
      const filepath = join(UPLOAD_DIR, filename)
      await writeFile(filepath, buffer)
      console.log(`File saved: ${filepath}`)

      uploadedFiles.push({
        filename,
        url: `/uploads/${filename}`,
        uploadedAt: new Date().toISOString(),
      })
    }

    if (uploadedFiles.length === 0) {
      return NextResponse.json(
        { error: 'No valid image files found' },
        { status: 400 }
      )
    }

    // Return all files
    const allFiles = await readdir(UPLOAD_DIR)
    const allAssets = allFiles
      .filter(f => !f.startsWith('.'))
      .map(filename => ({
        filename,
        url: `/uploads/${filename}`,
        uploadedAt: new Date().toISOString(),
      }))
      .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))

    return NextResponse.json(allAssets, { status: 201 })
  } catch (error) {
    console.error('Error uploading files:', error)
    return NextResponse.json(
      { error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const filename = searchParams.get('filename')

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename required' },
        { status: 400 }
      )
    }

    const filepath = join(UPLOAD_DIR, filename)
    await unlink(filepath)

    // Return updated file list
    const allFiles = await readdir(UPLOAD_DIR)
    const allAssets = allFiles
      .filter(f => !f.startsWith('.'))
      .map(f => ({
        filename: f,
        url: `/uploads/${f}`,
        uploadedAt: new Date().toISOString(),
      }))
      .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt))

    return NextResponse.json(allAssets)
  } catch (error) {
    console.error('Error deleting file:', error)
    return NextResponse.json(
      { error: 'Delete failed' },
      { status: 500 }
    )
  }
}
