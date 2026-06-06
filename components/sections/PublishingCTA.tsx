'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function PublishingCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'publishing-cta',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const processSteps = [
    { icon: '📋', text: 'Share your manuscript or project idea' },
    { icon: '📊', text: 'Receive a customized publishing plan and quotation' },
    { icon: '✅', text: 'Approve the plan and begin the process' },
    { icon: '👥', text: 'Work with expert teams for editing, design, and book publishing services' },
    { icon: '🚀', text: 'Launch your book through Amazon book publishing services and global platforms' },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#0F2A52] text-white overflow-hidden relative">

      <div className="container-max relative z-10">
        <div className="text-center mb-12">
          <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3">CONNECT WITH OUR PROFESSIONAL TEAM TODAY</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Publish Your Book with a Trusted Book Publishing Company USA?
            </h2>

            <p className="text-blue-100 mb-8 leading-relaxed">
              If you're ready to turn your manuscript into a professionally published book, The USA Publishers is here to guide you every step of the way. Tell us about your project and our team will provide a clear roadmap according to your goals.
            </p>

            <h3 className="text-2xl font-bold mb-6">STEP-BY-STEP PUBLISHING PROCESS</h3>
            <p className="text-blue-100 mb-6 font-semibold">Getting started is easy:</p>

            <div className="space-y-4 mb-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-2xl flex-shrink-0">{step.icon}</div>
                  <div className="text-blue-100">
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
              Free Consultation
            </button>
          </div>

          {/* Right Side - Form + Girl Image Background */}
          <div className="relative h-full min-h-96 flex flex-col justify-center">
            {/* Girl Image - Full Background */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src="/images/form girl.png"
                alt="Woman with Form"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Box - Overlaid on top left */}
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl max-w-sm h-fit">
              <h3 className="text-2xl font-bold text-[#0B3C6D] mb-2">
                Sign Up To Avail 50% Discount
              </h3>
              <p className="text-[#536079] mb-6 text-sm">
                Discuss Your Project With Our Experts
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-[#0B3C6D] text-sm"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-[#0B3C6D] text-sm"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-[#0B3C6D] text-sm"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Write Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 text-[#0B3C6D] resize-none text-sm"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-xs font-semibold">
                    ✓ Thank you! We'll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-xs font-semibold">
                    ✗ Error submitting form. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isLoading ? 'Submitting...' : 'Get Started Now'}
                </button>
              </form>

              <p className="text-center text-xs text-[#536079] mt-3">
                We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
