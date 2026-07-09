import Image from 'next/image'

const mainServices = [
  {
    id: 1,
    image: '/images/services/ghost%20writing.jpg',
    title: 'Ghostwriting Services',
    description: 'Turn your ideas into a manuscript with our professional book writing services. Hire a book writer online or collaborate with experienced storytellers to turn your dreams into reality.',
    details: [
      'Full manuscript writing',
      'Outline development',
      'Research and content creation',
      'Multiple revisions included',
      'Confidentiality agreements',
    ],
  },
  {
    id: 2,
    image: '/images/services/book%20cover%20design.jpg',
    title: 'eBook Editing & Publishing',
    description: 'Prepare your manuscript for success with expert editing. We ensure your book meets industry standards for both print and Amazon KDP publishing.',
    details: [
      'Developmental editing',
      'Line editing',
      'Copy editing',
      'Proofreading',
      'Formatting for all platforms',
    ],
  },
  {
    id: 3,
    image: '/images/services/book%20formating.jpg',
    title: 'Book Formatting Services',
    description: 'Make your book visually appealing and reader-friendly with our professional KDP book formatting services and get smooth self publishing.',
    details: [
      'KDP-optimized formatting',
      'Interior design',
      'Cover design',
      'Typography excellence',
      'ISBN setup',
    ],
  },
  {
    id: 4,
    image: '/images/services/marketing.jpg',
    title: 'Book Marketing Services',
    description: 'Maximize your book\'s reach with targeted book marketing strategies. We help position your book for visibility and long-term success in competitive markets.',
    details: [
      'Marketing strategy',
      'Social media promotion',
      'Book launch campaigns',
      'Reviews management',
      'Author branding',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B3C6D] text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl text-[#D4A017]">
            Comprehensive professional book publishing services designed to help authors succeed at every stage of their publishing journey.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-28 bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {mainServices.map((service, idx) => {
              const isEven = idx % 2 === 0

              return (
                <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:auto-rows-fr'}`}>
                  {/* Content */}
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#C1121F] font-mono">
                        {String(service.id).padStart(2, '0')}
                      </div>
                    </div>

                    <h2 className="text-4xl font-bold text-[#0B3C6D] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#536079] mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-[#F8F9FC] p-8 rounded-xl border-2 border-[#D8E0EE] mb-8">
                      <h3 className="font-bold text-[#0B3C6D] mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#536079]">
                            <span className="w-2 h-2 bg-[#C1121F] rounded-full"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href="/contact" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
                      Learn More
                    </a>
                  </div>

                  {/* Image */}
                  <div className={isEven ? '' : 'md:order-1'}>
                    <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-28 bg-[#F8F9FC]">
        <div className="container-max">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-16 text-center">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Book Cover Design', image: '/images/services/book%20cover%20design.jpg' },
              { title: 'Interior Layout', image: '/images/services/interior%20layout.jpg' },
              { title: 'ISBN Setup', image: '/images/services/isbn.jpg' },
              { title: 'Distribution', image: '/images/services/distribution.jpg' },
              { title: 'Author Website', image: '/images/services/author%20wesbite.jpg' },
              { title: 'Reviews & Blurbs', image: '/images/services/reviews%20and%20blurbs.jpg' },
              { title: 'Indexing', image: '/images/services/indexing.jpg' },
              { title: 'Audiobook Services', image: '/images/services/audiobooks.jpg' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] transition text-center shadow-md hover:shadow-lg">
                <div className="mb-4 overflow-hidden rounded-lg h-80 bg-white flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={320}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <p className="font-bold text-[#0B3C6D] text-lg">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-28 bg-[#0B3C6D]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get Full Service Book Publishing Packages at 30% Off
            </h2>
            <p className="text-xl text-[#D4A017]">
              Get started today with our affordable book publishing services and save on expert solutions for both new and experienced authors.
            </p>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-block px-10 py-4 bg-[#C1121F] text-white font-bold text-lg rounded-lg hover:bg-[#A00D1A] transition shadow-lg">
              Get Started - Limited Time Offer
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C6D] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#536079] mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us discuss which services are right for your book.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
