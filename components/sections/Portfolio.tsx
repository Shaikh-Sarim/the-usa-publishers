import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Portfolio() {
  let books: any[] = []
  try {
    books = await prisma.book.findMany({
      where: { featured: true },
      take: 12,
    })
    console.log('✓ Portfolio: Found featured books:', books.length, books.map(b => ({ id: b.id, title: b.title, featured: b.featured })))
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
                >
                  <div className="aspect-[3/4] relative bg-gray-200">
                    {book.imageUrl && (
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-end">
                    <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition">
                      <p className="text-sm font-semibold line-clamp-2">{book.title}</p>
                      {book.author && (
                        <p className="text-xs text-gray-300">{book.author}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
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
