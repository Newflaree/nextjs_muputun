// Utils
import {
  messages,
  logger,
  statusCodes
} from '@/utils';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const sendEmailService = async (
  mailOptions,
  transporter
) => {
  try {
    await transporter.sendMail( mailOptions );

    return {
      statusCode: statusCodes.SUCCESS,
      ok: true,
      message: messages.SEND_EMAIL
    }
  } catch ( error ) {
    logger.consoleErrorHandler( error, 'sendEmailService' );

    return {
      statusCode: statusCodes.BAD_REQUEST,
      ok: false,
      message: messages.SEND_ERROR
    }
  }
}

export default sendEmailService;
