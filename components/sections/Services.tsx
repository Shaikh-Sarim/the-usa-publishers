import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    image: '/images/services/ghost writing.jpg',
    title: 'Ghostwriting Services',
    description: 'Turn your ideas into a manuscript with our professional book writing services. Hire a book writer online or collaborate with experienced storytellers to turn your dreams into reality.',
    slug: 'ghostwriting',
  },
  {
    id: 2,
    image: '/images/services/book cover design.jpg',
    title: 'eBook Editing & Publishing',
    description: 'Prepare your manuscript for success with expert editing. We ensure your book meets industry standards for both print and Amazon KDP publishing.',
    slug: 'editing',
  },
  {
    id: 3,
    image: '/images/services/book formating.jpg',
    title: 'Book Formatting Services',
    description: 'Make your book visually appealing and reader-friendly with our professional KDP book formatting services and get smooth self publishing.',
    slug: 'design',
  },
  {
    id: 4,
    image: '/images/services/marketing.jpg',
    title: 'Book Marketing Services',
    description: 'Maximize your book\'s reach with targeted book marketing strategies. We help position your book for visibility and long-term success in competitive markets.',
    slug: 'marketing',
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">OUR SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            Fetch the Best Professional Book Writing Services
          </h2>
          <p className="text-[#536079] max-w-3xl mx-auto text-lg">
            All Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="p-8 border-2 border-[#D8E0EE] rounded-xl hover:border-[#C1121F] hover:shadow-usa transition group overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-full h-56 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={280}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#C1121F] mb-2 font-mono">
                      {String(service.id).padStart(2, '0')}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3C6D] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#536079] mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-[#C1121F] font-semibold hover:text-[#A00D1A] transition inline-flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="group-hover/link:translate-x-1 transition">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
