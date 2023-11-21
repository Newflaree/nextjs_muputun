// Services
import {
  prepareEmailOptionsService,
  sendEmailService, 
  setUpEmailTemplateService
} from '../services';
// Utils
import { consoleErrorsLogger } from '@/utils';

/**
 * `sendEmailModule`
 * 
 * Módulo para manejar la lógica de envío de correos electrónicos en la aplicación.
 * Procesa la solicitud de envío de correo electrónico, prepara el contenido del correo,
 * configura las opciones de envío y realiza el envío.
 * 
 * Utiliza servicios como `setUpEmailTemplateService`, `prepareEmailOptionsService` y
 * `sendEmailService` para estructurar el correo, configurar las opciones de envío y realizar
 * el envío, respectivamente.
 * 
 * Registra cualquier error durante el proceso y devuelve un objeto con el estado del envío,
 * incluyendo un código de estado, un booleano para indicar el éxito o fracaso y un mensaje.
 * 
 * @param {Object} req - Objeto de solicitud de Express que contiene los datos de la solicitud.
 * @returns {Object} - Un objeto que contiene el estado del envío del correo electrónico,
 *                     incluyendo código de estado, booleano de éxito y mensaje.
 */
const sendEmailModule = async ( req ) => {
  // Desestructurate body data
  const {
    emailAddress,
    subject
  } = req.body;

  // Read local template and replace placeholders with real values
  const { template } = await setUpEmailTemplateService( req );

  // Set Up email options
  const { mailOptions, transporter } = await prepareEmailOptionsService( subject, template, emailAddress );

  try {
    // Send email
    const { statusCode, ok, message } = await sendEmailService( transporter, mailOptions );

    return {
      statusCode,
      ok,
      message
    }
  } catch ( error ) {
    consoleErrorsLogger( 'sendEmailModule', error );
    
    return {
      statusCode: 400,
      ok: false,
      message: 'Error al enviar el correo'
    }
  }
}

export default sendEmailModule;
