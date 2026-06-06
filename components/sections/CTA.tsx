'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CTA() {
  const router = useRouter()
  return (
    <section className="bg-[#0B3C6D] py-16 md:py-28 border-t-4 border-[#C1121F]">
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Hire Expert for Amazon KDP Setup Today
        </h2>
        <p className="text-xl text-white mb-3 max-w-3xl mx-auto leading-relaxed">
          The USA Publishers doesn't just offer services but becomes your dedicated publishing partner. From your first idea to final release, our team provides complete professional book publishing services designed to help you publish a best-selling book with confidence.
        </p>
        <p className="text-[#D4A017] text-lg mb-10 font-bold uppercase tracking-widest">
          UNLIMITED REVISION | GET ACCEPTED TO AMAZON FAST
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="px-8 py-4 bg-[#C1121F] text-white font-bold rounded-lg hover:bg-[#A00D1A] transition shadow-lg text-lg">
            Let's Get Started
          </Link>
          <button 
            onClick={() => router.push('/contact')}
            className="px-8 py-4 bg-white text-[#0B3C6D] font-bold rounded-lg hover:bg-[#D4A017] transition shadow-lg text-lg cursor-pointer">
            Live Chat
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-white text-sm mt-10 pt-10 border-t border-[#1E5288]">
          Contact: +1 213 267 4279 | support@theusapublishers.com
        </p>
      </div>
    </section>
  )
}
