export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B3C6D] text-white py-16 md:py-24">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The USA Publishing</h1>
          <p className="text-xl max-w-3xl text-[#D4A017]">
            Recognized as a trusted book publishing company USA, The USA Publishing combines creativity with strategy to deliver books that are not only professionally written but also positioned for success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-10 bg-[#F8F9FC] rounded-xl border-2 border-[#D8E0EE]">
              <h2 className="text-3xl font-bold text-[#0B3C6D] mb-4">Our Mission</h2>
              <p className="text-lg text-[#536079] leading-relaxed">
                To empower authors by providing comprehensive, professional book publishing services that transform manuscripts into market-ready publications. We believe every great story deserves to be told, and our mission is to make that possible for authors at every level.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 bg-[#F8F9FC] rounded-xl border-2 border-[#D8E0EE]">
              <h2 className="text-3xl font-bold text-[#0B3C6D] mb-4">Our Vision</h2>
              <p className="text-lg text-[#536079] leading-relaxed">
                To be the most trusted and innovative book publishing partner for authors worldwide. We envision a world where talented writers have access to world-class publishing services, regardless of their background or experience level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="container-max">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-16 text-center">
            Why Choose The USA Publishing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Expert Team',
                description: 'Our team comprises experienced editors, designers, and publishing professionals with a passion for excellence.',
                icon: '👥',
              },
              {
                title: 'Comprehensive Services',
                description: 'From ghostwriting to marketing, we handle every aspect of book publishing so you can focus on your story.',
                icon: '✓',
              },
              {
                title: 'Proven Track Record',
                description: 'We\'ve helped hundreds of authors publish successful books across multiple genres and platforms.',
                icon: '🏆',
              },
              {
                title: 'Affordable Pricing',
                description: 'Professional publishing shouldn\'t break the bank. We offer flexible pricing packages for every budget.',
                icon: '💰',
              },
              {
                title: 'Ongoing Support',
                description: 'Our relationship with authors doesn\'t end at publication. We provide continued support and guidance.',
                icon: '📞',
              },
              {
                title: 'Global Distribution',
                description: 'Your book will be available on Amazon, Barnes & Noble, Kobo, and other major platforms worldwide.',
                icon: '🌍',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0B3C6D] mb-3">{item.title}</h3>
                <p className="text-[#536079]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-[#0B3C6D] text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Books Published' },
              { number: '1000+', label: 'Happy Authors' },
              { number: '50M+', label: 'Global Readers' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-[#D4A017] mb-2">{stat.number}</div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
              Ready to Publish Your Book?
            </h2>
            <p className="text-xl text-[#536079] mb-10 max-w-2xl mx-auto">
              Let\'s work together to turn your manuscript into a professional, market-ready publication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-[#0B3C6D] text-white font-bold rounded-lg hover:bg-[#062847] transition">
                Get Started
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-[#0B3C6D] text-[#0B3C6D] font-bold rounded-lg hover:bg-[#F8F9FC] transition">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
