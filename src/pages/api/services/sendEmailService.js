// Utils
import { consoleErrorsLogger } from '@/utils';

/**
 * `sendEmailService`
 * 
 * Servicio para enviar correos electrónicos utilizando Nodemailer. Recibe un transportador
 * de correo y opciones de correo configuradas para realizar el envío.
 * 
 * Este servicio intenta enviar el correo electrónico a través del transportador y las opciones
 * proporcionadas. En caso de éxito, retorna un objeto con un mensaje de éxito y un código de estado HTTP 200.
 * 
 * Si ocurre un error durante el envío del correo electrónico, el error se registra utilizando
 * `consoleErrorsLogger` y se retorna un objeto con un mensaje de error y un código de estado HTTP 400.
 * 
 * Este servicio es fundamental para la funcionalidad de envío de correos electrónicos en la aplicación,
 * manejando tanto el éxito como los posibles errores de manera eficiente y efectiva.
 * 
 * @param {Object} transporter - Transportador de correo de Nodemailer configurado.
 * @param {Object} mailOptions - Opciones de correo electrónico configuradas.
 * 
 * @returns {Object} Un objeto que contiene el estado del envío del correo electrónico,
 *                   incluyendo código de estado, booleano de éxito y mensaje.
 */
const sendEmailService = async ( transporter, mailOptions ) => {
  try {
    await transporter.sendMail( mailOptions );

    return {
      statusCode: 200,
      ok: true,
      message: 'Mensaje enviado con éxito'
    }
  } catch ( error ) {
    consoleErrorsLogger( 'sendEmailService', error );

    return {
      statusCode: 400,
      ok: false,
      message: 'Error al enviar el mensaje'
    }
  }
}

export default sendEmailService;
