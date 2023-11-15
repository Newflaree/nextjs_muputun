// Services
import {
  prepareEmailOptionsService,
  sendEmailService, 
  setUpEmailTemplateService
} from '../services';
// Utils
import { consoleErrorsLogger } from '@/utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
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
