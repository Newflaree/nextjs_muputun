// Nodemailer
import nodemailer from 'nodemailer';
// Utils
import { consoleErrorsLogger } from '@/utils';

/**
 * `prepateEmailOptionsService`
 * 
 * Servicio para preparar las opciones de envío de correo electrónico utilizando Nodemailer.
 * Configura el transportador de correo y las opciones de correo necesarias para el envío.
 * 
 * Establece la conexión con el servidor de correo electrónico a través de las configuraciones
 * definidas en las variables de entorno, como host, puerto y credenciales de autenticación.
 * 
 * Define las opciones del correo, incluyendo el remitente, destinatario, asunto y contenido
 * del correo (en formato HTML). Estas opciones se pasan luego al transportador de correo
 * para realizar el envío.
 * 
 * En caso de error en la configuración, registra el error utilizando `consoleErrorsLogger`.
 * 
 * @param {string} subject - Asunto del correo electrónico.
 * @param {string} template - Contenido del correo electrónico en formato HTML.
 * @param {string} emailAddress - Dirección de correo electrónico del remitente.
 * 
 * @returns {Object} Un objeto que contiene las opciones del correo y el transportador de Nodemailer.
 */
const prepateEmailOptionsService = async (
  subject = '',
  template = '',
  emailAddress = ''
) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailOptions = {
      from: emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Asunto: ${ subject }`,
      html: template
    }

    return {
      mailOptions,
      transporter
    }
  } catch ( error ) {
    consoleErrorsLogger( 'prepateEmailOptionsService', error );
  }
}

export default prepateEmailOptionsService;
