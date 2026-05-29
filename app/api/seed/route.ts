import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Create admin user if doesn't exist
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: 'admin@theusapublishers.com' },
    })

    if (!existingAdmin) {
      const admin = await prisma.adminUser.create({
        data: {
          email: 'admin@theusapublishers.com',
          password: 'admin123',
          name: 'Admin',
        },
      })
      console.log('Admin user created:', admin)
    } else {
      console.log('Admin user already exists')
    }

    // Create sample assets if they don't exist
    const assetsCount = await prisma.asset.count()
    
    if (assetsCount === 0) {
      const assets = await prisma.asset.createMany({
        data: [
          {
            name: 'Amazon KDP',
            platform: 'Amazon KDP',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wH44pbRUUgNo-BK-NAAglZk8PoQ6G4-4zw&s',
            description: 'Kindle Direct Publishing',
            featured: true,
            order: 1,
          },
          {
            name: 'Barnes & Noble',
            platform: 'Barnes & Noble',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dfAG1r1cHmibBqST7cBo9PCycSl2Dkpp8g&s',
            description: 'Barnes & Noble Press',
            featured: true,
            order: 2,
          },
          {
            name: 'Kobo',
            platform: 'Kobo',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMy-ebm_hexuGQkNWs_jvzJeXg1jY7Hzp_g&s',
            description: 'Kobo Writing Life',
            featured: true,
            order: 3,
          },
          {
            name: 'Apple Books',
            platform: 'Apple Books',
            imageUrl: 'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg',
            description: 'Apple Books',
            featured: true,
            order: 4,
          },
          {
            name: 'IngramSpark',
            platform: 'IngramSpark',
            imageUrl: 'https://www.ingramspark.com/favicon.ico',
            description: 'Independent Publishing',
            featured: true,
            order: 5,
          },
        ],
      })
      console.log(`Created ${assets.count} sample assets`)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Database seeded successfully',
        credentials: {
          email: 'admin@theusapublishers.com',
          password: 'admin123'
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Failed to seed database', details: error },
      { status: 500 }
    )
  }
}
