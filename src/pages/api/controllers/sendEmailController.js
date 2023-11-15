// Modules
import { sendEmailModule } from '../modules';
// Utils
import { consoleErrorsLogger } from '@/utils';


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
const sendEmailController = async ( req, res ) => {
  try {
    const { statusCode, ok, message } = await sendEmailModule( req );

    res.status( statusCode ).json({
      ok,
      message
    });
  } catch ( error ) {
    consoleErrorsLogger( 'sendEmailController', error );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default sendEmailController;
