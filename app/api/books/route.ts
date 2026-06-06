import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, author, description, imageUrl, category, featured } = body

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      )
    }

    const book = await prisma.book.create({
      data: {
        title,
        author: author || null,
        description: description || null,
        imageUrl: imageUrl || '',
        category: category || null,
        featured: featured || false,
      },
    })

    return NextResponse.json(book, { status: 201 })
  } catch (error) {
    console.error('Error creating book:', error)
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured') === 'true'
    const limit = parseInt(searchParams.get('limit') || '12')

    const where = featured ? { featured: true } : {}

    const books = await prisma.book.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    })
    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    )
  }
}
