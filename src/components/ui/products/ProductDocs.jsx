// React
import React from 'react';
// Material UI
import {
  Box,
  Button,
  Typography
} from '@mui/material';
// Material Icons
import { PictureAsPdf } from '@mui/icons-material';

/**
 * `ProductDocs` Component
 * 
 * Componente diseñado para mostrar y gestionar la descarga de documentos relacionados con un producto,
 * como manuales, fichas técnicas o documentación oficial.
 * 
 * Utiliza Box y Typography de Material-UI para la estructura y presentación del contenido,
 * y Button para proporcionar una acción de descarga. El icono PictureAsPdf de Material Icons
 * se utiliza para representar visualmente la naturaleza del documento (formato PDF).
 * 
 * Este componente recibe un arreglo de documentos (`doc`) donde cada documento tiene un nombre
 * y una ruta de archivo. Al hacer clic en el botón, se invoca la función `handleDownload` para
 * gestionar la descarga del documento.
 * 
 * Es ideal para proporcionar a los usuarios acceso fácil a documentación importante del producto,
 * mejorando la experiencia informativa y la satisfacción del cliente.
 * 
 * @param {Array} doc - Arreglo de objetos que representan los documentos disponibles.
 * @param {Function} handleDownload - Función para manejar la descarga del documento.
 * 
 * @example
 * <ProductDocs 
 *   doc={[{ name: "Manual del Producto", path: "ruta-del-documento.pdf" }]} 
 *   handleDownload={downloadFunction} 
 * />
 * 
 * @returns {React.Component} Un componente para mostrar y descargar documentos del producto.
 */export const ProductDocs = ({
  doc,
  handleDownload
}) => {
  return (
    <Box>
      <Typography
        variant='h4'
        px={ 2 }
        pb={ 4 }
      >
        Documentación Oficial
      </Typography>

      <Box>
        {
          doc.map( ({ name, path }) => (
            <React.Fragment
              key={ name }
            >
              <Typography
                variant='h5'
                px={2}
              >
                { name }
              </Typography>

              <Box my={ 3 } />

              <Button
                onClick={ () => handleDownload( path ) }
                variant='contained'
                size='large'
                target='_blank'
                sx={{
                  color: 'white',
                  mb: 5,
                  ':hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
                rel='noopener noreferrer'
                startIcon={ <PictureAsPdf /> }
              >
                Descargar PDF
              </Button>
            </React.Fragment>
          ))
        }
      </Box>
    </Box>
  );
}
