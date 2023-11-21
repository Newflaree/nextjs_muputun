// Modules
import { sendEmailModule } from '../modules';
// Utils
import { consoleErrorsLogger } from '@/utils';

/**
 * `sendEmailController`
 * 
 * Controlador para manejar solicitudes de envío de correo electrónico.
 * Este controlador se encarga de procesar las solicitudes de contacto o envío de correos
 * electrónicos desde la aplicación. No requiere autenticación ni privilegios de administrador.
 * 
 * PATH: /api/... (completar con la ruta específica)
 * AUTH-REQUIRED: false (No requiere autenticación)
 * ADMIN-REQUIRED: false (No requiere ser administrador)
 * 
 * Utiliza `sendEmailModule` para el manejo lógico del envío de correos electrónicos, como
 * la preparación del correo, conexión con el servidor de correo y manejo de errores.
 * 
 * En caso de éxito, retorna una respuesta HTTP con el estado y un mensaje. Si ocurre un
 * error durante el proceso, registra el error en la consola y envía una respuesta de error genérico.
 * 
 * @param {Object} req - Objeto de solicitud HTTP. Contiene la información enviada en la solicitud.
 * @param {Object} res - Objeto de respuesta HTTP. Se utiliza para enviar la respuesta al cliente.
 * 
 * @returns {void} No retorna ningún valor. En su lugar, envía una respuesta HTTP.
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
