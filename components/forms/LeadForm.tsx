'use client'

import { useState } from 'react'
import { useTransition } from 'react'
import { submitLead } from '@/app/actions/leads'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isPending, startTransition] = useTransition()
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition(async () => {
      try {
        await submitLead(formData)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg mb-4 border-l-4 border-green-500">
          Thank you! We'll contact you shortly.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#0B3C6D] mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-[#D8E0EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C6D] focus:border-transparent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#0B3C6D] mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-[#D8E0EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C6D] focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#0B3C6D] mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-[#D8E0EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C6D] focus:border-transparent"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#0B3C6D] mb-1">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-[#D8E0EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C6D] focus:border-transparent"
        >
          <option value="">Select a service</option>
          <option value="ghostwriting">Ghostwriting</option>
          <option value="editing">Editing & Proofreading</option>
          <option value="design">Book Cover Design</option>
          <option value="publishing">Publishing & Distribution</option>
          <option value="marketing">Marketing & Promotion</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0B3C6D] mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border-2 border-[#D8E0EE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3C6D] focus:border-transparent"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        {isPending ? 'Sending...' : 'Get Free Consultation'}
      </button>
    </form>
  )
}
