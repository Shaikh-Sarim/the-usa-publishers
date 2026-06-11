import { prisma } from '@/lib/prisma'
import PlatformsCarousel from '@/components/PlatformsCarousel'

export default async function TrustBar() {
  let assets = [
    { name: 'Amazon KDP', platform: 'Amazon KDP', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wH44pbRUUgNo-BK-NAAglZk8PoQ6G4-4zw&s' },
    { name: 'Barnes & Noble', platform: 'Barnes & Noble', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dfAG1r1cHmibBqST7cBo9PCycSl2Dkpp8g&s' },
    { name: 'Kobo', platform: 'Kobo', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMy-ebm_hexuGQkNWs_jvzJeXg1jY7Hzp_g&s' },
    { name: 'Apple Books', platform: 'Apple Books', imageUrl: 'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg' },
    { name: 'IngramSpark', platform: 'IngramSpark', imageUrl: 'https://www.ingramspark.com/favicon.ico' },
  ]

  try {
    const dbAssets = await prisma.asset.findMany({
      where: { featured: true },
      orderBy: { order: 'asc' },
    })
    
    if (dbAssets.length > 0) {
      assets = dbAssets.map((asset: any) => ({
        name: asset.name,
        platform: asset.platform,
        imageUrl: asset.imageUrl,
      }))
    }
  } catch (error) {
    console.error('Error fetching assets:', error)
  }

  return (
    <section className="bg-[#0B3C6D] py-16 md:py-20 border-y-2 border-[#C1121F]">
      <div className="container-max">
        <p className="text-center text-[#D4A017] text-sm mb-10 font-bold uppercase tracking-widest">
          We Publish to Major Platforms
        </p>
        <PlatformsCarousel assets={assets} />
      </div>
    </section>
  )
}
