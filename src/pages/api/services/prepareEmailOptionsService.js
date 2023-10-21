// Database
// Models
import nodemailer from 'nodemailer';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const prepateEmailOptionsService = async ( template = '', emailAddress ) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let mailOptions = {
      from: emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Contacto: ${ subject }`,
      html: template
    }

    return {
      mailOptions,
      transporter
    }
  } catch ( error ) {
    // TODO: Implement consoleErrorsHandler()
  }
}

export default prepateEmailOptionsService;
