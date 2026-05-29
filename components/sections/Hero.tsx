'use client'

import { useState } from 'react'
import Image from 'next/image'
import LeadForm from '@/components/forms/LeadForm'

export default function Hero() {
  return (
    <section className="bg-[#F8F9FC] pt-16 md:pt-24 pb-16 md:pb-24 relative overflow-hidden">
      {/* USA Flag Background */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 hidden md:flex items-center justify-end">
        <div className="flex flex-col h-40 w-56">
          <div className="flex-1 bg-[#0B3C6D] w-full"></div>
          <div className="flex-1 bg-white w-full"></div>
          <div className="flex-1 flex">
            <div className="w-1/2 bg-[#0B3C6D]"></div>
            <div className="w-1/2 bg-[#C1121F]"></div>
          </div>
        </div>
      </div>
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C6D] mb-6 leading-tight">
              Transform Your Manuscript Into A Published Bestseller
            </h1>
            <p className="text-lg text-[#1B263B] mb-4">
              Professional book publishing services including ghostwriting, editing, cover design, and global distribution to help authors succeed.
            </p>
            <p className="text-base text-[#536079] mb-8">
              Whether you're a first-time author or an experienced writer, our comprehensive services cover every aspect of book publishing from manuscript development to marketing strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Get Started Today</button>
              <button className="btn-primary-outline">Learn More</button>
            </div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <div className="bg-white rounded-lg p-8 shadow-usa border-2 border-[#0B3C6D]">
            <h2 className="text-2xl font-bold text-[#0B3C6D] mb-6">Get Free Consultation</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
