// Utils
import {
  logger,
  statusCodes
} from '@/utils';


const sendContactEmailModule = async ( req ) => {
  const {
    emailAddress,
    subject
  } = req.body;

  // TODO: Set up email
  // TODO: Prepare email options

  try {
    // TODO: Send email

    return {
      message: 'sendContactEmailModule'
    }
  } catch ( error ) {
    logger.consoleErrorHandler( error, 'sendContactEmailModule' );

    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: error
    }
  }
}

export default sendContactEmailModule;
