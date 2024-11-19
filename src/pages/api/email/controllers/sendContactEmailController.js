// Modules
import { sendContactEmailModule } from '../modules';
// Utils
import {
  logger,
  messages,
  statusCodes
} from '@/utils';


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const sendContactEmailController = async ( req, res ) => {
  try {
    const { message } = await sendContactEmailModule( req );

    res.status( statusCodes.SUCCESS ).json({
      ok: true,
      message
    });
  
  } catch ( error ) {
    logger.consoleErrorHandler( error, 'sendContactEmailController' );

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default sendContactEmailController;
