// Database
// Models


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
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

    return {
      statusCode: 400,
      ok: false,
      message: 'Error al enviar el mensaje'
    }
  }
}

export default sendEmailService;
