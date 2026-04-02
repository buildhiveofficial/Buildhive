import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Construction Project Inquiry",
   html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:#111827; color:#ffffff; padding:20px; text-align:center;">
        <h1 style="margin:0; font-size:22px;">🏗 Build Hive</h1>
        <p style="margin:5px 0 0; font-size:14px;">Construction & Architecture</p>
      </div>

      <!-- Body -->
      <div style="padding:20px;">
        <h2 style="color:#111827; margin-bottom:15px;">New Project Inquiry</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px; font-weight:bold;">Name:</td>
            <td style="padding:10px;">${body.name}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:10px; font-weight:bold;">Email:</td>
            <td style="padding:10px;">${body.email}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:bold;">Phone:</td>
            <td style="padding:10px;">${body.phone}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:10px; font-weight:bold;">Project Type:</td>
            <td style="padding:10px;">${body.projectType}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:bold;">Location:</td>
            <td style="padding:10px;">${body.location}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top:20px;">
          <p style="font-weight:bold; margin-bottom:5px;">Message:</p>
          <div style="background:#f3f4f6; padding:15px; border-radius:6px; line-height:1.5;">
            ${body.message}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#6b7280;">
        <p style="margin:0;">This inquiry was sent from Build Hive website</p>
        <p style="margin:5px 0 0;">© ${new Date().getFullYear()} Build Hive. All rights reserved.</p>
      </div>

    </div>
  </div>
`,
  };

  await transporter.sendMail(mailOptions);

  return Response.json({ success: true });
}
