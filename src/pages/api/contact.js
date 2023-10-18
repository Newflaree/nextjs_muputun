import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';


// TODO: Will Refactor this shit!
export default async function handler( req, res ) {
  if ( req.method === 'POST' ) {
    const { name, emailAddress, subject, message } = req.body;

    // Leer el template de email
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );
    let template = fs.readFileSync( templatePath, 'utf8' );
    

    // Reemplazar placeholders con los valores reales
    template = template.replace( '{{name}}', name )
                       .replace( '{{emailAddress}}', emailAddress )
                       .replace( '{{subject}}', subject )
                       .replace( '{{message}}', message );

    // Configura el transporte de nodemailer
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Opciones del correo
    let mailOptions = {
      from: emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Contacto: ${ subject }`,
      html: template
    };

    // Envía el correo
    try {
      console.log( 'BEFORE EMAIL' );
      await transporter.sendMail( mailOptions );
      console.log( 'AFTER EMAIL' );

      res.status( 200 ).json({
        status: 'Mensaje enviado'
      });
    } catch ( error ) {
      console.error('Hubo un error al enviar el correo:', error);
      console.log( `[SEND-EMAIL]: ${ error }` );

      res.status(500).json({
        ok: false,
        message: 'Error al enviar el mensaje'
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
