import Image from 'next/image'

export default function ProQuotes() {
  const quotes = [
    {
      id: 1,
      text: 'Publishing is a journey, not a destination. We guide you every step of the way.',
      author: 'The USA Publishers',
      icon: '📚',
    },
    {
      id: 2,
      text: 'Your story deserves to be heard. Let us help you share it with the world.',
      author: 'Our Commitment',
      icon: '✍️',
    },
    {
      id: 3,
      text: 'Professional ghostwriters for hire, expert editing, beautiful design – everything you need to succeed.',
      author: 'Our Promise',
      icon: '🎯',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-max">
        {/* Professional Quotes Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#0B3C6D] mb-12">
            Why Authors Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote) => (
              <div
                key={quote.id}
                className="p-8 bg-gradient-to-br from-[#0B3C6D]/5 to-[#C1121F]/5 rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] transition hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{quote.icon}</div>
                <blockquote className="text-lg font-semibold text-[#0B3C6D] mb-4 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <p className="text-[#C1121F] font-bold text-sm uppercase tracking-widest">
                  {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t-2 border-[#D8E0EE]">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#C1121F] mb-2">500+</div>
            <p className="text-[#536079] font-medium">Books Published</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#C1121F] mb-2">1000+</div>
            <p className="text-[#536079] font-medium">Happy Authors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#C1121F] mb-2">15+</div>
            <p className="text-[#536079] font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#C1121F] mb-2">50+</div>
            <p className="text-[#536079] font-medium">Professional Writers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
