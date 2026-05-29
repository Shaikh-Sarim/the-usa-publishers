import { NextRequest, NextResponse } from 'next/server'

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

      // Encode image as base64 data URL
      // This allows the image to be stored directly in the database
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const base64 = buffer.toString('base64')
      const mimeType = file.type || 'image/jpeg'
      const dataUrl = `data:${mimeType};base64,${base64}`

      uploadedFiles.push({
        filename: file.name,
        url: dataUrl,
        uploadedAt: new Date().toISOString(),
      })
    }

    if (uploadedFiles.length === 0) {
      return NextResponse.json(
        { error: 'No valid image files found' },
        { status: 400 }
      )
    }

    return NextResponse.json(uploadedFiles, { status: 201 })
  } catch (error) {
    console.error('Error uploading files:', error)
    return NextResponse.json(
      { error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
