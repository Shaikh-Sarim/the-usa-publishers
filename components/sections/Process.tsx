const steps = [
  {
    id: 1,
    title: 'Manuscript Review & Editing',
    description: 'Our team carefully reviews your content to ensure it is clear and publication-ready. We enhance structure and prepare your manuscript for high-quality book publishing services while preserving your unique voice.',
    cta: 'Discuss with us to AVAIL 50% Discount',
  },
  {
    id: 2,
    title: 'Professional KDP Book Formatting Services',
    description: 'We handle all technical aspects of book formatting and publishing, including layout design, typography and ISBN setup. Our professional KDP book formatting services ensure your book is optimized for seamless Amazon KDP publishing.',
    cta: 'Discuss with us to AVAIL 50% Discount',
  },
  {
    id: 3,
    title: 'Distribution & Marketing',
    description: 'With our Amazon book publishing services and global distribution network, your book becomes available on major platforms like Amazon and Barnes & Noble. We also implement targeted book marketing strategies to increase visibility.',
    cta: 'Discuss with us to AVAIL 50% Discount',
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description: 'Publishing doesn\'t end at launch. As one of the most reliable book publishing companies USA, we provide continued support including performance tracking, updates and strategic guidance to help you grow as an author.',
    cta: 'Discuss with us to AVAIL 50% Discount',
  },
]

export default function Process() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-[#C1121F] font-bold mb-3 text-sm uppercase tracking-widest">OUR PROCESS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C6D] mb-6">
            Our Value-Driven Process
          </h2>
          <p className="text-[#536079] max-w-3xl mx-auto text-lg">
            As a trusted book publishing company USA, we combine strategy and technology to guide authors through every stage of self publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative p-8 bg-white border-2 border-[#D8E0EE] rounded-xl hover:border-[#C1121F] transition group"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#C1121F] text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition">
                {String(step.id).padStart(2, '0')}
              </div>

              <h3 className="text-2xl font-bold text-[#0B3C6D] mb-4 mt-2">
                {step.title}
              </h3>
              <p className="text-[#536079] mb-6 leading-relaxed">
                {step.description}
              </p>
              <p className="text-sm font-semibold text-[#C1121F] uppercase tracking-wide">
                {step.cta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
