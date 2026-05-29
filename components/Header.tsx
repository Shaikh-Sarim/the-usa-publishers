'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0B3C6D] border-b-2 border-[#C1121F] shadow-usa-md">
      <nav className="container-max flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="bg-[#C1121F] text-white px-2 py-1 rounded">The</span>
            <span className="text-white">Usa</span>
            <span className="text-[#C1121F]">Publishers</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#D4A017] transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#D4A017] transition font-medium">
            About Us
          </Link>
          <Link href="/services" className="text-white hover:text-[#D4A017] transition font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="text-white hover:text-[#D4A017] transition font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-white hover:text-[#D4A017] transition font-medium">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link href="/contact" className="btn-primary">
            Get A Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1E5288] border-t-2 border-[#C1121F] py-4">
          <div className="container-max flex flex-col gap-4">
            <Link href="/" className="text-white hover:text-[#D4A017] transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#D4A017] transition font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-[#D4A017] transition font-medium">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-[#D4A017] transition font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white hover:text-[#D4A017] transition font-medium">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary w-full text-center">
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
