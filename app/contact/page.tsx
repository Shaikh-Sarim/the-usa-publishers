import LeadForm from '@/components/forms/LeadForm'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export const metadata = {
  title: 'Contact Us - The USA Publishing',
  description: 'Get in touch with our publishing team for questions, quotes, or to discuss your book project.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Have questions about our services? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+12132674279"
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      +1 213 267 4279
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:support@theusapublishers.com"
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      support@theusapublishers.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9 AM - 6 PM EST
                      <br />
                      Saturday & Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 bg-gray-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us A Message
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
