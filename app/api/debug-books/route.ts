import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const allBooks = await prisma.book.findMany()
    const featuredBooks = await prisma.book.findMany({
      where: { featured: true }
    })

    return NextResponse.json({
      total: allBooks.length,
      featured: featuredBooks.length,
      allBooks: allBooks.map(b => ({
        id: b.id,
        title: b.title,
        author: b.author,
        imageUrl: b.imageUrl,
        featured: b.featured
      })),
      featuredBooks: featuredBooks.map(b => ({
        id: b.id,
        title: b.title,
        author: b.author,
        imageUrl: b.imageUrl,
        featured: b.featured
      }))
    })
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json({ error: 'Failed to debug' }, { status: 500 })
  }
}
