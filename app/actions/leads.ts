'use server'

import { prisma } from '@/lib/prisma'
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/email'

export async function submitLead(data: {
  name: string
  email: string
  phone: string
  service: string
  message?: string
}) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message || '',
        status: 'new',
      },
    })
    
    // Send emails (non-blocking - don't await to avoid long response times)
    Promise.all([
      sendConfirmationEmail(data.email, data.name, data.service).catch(err => 
        console.error('Failed to send confirmation email:', err)
      ),
      sendAdminNotification(data).catch(err => 
        console.error('Failed to send admin notification:', err)
      ),
    ])
    
    return { success: true, leadId: lead.id }
  } catch (error) {
    console.error('Error creating lead:', error)
    throw new Error('Failed to submit form')
  }
}
