// Database
// Models


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const sendEmailModule = async ( req ) => {
  // Desestructurate body data
  const {
    name,
    emailAddress,
    subject,
    message
  } = req.body;

  // TODO: Read local template and replace placeholders with real values
  // TODO: Set Up email options

  try {
    // TODO: Send email

    return {
      ok: true,
      message: 'Correo enviado con éxito'
    }
  } catch ( error ) {
    //TODO: Implement errorHandler
    
    //TODO: Return error case
    return {
      ok: false,
      message: 'Error al enviar el correo'
    }
  }
}

export default sendEmailModule;
