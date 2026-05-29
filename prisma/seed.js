const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if admin user exists
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: 'admin@theusapublishers.com' },
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Create admin user
    const admin = await prisma.adminUser.create({
      data: {
        email: 'admin@theusapublishers.com',
        password: 'admin123', // IMPORTANT: Change this in production and use bcrypt
        name: 'Admin',
      },
    })

    console.log('Admin user created:', admin)

    // Create sample assets
    const assets = await prisma.asset.createMany({
      data: [
        {
          name: 'Amazon KDP',
          platform: 'Amazon KDP',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
          description: 'Kindle Direct Publishing',
          featured: true,
          order: 1,
        },
        {
          name: 'Barnes & Noble',
          platform: 'Barnes & Noble',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barnes_%26_Noble_logo.svg/1200px-Barnes_%26_Noble_logo.svg.png',
          description: 'Barnes & Noble Press',
          featured: true,
          order: 2,
        },
        {
          name: 'Kobo',
          platform: 'Kobo',
          imageUrl: 'https://banner2.cleanpng.com/20180609/kti/kisspng-kobo-touch-sony-reader-kobo-glo-amazon-com-kobo-er-r-lyeh-5b1bbe153e2935.9196658315285447892546.jpg',
          description: 'Kobo Writing Life',
          featured: true,
          order: 3,
        },
        {
          name: 'Apple Books',
          platform: 'Apple Books',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
          description: 'Apple Books',
          featured: true,
          order: 4,
        },
        {
          name: 'IngramSpark',
          platform: 'IngramSpark',
          imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ingramspark-logo-design-template-5ca28bbd0a9384d8bacd62cf5bf59a3e_screen.jpg',
          description: 'Independent Publishing',
          featured: true,
          order: 5,
        },
      ],
      skipDuplicates: true,
    })

    console.log(`Created ${assets.count} sample assets`)
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
