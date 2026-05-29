'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    id: 1,
    question: 'What do your professional book publishing services include?',
    answer: 'Our book publishing services USA cover every stage of the publishing journey, including writing, editing, book formatting and publishing, cover design, and distribution. We offer full service book publishing packages designed to get your book published on major platforms.',
  },
  {
    id: 2,
    question: 'Are you a book publishing company in the USA?',
    answer: 'Yes, The USA Publishers is a recognized and trusted book publishing company based in the USA. We serve authors worldwide with our comprehensive publishing services.',
  },
  {
    id: 3,
    question: 'Do you offer help for first-time authors?',
    answer: 'Absolutely! We specialize in working with first-time authors. Our team provides guidance and support throughout the entire publishing process to make it easy and stress-free.',
  },
  {
    id: 4,
    question: 'Can I hire a professional writer to help me write my book?',
    answer: 'Yes, we offer professional ghostwriting services. Our experienced writers can help you develop your manuscript or write your entire book based on your ideas and outline.',
  },
  {
    id: 5,
    question: 'Do you offer professional KDP book formatting services?',
    answer: 'Yes, we provide comprehensive KDP book formatting services to ensure your book meets Amazon\'s specifications and looks professional on all devices.',
  },
  {
    id: 6,
    question: 'What is hybrid book publishing and do you offer it?',
    answer: 'Hybrid publishing combines elements of traditional and self-publishing. We offer hybrid publishing solutions that give you professional support while maintaining creative control.',
  },
  {
    id: 7,
    question: 'Do you help with book marketing after publishing?',
    answer: 'Yes, we provide comprehensive book marketing services to help increase visibility and sales of your published book through various strategies and platforms.',
  },
  {
    id: 8,
    question: 'What formats can you publish my book in?',
    answer: 'We can publish in multiple formats including eBook, paperback, hardcover, and large print. We ensure your book is available on all major platforms.',
  },
  {
    id: 9,
    question: 'How do I get started with your book publishing services?',
    answer: 'Getting started is simple! Contact us for a free consultation. We\'ll discuss your project, goals, and create a customized publishing plan tailored to your needs.',
  },
]

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Image & Text */}
          <div>
            <div className="bg-[#F8F9FC] rounded-xl p-8 mb-8 border-2 border-[#D8E0EE] text-center">
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-3xl font-bold text-[#0B3C6D] mb-3">FAQs</h2>
              <p className="text-[#536079] mb-6">
                Having another question?
              </p>
              <a href="/contact" className="inline-block px-6 py-3 bg-[#C1121F] text-white font-bold rounded-lg hover:bg-[#A00D1A] transition">
                Send A Message
              </a>
            </div>
          </div>

          {/* Right - FAQs */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-[#C1121F] font-bold text-sm uppercase tracking-widest mb-3\">Frequently Asked Questions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6D]">
                Your Questions Answered
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-2 border-[#D8E0EE] rounded-lg overflow-hidden hover:border-[#C1121F] transition"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F8F9FC] transition text-left"
                  >
                    <span className="font-bold text-[#0B3C6D] text-lg">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      size={20}
                      className={`text-[#C1121F] flex-shrink-0 transition duration-300 ${
                        expandedId === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedId === faq.id && (
                    <div className="px-6 py-4 bg-[#F8F9FC] border-t-2 border-[#D8E0EE] text-[#536079]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
