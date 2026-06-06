'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const authorStories = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Bestselling Author',
    quote: 'I needed professional writers for hire, and The USA Publishers exceeded all my expectations. Their ghostwriting team transformed my ideas into a masterpiece.',
    image: '/images/author1.jpg',
    achievement: '50K+ Copies Sold',
    bgPosition: 'left',
  },
  {
    id: 2,
    name: 'David Chen',
    title: 'First-Time Author',
    quote: 'From manuscript to bestseller, their team was with me every step. The most professional publishing company I could have chosen.',
    image: '/images/author2.jpg',
    achievement: '#1 in Category',
    bgPosition: 'right',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Author & Entrepreneur',
    quote: 'Their book marketing services helped me reach readers worldwide. My book launch was a phenomenal success!',
    image: '/images/author3.jpg',
    achievement: 'International Recognition',
    bgPosition: 'left',
  },
]

export default function AuthorStories() {
  const router = useRouter()
  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">SUCCESS STORIES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            Real Authors, Real Success
          </h2>
          <p className="text-[#536079] max-w-3xl mx-auto text-lg">
            Discover how we've helped authors like you transform their dreams into published bestsellers
          </p>
        </div>

        {/* Author Stories */}
        <div className="space-y-12">
          {authorStories.map((story, index) => (
            <div key={story.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition border border-[#D8E0EE]">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white ${story.bgPosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={`relative h-80 md:h-96 overflow-hidden flex-shrink-0 ${story.bgPosition === 'right' ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C6D]/20 to-[#C1121F]/20"></div>
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content Side */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${story.bgPosition === 'right' ? 'md:order-1' : ''}`}>
                  {/* Quote Badge */}
                  <div className="mb-6 flex gap-3">
                    <div className="text-5xl text-[#D4A017]">"</div>
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl font-semibold text-[#1B263B] mb-6 leading-relaxed">
                    {story.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#D8E0EE]">
                    <div>
                      <p className="font-bold text-[#0B3C6D] text-lg">
                        {story.name}
                      </p>
                      <p className="text-[#536079] font-medium">
                        {story.title}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#C1121F] font-bold uppercase tracking-wide mb-1">Achievement</p>
                      <p className="font-semibold text-[#0B3C6D]">
                        {story.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0B3C6D] to-[#062847] rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful authors who trusted The USA Publishers with their publishing journey.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="px-8 py-3 bg-[#D4A017] text-[#0B3C6D] font-semibold rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-xl cursor-pointer">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}
