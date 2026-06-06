import Image from 'next/image'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Portfolio - The USA Publishers',
  description: 'Browse our collection of published books across various genres and categories.',
}

export default async function PortfolioPage() {
  let books: any[] = []
  try {
    books = await prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching books:', error)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B3C6D] text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl text-[#D4A017]">
            Explore our diverse collection of successfully published books across all genres and categories.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-max">
          {books && books.length > 0 ? (
            <>
              <div className="mb-12">
                <p className="text-[#536079] text-center text-lg mb-4">
                  {books.length} published books
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
                {books.map((book: any) => (
                  <div
                    key={book.id}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="aspect-[3/4] relative bg-gradient-to-br from-[#0B3C6D] to-[#1E5288] flex items-center justify-center">
                      {book.imageUrl && (
                        <Image
                          src={book.imageUrl}
                          alt={book.title}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-300"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition flex items-end">
                      <div className="w-full p-4 text-white opacity-0 group-hover:opacity-100 transition">
                        <p className="text-sm font-semibold line-clamp-2 mb-1">{book.title}</p>
                        {book.author && (
                          <p className="text-xs text-gray-300">{book.author}</p>
                        )}
                        {book.category && (
                          <p className="text-xs text-[#D4A017] mt-2">{book.category}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-[#0B3C6D] mb-4">Coming Soon</h2>
              <p className="text-[#536079] mb-6 text-lg">
                Check back soon to see our published books.
              </p>
              <a href="/contact" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
                Start Your Project
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6D] mb-6">
            Want Your Book to Be Featured?
          </h2>
          <p className="text-lg text-[#536079] mb-10 max-w-2xl mx-auto">
            Join our growing list of bestselling authors. Start your publishing journey with The USA Publishers today.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  )
}
