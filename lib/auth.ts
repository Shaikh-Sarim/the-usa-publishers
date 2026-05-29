'use server'

import { cookies } from 'next/headers'
import { prisma } from './prisma'

const ADMIN_TOKEN = 'admin_auth_token'
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

export async function loginAdmin(email: string, password: string) {
  try {
    console.log('Login attempt for email:', email)
    
    const admin = await prisma.adminUser.findUnique({
      where: { email },
    })

    console.log('Admin found:', !!admin)
    
    if (!admin) {
      console.log('Admin user not found in database')
      return { error: 'Invalid credentials' }
    }

    if (admin.password !== password) {
      console.log('Password mismatch. Stored:', admin.password, 'Provided:', password)
      return { error: 'Invalid credentials' }
    }

    // Create a simple auth token (in production, use JWT)
    const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')
    const cookieStore = await cookies()
    
    cookieStore.set(ADMIN_TOKEN, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: TOKEN_EXPIRY / 1000,
    })

    console.log('Login successful for:', email)
    return { success: true, admin: { id: admin.id, email: admin.email, name: admin.name } }
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'Login failed: ' + (error instanceof Error ? error.message : 'Unknown error') }
  }
}

export async function logoutAdmin() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete(ADMIN_TOKEN)
    return { success: true }
  } catch (error) {
    console.error('Logout error:', error)
    return { error: 'Logout failed' }
  }
}

export async function getAdminUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get(ADMIN_TOKEN)

    if (!token) {
      return null
    }

    // In production, verify JWT token properly
    return { authenticated: true }
  } catch (error) {
    return null
  }
}

export async function isAdminAuthenticated() {
  const admin = await getAdminUser()
  return !!admin
}
