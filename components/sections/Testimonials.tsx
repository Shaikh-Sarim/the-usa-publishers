export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      author: 'Jennifer Helmer',
      title: 'Author',
      content: 'Outstanding company and I love working with their team! They are the best!!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      author: 'Kevin Miller',
      title: 'First-time Author',
      content: 'The publishing process can be overwhelming, but it was made simple and transparent.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 3,
      author: 'Chris Thomas',
      title: 'Published Author',
      content: 'This is my second time buying from this brand. Their books never disappoint. Can\'t wait for the next release.',
      rating: 5,
      avatar: '👨‍🎓',
    },
    {
      id: 4,
      author: 'Sarah Bennett',
      title: 'Author',
      content: 'Their team guided me from manuscript to launch. Super professional and responsive throughout.',
      rating: 5,
      avatar: '👩',
    },
    {
      id: 5,
      author: 'Daniel Ortiz',
      title: 'Published Author',
      content: 'Top-notch editing and cover design. My book finally looks and reads exactly how I imagined it.',
      rating: 5,
      avatar: '👨‍🏫',
    },
    {
      id: 6,
      author: 'Megan Lewis',
      title: 'Self-Published Author',
      content: 'Smooth Amazon KDP publishing experience. Great communication and quick turnarounds.',
      rating: 5,
      avatar: '👩‍🔬',
    },
  ]

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            What Our Clients Are Saying About Us
          </h2>
          <p className="text-[#536079] max-w-3xl mx-auto text-lg">
            Nothing reflects our work better than the experiences of authors who have trusted us with their publishing journey. These reviews highlight the results we deliver to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-[#D8E0EE] hover:border-[#C1121F]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#D4A017] text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#1B263B] mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#D8E0EE] pt-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-[#0B3C6D]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#536079]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustindex Badge */}
        <div className="text-center mt-12 pt-12 border-t border-[#D8E0EE]">
          <p className="text-[#536079] text-sm">
            <span className="font-bold">Trustindex rating score:</span> 5.0 of 5, based on 169 reviews
          </p>
        </div>
      </div>
    </section>
  )
}
