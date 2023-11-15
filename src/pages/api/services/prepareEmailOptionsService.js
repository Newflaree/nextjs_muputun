// Nodemailer
import nodemailer from 'nodemailer';
// Utils
import { consoleErrorsLogger } from '@/utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
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
