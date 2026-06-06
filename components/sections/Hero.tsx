'use client'

import { useState, useEffect } from 'react'
import LeadForm from '@/components/forms/LeadForm'
import BookCarousel from '@/components/BookCarousel'

interface Book {
  id: string
  title: string
  author?: string
  imageUrl: string
  description?: string
  featured: boolean
}

export default function Hero() {
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books?featured=true&limit=12')
        if (response.ok) {
          const data = await response.json()
          setBooks(data)
        }
      } catch (error) {
        console.error('Error fetching books:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBooks()
  }, [])

  return (
    <section className="relative pt-16 md:pt-24 pb-0 overflow-hidden">
      {/* USA Flag Themed Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(11, 60, 109, 0.45) 0%, rgba(193, 18, 31, 0.45) 100%),
            url('/images/herosection.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      {/* Content */}
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[700px]">
          {/* Left Column */}
          <div className="text-white">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-1 h-3">
                <div className="w-1 bg-white"></div>
                <div className="w-1 bg-[#D4A017]"></div>
                <div className="w-1 bg-white"></div>
              </div>
              <span className="text-[#D4A017] font-bold text-xs uppercase tracking-widest">Professional Publishing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Manuscript Into A Published Bestseller
            </h1>
            <p className="text-lg text-gray-100 mb-4">
              Professional book publishing services including ghostwriting, editing, cover design, and global distribution to help authors succeed.
            </p>
            <p className="text-base text-gray-200 mb-8">
              Whether you're a first-time author or an experienced writer, our comprehensive services cover every aspect of book publishing from manuscript development to marketing strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-[#0B3C6D] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="px-6 py-3 bg-[#D4A017] text-white font-semibold rounded-lg hover:bg-[#C4941A] transition-all shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Empty for background visibility */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Book Slider - At bottom of hero section */}
      <div className="relative z-20 bg-gradient-to-t from-black/40 to-transparent pt-12 pb-24">
        <div className="container-max">
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-80 bg-gray-700/30 rounded-xl"></div>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2 w-6 bg-gray-700/30 rounded-full"></div>
                ))}
              </div>
            </div>
          ) : (
            <BookCarousel books={books} />
          )}
        </div>
      </div>
    </section>
  )
}
