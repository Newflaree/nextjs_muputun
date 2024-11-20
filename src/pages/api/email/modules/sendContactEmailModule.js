// Services
import {
  prepareEmailOptionsService,
  sendEmailService,
  setUpContactEmailService
} from '../services';
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

  const emailTemplateResult = await setUpContactEmailService( req );

  if ( !emailTemplateResult ) return {
    ok: false,
    statusCode: statusCodes.BAD_REQUEST,
    message: 'Error'
  }

  const { template } = emailTemplateResult;

  const emailOptionsResult = await prepareEmailOptionsService(
    subject,
    template,
    emailAddress
  );

  if ( !emailOptionsResult ) return {
    ok: false,
    statusCode: statusCodes.BAD_REQUEST,
    message: 'Error'
  }

  const { mailOptions, transporter } = emailOptionsResult;

  try {
    const sendEmailResult = await sendEmailService( mailOptions, transporter );

    if ( !sendEmailResult ) return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: 'Error'
    }

    return sendEmailResult;

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
