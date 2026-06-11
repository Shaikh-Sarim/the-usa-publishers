'use client'

import { useState, useEffect } from 'react'

interface Platform {
  name: string
  platform: string
  imageUrl: string
}

export default function PlatformsCarousel({ assets }: { assets: Platform[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    // Auto-slide every 4 seconds on mobile only
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % assets.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isMobile, assets.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % assets.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + assets.length) % assets.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full">
      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="relative flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#0B3C6D] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition"
            aria-label="Previous platform"
          >
            ←
          </button>

          {/* Carousel Item */}
          <div className="flex-1 max-w-xs">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">
                {assets[currentIndex].imageUrl.startsWith('http') ? (
                  <img
                    src={assets[currentIndex].imageUrl}
                    alt={assets[currentIndex].name}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  assets[currentIndex].imageUrl
                )}
              </div>
              <p className="text-sm font-bold text-[#0B3C6D] text-center leading-tight">
                {assets[currentIndex].name}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-[#0B3C6D] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition"
            aria-label="Next platform"
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {assets.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-[#D4A017]' : 'bg-white'
              }`}
              aria-label={`Go to platform ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-5 gap-6">
        {assets.map((platform) => (
          <div
            key={platform.name}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-4xl mb-3">
              {platform.imageUrl.startsWith('http') ? (
                <img
                  src={platform.imageUrl}
                  alt={platform.name}
                  className="w-14 h-14 object-contain"
                />
              ) : (
                platform.imageUrl
              )}
            </div>
            <p className="text-sm font-bold text-[#0B3C6D] text-center leading-tight">
              {platform.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
