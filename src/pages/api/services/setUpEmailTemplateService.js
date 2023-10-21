// Database
// Models
import fs from 'fs';
import path from 'path';


/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const setUpEmailTemplateService = async ( req ) => {
  const { name, emailAddress, subject, message } = req.body;



  try {
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );

    let template = fs.readFileSync( templatePath, 'utf8' );
    template = template.replace( '{{name}}', name )
      .replace( '{{emailTemplate}}', emailAddress )
      .replace( '{{subject}}', subject )
      .replace( '{{message}}', message )

    return {
      template
    }

  } catch ( error ) {
    // TODO: Implement consoleErrorsHandler()
  }
}

export default setUpEmailTemplateService;
