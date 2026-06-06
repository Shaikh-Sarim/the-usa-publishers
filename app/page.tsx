import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import PublishingServices from '@/components/sections/PublishingServices'
import KDPServices from '@/components/sections/KDPServices'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import ProQuotes from '@/components/sections/ProQuotes'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import PublishingCTA from '@/components/sections/PublishingCTA'
import TrustBar from '@/components/sections/TrustBar'

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Services />
      <PublishingServices />
      <KDPServices />
      <Portfolio />
      <Process />
      <ProQuotes />
      <Testimonials />
      <FAQ />
      <PublishingCTA />
    </div>
  )
}
