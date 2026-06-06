'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PublishingServices() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const services = [
    { icon: '✍️', text: 'Ghostwriting' },
    { icon: '📚', text: 'Book Cover Design' },
    { icon: '🔍', text: 'Proof Reading' },
    { icon: '📖', text: 'Book Publishing' },
    { icon: '✏️', text: 'Book Editing' },
    { icon: '📢', text: 'Book Marketing' },
  ]

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6D] mb-6 leading-tight">
              Amazon Book Publishing Services for New Authors
            </h2>

            <p className="text-[#536079] mb-6 leading-relaxed text-lg">
              Every book begins with an idea but turning that idea into a manuscript requires skill and experience. The USA Publishers offers professional book writing services designed to help authors bring their vision to life.
            </p>

            <p className="text-[#536079] mb-8 leading-relaxed">
              Whether you're looking to hire a book writer online, work with non-fiction book writing experts, or collaborate with experienced book writing consultants, our team provides custom support based on your goals. We take the time to understand your concept, voice, and audience, ensuring your book reflects your message while meeting professional publishing standards.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-semibold text-[#0B3C6D]">{service.text}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-lg hover:shadow-xl">
              Let's Get Started
            </button>
          </div>

          {/* Right Side - Image with Quote */}
          <div className="relative">
            <div className="relative h-96 group">
              <Image
                src="/images/amazon book publishing.png"
                alt="Amazon Book Publishing Services"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-8 -right-8 w-64 bg-blue-500 rounded-2xl p-6 shadow-xl">
              <p className="text-white text-center text-2xl font-bold mb-2">
                I Need Professional Writers For Hire!
              </p>
              <p className="text-blue-100 text-center text-sm">
                Join 1000+ successful authors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
