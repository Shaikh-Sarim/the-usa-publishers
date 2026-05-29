import { prisma } from '@/lib/prisma'
import { exec } from 'child_process'
import { promisify } from 'util'
import { NextResponse } from 'next/server'

const execAsync = promisify(exec)

export async function GET() {
  try {
    console.log('Starting database setup...')

    // Try to run Prisma push to create tables
    try {
      console.log('Running prisma db push...')
      await execAsync('npx prisma db push --skip-generate --skip-validate')
      console.log('Prisma db push completed')
    } catch (error) {
      console.log('Prisma db push output:', error)
    }

    // Wait a moment for tables to be created
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Now seed the database
    console.log('Creating admin user...')
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: 'admin@theusapublishers.com' },
    })

    if (!existingAdmin) {
      await prisma.adminUser.create({
        data: {
          email: 'admin@theusapublishers.com',
          password: 'admin123',
          name: 'Admin',
        },
      })
      console.log('Admin user created')
    } else {
      console.log('Admin user already exists')
    }

    // Create sample assets
    console.log('Creating assets...')
    const assetsCount = await prisma.asset.count()
    
    if (assetsCount === 0) {
      await prisma.asset.createMany({
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
      console.log('Assets created')
    }

    return NextResponse.json({
      success: true,
      message: 'Database setup completed successfully',
      credentials: {
        email: 'admin@theusapublishers.com',
        password: 'admin123'
      }
    })
  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json(
      { 
        error: 'Setup failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        instructions: 'If you see "does not exist" error, the Vercel environment needs to be configured properly.'
      },
      { status: 500 }
    )
  }
}

export async function POST() {
  return GET()
}
