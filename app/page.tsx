import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import TrustBar from '@/components/sections/TrustBar'

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}
