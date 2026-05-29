import { prisma } from '@/lib/prisma'

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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {assets.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border-2 border-[#D8E0EE] hover:border-[#C1121F] hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-3">
                {platform.imageUrl.startsWith('http') ? (
                  <img
                    src={platform.imageUrl}
                    alt={platform.name}
                    className="w-14 h-14 object-contain"
                  />
                ) : (
                  platform.imageUrl
                )}
              </div>
              <p className="text-sm font-bold text-[#0B3C6D] text-center leading-tight">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
