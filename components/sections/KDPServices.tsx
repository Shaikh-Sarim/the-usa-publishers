'use client'

import Image from 'next/image'

export default function KDPServices() {

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6D] mb-6 leading-tight">
              Hire Expert for Amazon KDP Setup Today
            </h2>

            <p className="text-[#536079] mb-8 leading-relaxed">
              The USA Publishing doesn't just offer services but becomes your dedicated publishing partner. From your first idea to final release, our team provides complete professional book publishing services designed to help you publish a best-selling book with confidence.
            </p>

            <div className="mb-8 p-4 bg-white rounded-lg border-2 border-blue-300">
              <p className="font-bold text-[#0B3C6D] text-lg mb-4">
                UNLIMITED REVISION | GET ACCEPTED TO AMAZON FAST
              </p>
              <p className="text-[#536079]">
                We provide comprehensive support throughout your publishing journey, ensuring your book meets all Amazon KDP requirements and reaches readers quickly.
              </p>
            </div>

            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              Let's Get Started
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-96 group">
            <Image
              src="/images/amazonkdp.png"
              alt="Amazon KDP Publishing Services"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
