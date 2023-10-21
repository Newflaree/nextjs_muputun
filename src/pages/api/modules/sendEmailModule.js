// Services
import {
  prepareEmailOptionsService,
  sendEmailService, 
  setUpEmailTemplateService
} from '../services';


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
  } = req.body;

  // TODO: Read local template and replace placeholders with real values
  const { template } = setUpEmailTemplateService( req );

  // TODO: Set Up email options
  const { mailOptions, transporter } = prepareEmailOptionsService( template, emailAddress );

  try {
    // TODO: Send email
    const { statusCode, ok, message } = await sendEmailService( transporter, mailOptions );

    return {
      statusCode,
      ok,
      message
    }
  } catch ( error ) {
    //TODO: Implement errorHandler
    
    return {
      statusCode: 400,
      ok: false,
      message: 'Error al enviar el correo'
    }
  }
}

export fault sendEmailModule;
