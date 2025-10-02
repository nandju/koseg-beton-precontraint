import nodemailer from "nodemailer";

export async function POST(req:any) {
  try {
    const { lastName, firstName, email, subject, description } = await req.json();
    
    // Configurer ton transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // ex: Gmail
      port: 465,
      secure: true,
      auth: {
        user: "Ajoute ici", // défini dans .env.local
        pass: "Ajoute ici "
      },
    });

    // Template HTML
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Prise de Contact</title>
    </head>
    <body style="margin:0; padding:0; background-color:#F4F0E8; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F0E8; padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#0C2E7A; border-radius:10px; overflow:hidden;">
              
              <!-- Header avec logo -->
              <tr>
                <td style="padding:20px;" align="left">
                  <img src="https://via.placeholder.com/120x40.png?text=LOGO" alt="Logo" style="display:block; max-width:120px; height:auto;">
                </td>
              </tr>

              <!-- Titre -->
              <tr>
                <td align="center" style="padding:10px 20px; font-size:24px; font-weight:bold; color:#FFFFFF;">
                  📩 Formulaire de Contact
                </td>
              </tr>

              <!-- Contenu -->
              <tr>
                <td style="padding:30px; color:#FFFFFF; font-size:16px; line-height:1.6;">
                  <p><strong>Nom :</strong> ${lastName}</p>
                  <p><strong>Prénom :</strong> ${firstName}</p>
                  <p><strong>Email :</strong> ${email}</p>
                  <p><strong>Objet :</strong> ${subject}</p>
                  <p><strong>Message :</strong></p>
                  <p style="background:#ffffff22; padding:15px; border-radius:8px; color:#FFFFFF;">
                    ${description}
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding:15px; font-size:12px; color:#FFFFFF; background-color:#09225C;">
                  Cet email a été généré automatiquement depuis le site web.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Envoi du mail
    await transporter.sendMail({
      from: `"Formulaire De Contact" <${process.env.SMTP_USER}>`,
      to: "infos@koseg.com", // ton mail de réception
      subject:  `${subject || "Nouveau message du formulaire de contact"}`,
      html: htmlTemplate,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error:any) {
    console.error("Erreur envoi mail:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
