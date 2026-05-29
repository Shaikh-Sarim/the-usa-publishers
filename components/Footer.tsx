import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B3C6D] text-white py-12 border-t-4 border-[#C1121F]">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="bg-[#C1121F] text-white px-2 py-1 rounded text-sm">The</span>
              <span className="text-white">Usa</span>
              <span className="text-[#C1121F]">Publishers</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Professional book publishing and writing services to transform your ideas into published works.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#D4A017] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A017] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4A017] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#D4A017] transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4A017] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/ghostwriting" className="hover:text-[#D4A017] transition">
                  Ghostwriting
                </Link>
              </li>
              <li>
                <Link href="/services/editing" className="hover:text-[#D4A017] transition">
                  Editing & Proofreading
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-[#D4A017] transition">
                  Book Design
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-[#D4A017] transition">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Contact Us</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <FiPhone size={16} className="mt-1 text-[#D4A017] flex-shrink-0" />
                <a href="tel:+12132674279" className="hover:text-[#D4A017] transition">
                  +1 213 267 4279
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FiMail size={16} className="mt-1 text-[#D4A017] flex-shrink-0" />
                <a href="mailto:support@theusapublishers.com" className="hover:text-[#D4A017] transition">
                  support@theusapublishers.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E5288] my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} The USA Publishers. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#D4A017] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D4A017] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
