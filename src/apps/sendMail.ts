import nodemailer from "nodemailer";

async function sendEmail(sendTo: string) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Test</title>
    </head>
    <body>
      Hello im tracking you
      <img src="http://localhost:3000/track" style="border: 0" alt="" />
    </body>
  </html>
  `;

  const transporter = nodemailer.createTransport({
    host: "mail.sahilpabale.me",
    port: 465,
    secure: true,
    auth: {
      user: "mail@sahilpabale.me",
      pass: "mail@sahil",
    },
  });

  const mailOptions = {
    from: `"Support | MailKeo" <mail@sahilpabale.me>`,
    to: sendTo,
    subject: "Verify your account.",
    html: html,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Mail Sent!");
}

export default sendEmail;
