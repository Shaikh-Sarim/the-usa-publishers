export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      author: 'Jennifer Helmer',
      title: 'Bestselling Author',
      content: 'Outstanding company and I love working with their team! They transformed my manuscript into a bestseller. The professional writers they connected me with were absolutely exceptional.',
      rating: 5,
      avatar: '👩‍💼',
      specialty: 'Fiction',
    },
    {
      id: 2,
      author: 'Kevin Miller',
      title: 'First-time Author',
      content: 'The publishing process can be overwhelming, but it was made simple and transparent. Their team guided me through every step with professionalism and care.',
      rating: 5,
      avatar: '👨‍💼',
      specialty: 'Business',
    },
    {
      id: 3,
      author: 'Chris Thomas',
      title: 'Published Author',
      content: 'I\'ve worked with several publishers, but The USA Publishers stands out. Their dedication to quality and author success is unmatched in the industry.',
      rating: 5,
      avatar: '👨‍🎓',
      specialty: 'Self-Help',
    },
    {
      id: 4,
      author: 'Sarah Bennett',
      title: 'Award-Winning Author',
      content: 'Their team guided me from manuscript to award-winning publication. The marketing strategies they implemented resulted in international recognition for my work.',
      rating: 5,
      avatar: '👩',
      specialty: 'Mystery',
    },
    {
      id: 5,
      author: 'Daniel Ortiz',
      title: 'Published Author',
      content: 'Top-notch editing and cover design. My book finally looks and reads exactly how I imagined it. The professionalism here is truly world-class.',
      rating: 5,
      avatar: '👨‍🏫',
      specialty: 'Education',
    },
    {
      id: 6,
      author: 'Megan Lewis',
      title: 'Self-Published Success',
      content: 'Smooth Amazon KDP publishing experience with incredible communication and quick turnarounds. They made my self-publishing dreams a reality with expert guidance.',
      rating: 5,
      avatar: '👩‍🔬',
      specialty: 'Science',
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
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-2 border-[#D8E0EE] hover:border-[#C1121F] flex flex-col h-full"
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
              <div className="mb-2">
                <p className="text-sm font-semibold text-[#C1121F] uppercase tracking-wide mb-2">
                  {testimonial.specialty}
                </p>
              </div>

              <p className="text-[#1B263B] mb-6 leading-relaxed flex-grow">
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
