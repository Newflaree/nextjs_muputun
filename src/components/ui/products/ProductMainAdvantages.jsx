// Material UI
import {
  Box,
  List,
  ListItem,
  Typography
} from '@mui/material';
// Material Icons
import { FiberManualRecord } from '@mui/icons-material';

/**
 * `ProductMainAdvantages` Component
 * 
 * Componente que muestra una lista de las principales ventajas o características destacadas
 * de un producto. Ideal para resaltar los aspectos más importantes que diferencian al producto
 * en el mercado.
 * 
 * Utiliza Box y Typography de Material-UI para presentar un encabezado y List y ListItem
 * para estructurar la lista de ventajas. Cada ventaja en la lista se introduce con el ícono
 * FiberManualRecord de Material Icons, proporcionando un estilo visual claro y atractivo.
 * 
 * El componente recibe un arreglo de ventajas (`mainAdv`), donde cada elemento representa
 * una ventaja clave del producto. Estas ventajas se enumeran de manera sencilla y directa,
 * facilitando la comprensión rápida por parte del usuario.
 * 
 * Es esencial para comunicar de manera efectiva los beneficios del producto y para ayudar
 * en la decisión de compra del cliente.
 * 
 * @param {Array} mainAdv - Arreglo de objetos que representan las principales ventajas del producto.
 * 
 * @example
 * <ProductMainAdvantages 
 *   mainAdv={[{ advItem: "Alta durabilidad" }, { advItem: "Fácil de usar" }]} 
 * />
 * 
 * @returns {React.Component} Un componente para mostrar las ventajas principales de un producto.
 */export const ProductMainAdvantages = ({ mainAdv }) => {
  return (
    <Box my={ 10 }>
      <Typography
        variant='h5'
        textAlign='center'
        paragraph
      >
        Principales Ventajas
      </Typography>

      <List>
        {
          mainAdv.map( ({ advItem }) =>(
            <ListItem key={ advItem }>
              <FiberManualRecord sx={{ mr: 2 }}/>
              { advItem }
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
}
