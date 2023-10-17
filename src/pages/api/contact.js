import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';


export default async function handler( req, res ) {
  if ( req.method === 'POST' ) {
    const { name, emailAddress, subject, message } = req.body;
    console.log( req.body );

    // Leer el template de email
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );
    let template = fs.readFileSync( templatePath, 'utf8' );
    console.log( template );
    

    // Reemplazar placeholders con los valores reales
    template = template.replace( '{{name}}', name )
                       .replace( '{{emailAddress}}', emailAddress )
                       .replace( '{{subject}}', subject )
                       .replace( '{{message}}', message );

    console.log( template );

    // Configura el transporte de nodemailer
    let transporter = nodemailer.createTransport({
      host: 'tu-host-de-cpanel',
      port: 465,
      secure: true,
      auth: {
        user: 'info@muputun.cl',
        pass: 'tu-contraseña',
      },
    });

    // Opciones del correo
    let mailOptions = {
      from: emailAddress,
      to: 'info@muputun.cl',
      subject: `Contacto: ${ subject }`,
      html: template,  // Usar el template como HTML
    };

    // Envía el correo
    try {
      /*
      await transporter.sendMail( mailOptions );
      res.status( 200 ).json({ status: 'Mensaje enviado' });
        * */
      console.log( 'Mail enviado', mailOptions );
    } catch ( error ) {
      console.error('Hubo un error al enviar el correo:', error);
      res.status(500).json({ status: 'Error al enviar el mensaje' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
