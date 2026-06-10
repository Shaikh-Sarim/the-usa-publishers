import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import BookCarousel from '@/components/BookCarousel'

export default async function Portfolio() {
  let books: any[] = []
  try {
    books = await prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
      take: 12,
    })
    console.log('✓ Portfolio: Found books:', books.length, books.map(b => ({ id: b.id, title: b.title })))
  } catch (error) {
    console.error('Error fetching books:', error)
  }

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">OUR PORTFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            Best Selling Books Published By Us
          </h2>
          <p className="text-[#536079] max-w-2xl mx-auto text-lg">
            Discover the diverse range of successfully published books across all genres.
          </p>
        </div>

        {books.length > 0 ? (
          <>
            <BookCarousel books={books} autoPlayDelay={6000} />
            <div className="text-center mt-12">
              <Link href="/portfolio" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
                See All Work
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-[#536079] mb-6 text-lg">
              Check back soon to see our published books.
            </p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
              Start Your Project
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
