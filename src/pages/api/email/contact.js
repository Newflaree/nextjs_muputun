// Controllers
import { sendContactEmailController } from './controllers';
// Utils
import {
  messages,
  statusCodes
} from '@/utils';


export default function handler( req, res ) {
  switch ( req.method ) {
    case 'POST':
      return sendContactEmailController( req, res );
  
    default:
      return res.status( statusCodes.BAD_REQUEST ).json({
        ok: false,
        message: messages.INVALID_ENDPOINT
      });
  }
}
