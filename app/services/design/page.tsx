import Image from 'next/image'
import LeadForm from '@/components/forms/LeadForm'
import Link from 'next/link'

export const metadata = {
  title: 'Book Formatting Services - The USA Publishers',
  description: 'Professional book formatting for KDP, print publishing, and eBook platforms. Make your book visually appealing and reader-friendly.',
}

const serviceDetails = {
  design: {
    title: 'Book Formatting Services',
    subtitle: 'Professional Design for Print & Digital',
    description: 'Transform your manuscript into a beautifully formatted book. Our expert designers handle all aspects of formatting for Amazon KDP, print publishing, and eBook platforms.',
    features: [
      'Interior layout and design for print books',
      'Responsive eBook formatting for Kindle and ePub',
      'Professional typography and font selection',
      'Page setup with proper margins and spacing',
      'Chapter headers and decorative elements',
      'Table of contents and index formatting',
      'Image and graphic optimization',
      'Print-ready PDF generation',
    ],
    benefits: [
      'Create a professional appearance that attracts readers',
      'Optimize for multiple platforms (print, Kindle, ePub)',
      'Ensure consistent formatting throughout your book',
      'Meet publishing platform technical requirements',
      'Enhance reader experience with proper layout',
      'Reduce publishing delays with compliant formatting',
      'Customize design to match your brand identity',
      'Technical support throughout the publishing process',
    ],
  },
}

export default function DesignServicePage() {
  const service = serviceDetails.design

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#0B3C6D] to-[#062847] text-white">
        <div className="container-max">
          <p className="text-[#D4A017] font-semibold mb-2">SERVICE DETAILS</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-gray-300 text-lg">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Service Image */}
            <div className="md:col-span-1">
              <div className="w-full rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center h-80 shadow-lg border-2 border-[#0B3C6D]/10">
                <Image
                  src="/images/services/book%20formating.jpg"
                  alt="Book Formatting Services"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"

                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0B3C6D] mb-6">
                About This Service
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                {service.description}
              </p>
              <button className="btn-primary">
                Get Started
              </button>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg border-2 border-[#0B3C6D]/10">
              <h3 className="text-2xl font-bold text-[#0B3C6D] mb-6">
                Schedule Consultation
              </h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-[#0B3C6D] mb-12 text-center">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-[#0B3C6D] mb-6">
                Service Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#C1121F] font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B3C6D] mb-6">
                Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#C1121F] font-bold flex-shrink-0">★</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0B3C6D] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Book Visually Stunning?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your formatting needs and get a professional design quote.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4A017] text-[#0B3C6D] font-semibold rounded hover:bg-[#C4941A] transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
