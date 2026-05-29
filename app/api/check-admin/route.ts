import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if admin exists
    const admin = await prisma.adminUser.findUnique({
      where: { email: 'admin@theusapublishers.com' },
    })

    if (admin) {
      return NextResponse.json({
        adminExists: true,
        email: admin.email,
        name: admin.name,
        message: 'Admin user found! Use credentials: admin@theusapublishers.com / admin123'
      })
    } else {
      return NextResponse.json({
        adminExists: false,
        message: 'Admin user not found. Please visit /api/seed first to create admin and seed database'
      })
    }
  } catch (error) {
    console.error('Check admin error:', error)
    return NextResponse.json({
      error: 'Failed to check admin',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
