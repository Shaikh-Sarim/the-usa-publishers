import LeadForm from '@/components/forms/LeadForm'
import Link from 'next/link'

export const metadata = {
  title: 'Professional Ghostwriting Services - The USA Publishers',
  description: 'Transform your ideas into a compelling manuscript with our professional ghostwriting services.',
}

const serviceDetails = {
  ghostwriting: {
    title: 'Professional Ghostwriting Services',
    subtitle: 'Expert Manuscript Development',
    description: 'Our experienced ghostwriters work with you to transform your ideas, knowledge, and stories into professionally written manuscripts.',
    features: [
      'One-on-one collaboration with experienced ghostwriters',
      'Multiple draft revisions and feedback incorporation',
      'Complete confidentiality and intellectual property protection',
      'Custom writing style matched to your voice and vision',
      'Manuscript development from concept to completion',
      'Genre expertise across fiction, non-fiction, and specialized topics',
    ],
    benefits: [
      'Save time and focus on content while professionals handle writing',
      'Professional quality manuscript ready for publishing',
      'Flexible timeline and customizable service packages',
      'Transparent communication throughout the process',
      'Your name as the author - full credit and recognition',
      'Complete ownership of your manuscript and all rights',
    ],
  },
}

export default function ServiceDetailPage() {
  const service = serviceDetails.ghostwriting

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container-max">
          <p className="text-red-400 font-semibold mb-2">SERVICE DETAILS</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
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
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Service Features
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-red-600 font-bold flex-shrink-0">★</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized quote.
          </p>
          <Link href="/contact" className="px-8 py-3 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
