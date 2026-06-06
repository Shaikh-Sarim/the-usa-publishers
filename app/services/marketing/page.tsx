import Image from 'next/image'
import LeadForm from '@/components/forms/LeadForm'
import Link from 'next/link'

export const metadata = {
  title: 'Book Marketing Services - The USA Publishers',
  description: 'Maximize your book\'s reach with targeted book marketing strategies and promotional campaigns.',
}

const serviceDetails = {
  marketing: {
    title: 'Book Marketing Services',
    subtitle: 'Maximize Your Book\'s Reach & Sales',
    description: 'Comprehensive marketing strategies designed to increase your book\'s visibility, build your author platform, and drive sustainable sales across all channels.',
    features: [
      'Author platform development and branding',
      'Amazon and retailer optimization (KDP)',
      'Social media marketing and content strategy',
      'Book launch campaigns and pre-order strategies',
      'Email marketing and newsletter setup',
      'Book review promotion and publicity outreach',
      'Paid advertising (Amazon Ads, Facebook, Google)',
      'Analytics tracking and performance reporting',
    ],
    benefits: [
      'Increase book visibility in crowded markets',
      'Build a loyal reader base and mailing list',
      'Achieve higher rankings on retail platforms',
      'Generate consistent sales momentum',
      'Establish authority in your niche',
      'Maximize ROI on your publishing investment',
      'Create long-term income potential',
      'Expert guidance from marketing professionals',
    ],
  },
}

export default function MarketingServicePage() {
  const service = serviceDetails.marketing

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
                  src="/images/services/marketing.png"
                  alt="Book Marketing Services"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain p-4"
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
            Ready to Boost Your Book Sales?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your marketing goals and get a customized promotional strategy.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-[#D4A017] text-[#0B3C6D] font-semibold rounded hover:bg-[#C4941A] transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
