import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendConfirmationEmail(
  userEmail: string,
  userName: string,
  service: string
) {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: userEmail,
    subject: 'We Received Your Request - The USA Publishing',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0A192F; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .footer { background-color: #0A192F; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 5px 5px; }
            .button { display: inline-block; background-color: #D32F2F; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
            .highlight { color: #D32F2F; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${userName}!</h1>
            </div>
            <div class="content">
              <p>We've received your request for <span class="highlight">${service}</span>.</p>
              <p>Our team at The USA Publishing will review your information and contact you within <strong>24-48 hours</strong> to discuss your project in detail.</p>
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>Our specialist will call or email you</li>
                <li>We'll discuss your publishing goals</li>
                <li>You'll receive a customized proposal</li>
              </ul>
              <p>If you have any urgent questions, feel free to contact us directly:</p>
              <p>
                📞 <strong>Phone:</strong> ${process.env.NEXT_PUBLIC_PHONE}<br>
                📧 <strong>Email:</strong> ${process.env.NEXT_PUBLIC_EMAIL}
              </p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} The USA Publishing. All rights reserved.</p>
              <p>${process.env.NEXT_PUBLIC_APP_NAME}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Confirmation email sent to:', userEmail)
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    throw error
  }
}

export async function sendAdminNotification(
  leadData: {
    name: string
    email: string
    phone: string
    service: string
    message?: string
  }
) {
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New Lead: ${leadData.name} - ${leadData.service}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0A192F; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .footer { background-color: #0A192F; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 5px 5px; }
            .info-row { margin: 10px 0; padding: 10px; background-color: white; border-left: 4px solid #D32F2F; }
            .label { font-weight: bold; color: #0A192F; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Lead Received!</h1>
            </div>
            <div class="content">
              <p>A new potential client has submitted a form on your website.</p>
              
              <div class="info-row">
                <div class="label">Name:</div>
                <div>${leadData.name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Email:</div>
                <div><a href="mailto:${leadData.email}">${leadData.email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">Phone:</div>
                <div><a href="tel:${leadData.phone}">${leadData.phone}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">Service Interested In:</div>
                <div>${leadData.service}</div>
              </div>
              
              ${leadData.message ? `
              <div class="info-row">
                <div class="label">Message:</div>
                <div>${leadData.message}</div>
              </div>
              ` : ''}
              
              <p style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #D32F2F;">
                <strong>Next Step:</strong> Contact this client as soon as possible to discuss their publishing needs.
              </p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} The USA Publishing. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Admin notification sent to:', process.env.ADMIN_EMAIL)
  } catch (error) {
    console.error('Error sending admin notification:', error)
    throw error
  }
}
