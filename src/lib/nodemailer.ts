import nodemailer from 'nodemailer';

if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
  console.warn('Gmail credentials missing. Email functionality will not work.');
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmailViaGmail(
  data: EmailPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const info = await transporter.sendMail({
      from: `"G3NERALOLA Photography" <${process.env.GMAIL_EMAIL}>`,
      to: data.to,
      subject: data.subject,
      html: data.html,
      replyTo: data.replyTo,
    });

    console.log('Message sent:', info.messageId);
    return { success: true };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Nodemailer error:', errorMsg);
    return { success: false, error: errorMsg };
  }
}

// Verify connection
export async function verifyGmailConnection() {
  try {
    await transporter.verify();
    console.log('✓ Gmail SMTP connection verified');
    return true;
  } catch (error) {
    console.error('✗ Gmail SMTP verification failed:', error);
    return false;
  }
}
