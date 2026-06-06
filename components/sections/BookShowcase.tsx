import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BookShowcase() {
  const router = useRouter()
  const bookCovers = [
    {
      id: 1,
      title: 'The Journey Begins',
      author: 'Sarah Mitchell',
      image: '/images/book1.jpg',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Business Mastery',
      author: 'Kevin Miller',
      image: '/images/book2.jpg',
      category: 'Business',
    },
    {
      id: 3,
      title: 'Life Lessons',
      author: 'Emily Rodriguez',
      image: '/images/book3.jpg',
      category: 'Self-Help',
    },
    {
      id: 4,
      title: 'Mystery Unveiled',
      author: 'David Chen',
      image: '/images/book4.jpg',
      category: 'Mystery',
    },
    {
      id: 5,
      title: 'Future Forward',
      author: 'Sarah Bennett',
      image: '/images/book5.jpg',
      category: 'Science',
    },
    {
      id: 6,
      title: 'Heart Stories',
      author: 'Jennifer Helmer',
      image: '/images/book6.jpg',
      category: 'Romance',
    },
  ]

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">BEAUTIFUL BOOKS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            Featured Published Books
          </h2>
          <p className="text-[#536079] max-w-3xl mx-auto text-lg">
            Discover the stunning book covers and designs we've created for our authors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookCovers.map((book) => (
            <div
              key={book.id}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 h-80">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-1">
                      {book.category}
                    </p>
                    <p className="text-lg font-bold mb-1">{book.title}</p>
                    <p className="text-sm text-gray-200">by {book.author}</p>
                  </div>
                </div>
              </div>

              {/* Book Info */}
              <div className="text-center">
                <p className="font-bold text-[#0B3C6D] text-sm uppercase mb-1">
                  {book.category}
                </p>
                <p className="text-[#536079] text-sm">
                  by {book.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-[#D8E0EE]">
          <p className="text-[#536079] mb-6 text-lg">
            These are just a few examples of the beautiful books we've published
          </p>
          <button 
            onClick={() => router.push('/portfolio')}
          <button 
            onClick={() => router.push('/portfolio')}
            className="px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition shadow-lg hover:shadow-xl cursor-pointer">
            See Our Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
