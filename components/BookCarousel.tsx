'use client'

import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Book {
  id: string
  title: string
  author?: string
  imageUrl: string
  description?: string
}

interface BookCarouselProps {
  books: Book[]
  autoPlayDelay?: number
}

export default function BookCarousel({ books, autoPlayDelay = 8000 }: BookCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  // Show 3 books on desktop, 1 on mobile
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    setItemsPerView(getItemsPerView())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play with slow animation
  useEffect(() => {
    if (!autoplay || books.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, books.length - itemsPerView)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, autoPlayDelay)

    return () => clearInterval(interval)
  }, [autoplay, books.length, itemsPerView, autoPlayDelay])

  // Resume autoplay after user stops interacting
  useEffect(() => {
    const timeSinceLastInteraction = Date.now() - lastInteraction
    if (timeSinceLastInteraction < 1000) {
      setAutoplay(false)
      const resumeTimer = setTimeout(() => setAutoplay(true), 3000)
      return () => clearTimeout(resumeTimer)
    }
  }, [lastInteraction])

  const handlePrev = () => {
    setLastInteraction(Date.now())
    setCurrentIndex((prev) => {
      if (prev === 0) return Math.max(0, books.length - itemsPerView)
      return prev - 1
    })
  }

  const handleNext = () => {
    setLastInteraction(Date.now())
    const maxIndex = Math.max(0, books.length - itemsPerView)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handleIndicatorClick = (index: number) => {
    setLastInteraction(Date.now())
    setCurrentIndex(index)
  }

  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gradient-to-br from-[#F8F9FC] to-[#E6EBF4] rounded-xl border-2 border-dashed border-[#0B3C6D]/20">
        <div className="text-center">
          <p className="text-[#536079] font-semibold">No books to display yet</p>
          <p className="text-[#536079] text-sm">Featured books will appear here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Background decoration with USA flag colors */}
      <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-[#0B3C6D]/10 via-transparent to-[#C1121F]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

      <div className="relative">
        {/* Carousel container */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group/book">
                  {/* Book image */}
                  {book.imageUrl ? (
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0B3C6D] to-[#C1121F] flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">📖</div>
                        <p className="text-sm font-semibold">{book.title}</p>
                      </div>
                    </div>
                  )}

                  {/* USA Flag Stripe Overlay */}
                  <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-r from-[#0B3C6D] via-white to-[#C1121F]"></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/book:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <h3 className="font-bold text-lg line-clamp-2 mb-1">{book.title}</h3>
                    {book.author && (
                      <p className="text-xs text-gray-300">{book.author}</p>
                    )}
                  </div>

                  {/* Corner accent - USA flag colors */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#C1121F] rounded-full shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 z-10 p-2 md:p-3 rounded-full bg-[#0B3C6D] text-white shadow-lg hover:bg-[#062847] transition-all duration-300 hover:scale-110 active:scale-95 group-hover:translate-x-0"
          aria-label="Previous book"
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-8 z-10 p-2 md:p-3 rounded-full bg-[#0B3C6D] text-white shadow-lg hover:bg-[#062847] transition-all duration-300 hover:scale-110 active:scale-95 group-hover:-translate-x-0"
          aria-label="Next book"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4 px-4 flex-wrap">
          {books.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + itemsPerView
                  ? 'bg-[#0B3C6D] w-6'
                  : 'bg-[#0B3C6D]/30 w-2 hover:bg-[#0B3C6D]/60'
              }`}
              aria-label={`Go to book ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
