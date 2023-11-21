// Node.js
import fs from 'fs';
import path from 'path';
// Utils
import { consoleErrorsLogger } from '@/utils';

/**
 * `setUpEmailTemplateService`
 * 
 * Servicio para preparar un plantilla de correo electrónico basada en un archivo HTML.
 * Lee y modifica dinámicamente una plantilla de correo electrónico, reemplazando placeholders
 * con datos reales proporcionados en la solicitud.
 * 
 * Utiliza el módulo `fs` de Node.js para leer el archivo de la plantilla de correo electrónico
 * desde el sistema de archivos y el módulo `path` para manejar las rutas de archivos de manera
 * segura y compatible con diferentes sistemas operativos.
 * 
 * Este servicio es crucial para personalizar correos electrónicos que se enviarán a los usuarios,
 * permitiendo la inserción de datos específicos del usuario como nombre, apellido, dirección de
 * correo electrónico, asunto y mensaje en la plantilla de correo.
 * 
 * En caso de error al leer o procesar la plantilla, registra el error utilizando `consoleErrorsLogger`.
 * 
 * @param {Object} req - Objeto de solicitud de Express que contiene los datos del cuerpo de la solicitud.
 * 
 * @returns {Object} Un objeto que contiene la plantilla de correo electrónico personalizada.
 */
const setUpEmailTemplateService = async ( req ) => {
  const {
    name,
    lastName,
    emailAddress,
    subject,
    message
  } = req.body;

  try {
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );

    let template = fs.readFileSync( templatePath, 'utf8' );
    template = template.replace( '{{name}}', name )
      .replace( '{{lastName}}', lastName )
      .replace( '{{emailAddress}}', emailAddress )
      .replace( '{{subject}}', subject )
      .replace( '{{message}}', message )

    return {
      template
    }

  } catch ( error ) {
    consoleErrorsLogger( 'setUpEmailTemplateService', error );
  }
}

export default setUpEmailTemplateService;
