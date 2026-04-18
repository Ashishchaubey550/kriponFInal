import nodemailer from 'nodemailer'

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildNotificationHtml({ name, email, service, preferredDate, timeSlot, message, customRequirement, submittedAt, timezone, sourceUrl }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0a0a; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #8A38F5 0%, #340B73 100%); padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; color: #fff; font-weight: 600; }
    .header p { margin: 8px 0 0; color: rgba(255,255,255,0.7); font-size: 14px; }
    .body { padding: 32px 24px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #8A38F5; font-weight: 600; margin-bottom: 6px; }
    .field-value { font-size: 15px; color: #e0e0e0; line-height: 1.5; }
    .message-box { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 16px; margin-top: 6px; }
    .footer { padding: 20px 24px; border-top: 1px solid #222; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Lead from Kripon Digital</h1>
      <p>${escapeHtml(submittedAt)} (${escapeHtml(timezone)})</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Client Name</div>
        <div class="field-value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(email)}" style="color:#8A38F5;text-decoration:none;">${escapeHtml(email)}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Service Needed</div>
        <div class="field-value">${escapeHtml(service)}</div>
      </div>
      ${customRequirement ? `
      <div class="field">
        <div class="field-label">Custom Requirement</div>
        <div class="field-value">${escapeHtml(customRequirement)}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="field-label">Preferred Call</div>
        <div class="field-value">${escapeHtml(preferredDate)} | ${escapeHtml(timeSlot)}</div>
      </div>
      <div class="field">
        <div class="field-label">Project Brief</div>
        <div class="message-box">
          <div class="field-value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Source: ${escapeHtml(sourceUrl)}</p>
    </div>
  </div>
</body>
</html>`
}

function buildThankYouHtml(name) {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0a0a; color: #ffffff; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background: #111111; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #8A38F5 0%, #340B73 100%); padding: 40px 24px; text-align: center; }
    .header h1 { margin: 0; font-size: 26px; color: #fff; font-weight: 700; }
    .body { padding: 32px 24px; text-align: center; }
    .body p { font-size: 15px; color: #ccc; line-height: 1.7; margin: 0 0 16px; }
    .body .highlight { color: #8A38F5; font-weight: 600; }
    .cta { display: inline-block; background: linear-gradient(180deg, #8A38F5, #340B73); color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 999px; font-weight: 600; font-size: 15px; margin-top: 8px; }
    .divider { height: 1px; background: #222; margin: 24px 0; }
    .footer { padding: 20px 24px; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #666; }
    .footer a { color: #8A38F5; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You, ${escapeHtml(name)}! 🎉</h1>
    </div>
    <div class="body">
      <p>
        We've received your inquiry and we're excited to learn more about your project.
      </p>
      <p>
        Our team at <span class="highlight">Kripon Digital</span> will review your requirements and get back to you within <span class="highlight">24 hours</span>.
      </p>
      <p>
        In the meantime, feel free to check out our recent work:
      </p>
      <a href="https://www.kripon.in/projects" class="cta">View Our Projects →</a>
      <div class="divider"></div>
      <p style="font-size:13px; color:#888;">
        If you have any urgent questions, reply to this email or reach us at<br>
        <a href="mailto:digital@kripon.in" style="color:#8A38F5;">digital@kripon.in</a>
      </p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Kripon Digital · <a href="https://www.kripon.in">kripon.in</a></p>
    </div>
  </div>
</body>
</html>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error('Missing EMAIL_USER or EMAIL_PASS environment variables')
    return res.status(500).json({ success: false, message: 'Email service not configured.' })
  }

  const { name, email, service, preferredDate, timeSlot, message, customRequirement, submittedAt, timezone, sourceUrl } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, email, service, message.' })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: `"Kripon Digital" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: email,
      subject: `New Lead: ${service} — ${name}`,
      html: buildNotificationHtml({ name, email, service, preferredDate, timeSlot, message, customRequirement, submittedAt, timezone, sourceUrl })
    })

    await transporter.sendMail({
      from: `"Kripon Digital" <${EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out — Kripon Digital`,
      html: buildThankYouHtml(name)
    })

    return res.status(200).json({ success: true, message: 'Emails sent successfully.' })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      debug: {
        errorMessage: error.message,
        code: error.code,
        response: error.response,
        command: error.command
      }
    })
  }
}
