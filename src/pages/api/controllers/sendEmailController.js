// Modules
import { sendEmailModule } from '../modules';


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
    const { message } = await sendEmailModule( req );

    res.status( 200 ).json({
      ok: true,
      message
    });
  } catch ( error ) {
    //TODO: Implement errorHandler

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default sendEmailController;