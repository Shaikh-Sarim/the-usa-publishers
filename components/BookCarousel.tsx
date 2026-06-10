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

export default function BookCarousel({ books, autoPlayDelay = 6000 }: BookCarouselProps) {
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
    <div className="relative w-full px-8 md:px-12 py-6">
      {/* Carousel container */}
      <div className="overflow-visible">
        <div
          className="flex transition-transform duration-700 ease-out justify-start"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (16 + 24)}px))`,
            gap: '16px',
          }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="flex-shrink-0"
              style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (16) / itemsPerView}px)` }}
            >
              <div className="relative rounded-lg overflow-hidden" style={{ aspectRatio: '3/4' }}>
                {book.imageUrl ? (
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B3C6D] to-[#C1121F]"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#0B3C6D] text-white shadow-lg hover:bg-[#062847]"
        aria-label="Previous book"
      >
        <FiChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#0B3C6D] text-white shadow-lg hover:bg-[#062847]"
        aria-label="Next book"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  )
}
