import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const assets = await prisma.asset.findMany({
      orderBy: [{ featured: 'desc' }, { order: 'asc' }],
    })
    return NextResponse.json(assets)
  } catch (error) {
    console.error('Error fetching assets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch assets' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, platform, imageUrl, description, featured, order } = body

    if (!name || !platform || !imageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const asset = await prisma.asset.create({
      data: {
        name,
        platform,
        imageUrl,
        description: description || null,
        featured: featured || false,
        order: order || 0,
      },
    })

    return NextResponse.json(asset, { status: 201 })
  } catch (error) {
    console.error('Error creating asset:', error)
    return NextResponse.json(
      { error: 'Failed to create asset' },
      { status: 500 }
    )
  }
}
