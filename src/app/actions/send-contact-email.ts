'use server';

import { sendEmailViaGmail } from '@/lib/nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  shootDate?: string;
  location?: string;
  budget?: string;
  look?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error('Please fill in your name, email, and message.');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Please provide a valid email address.');
    }

    // Create HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #222; }
            .container { max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; }
            .header { background-color: #0d0d0d; color: #fff; padding: 24px; text-align: center; border-radius: 8px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
            .header p { margin: 6px 0 0 0; color: #aaa; font-size: 13px; }
            .content { padding: 20px 0; }
            .field { margin-bottom: 16px; }
            .label { font-weight: 600; font-size: 12px; text-transform: uppercase; color: #666; margin-bottom: 4px; }
            .value { padding: 12px; background-color: #f7f7f7; border-left: 3px solid #000; border-radius: 4px; font-size: 14px; }
            .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #eaeaea; text-align: center; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📸 New Photography Booking Inquiry</h1>
              <p>G3NERALOLA Visual Storytelling</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address:</div>
                <div class="value">${data.email}</div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">WhatsApp / Phone:</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              ${data.service ? `
              <div class="field">
                <div class="label">Service Package:</div>
                <div class="value">${data.service}</div>
              </div>
              ` : ''}
              ${data.shootDate ? `
              <div class="field">
                <div class="label">Target Date:</div>
                <div class="value">${data.shootDate}</div>
              </div>
              ` : ''}
              ${data.location ? `
              <div class="field">
                <div class="label">Preferred Location:</div>
                <div class="value">${data.location}</div>
              </div>
              ` : ''}
              ${data.budget ? `
              <div class="field">
                <div class="label">Budget Estimate:</div>
                <div class="value">${data.budget}</div>
              </div>
              ` : ''}
              ${data.look ? `
              <div class="field">
                <div class="label">Referenced Look:</div>
                <div class="value">${data.look}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Vision & Project Details:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from G3NERALOLA Visual Storytelling portfolio booking portal.</p>
              <p>Reply directly to this email to converse with ${data.name}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const result = await sendEmailViaGmail({
      to: 'adeolaomogbolahan48@gmail.com',
      subject: `📸 New Booking: ${data.name} - ${data.service || 'Session Inquiry'}`,
      html: htmlContent,
      replyTo: data.email,
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to dispatch email. Please reach out via WhatsApp.');
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Server action error:', message);
    throw new Error(message);
  }
}
