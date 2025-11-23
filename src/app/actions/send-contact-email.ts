'use server';

import { sendEmailViaGmail } from '@/lib/nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error('Missing required fields');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email address');
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000; color: #fff; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-top: 20px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { padding: 10px; background-color: #fff; border-left: 3px solid #000; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📸 New Contact Form Submission</h1>
              <p>G3NERALOLA Photography</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              ${data.service ? `
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${data.service}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your photography portfolio contact form</p>
              <p>Reply directly to this email to respond to ${data.name}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const result = await sendEmailViaGmail({
      to: 'adeolaomogbolahan48@gmail.com',
      subject: `📸 New Contact Form: ${data.name} - ${data.service || 'General Inquiry'}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Server action error:', message);
    throw new Error(message);
  }
}
