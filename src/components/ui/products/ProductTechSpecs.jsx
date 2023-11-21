// Material UI
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
// Material Icons
import { FiberManualRecord } from '@mui/icons-material';

/**
 * `ProductTechSpecs` Component
 * 
 * Componente diseñado para mostrar las especificaciones técnicas de un producto,
 * proporcionando detalles sobre sus características y capacidades.
 * 
 * Utiliza Paper de Material-UI para crear un contenedor con sombra y estilos personalizados,
 * dándole un aspecto distintivo y enfocado en la información técnica. Typography presenta
 * el título de la sección, y List con ListItem y ListItemText organiza las especificaciones
 * en un formato claro y legible.
 * 
 * Cada especificación técnica se presenta con un título (primary) y una lista de detalles
 * secundarios (secondary), cada uno precedido por el ícono FiberManualRecord para una
 * representación visual coherente.
 * 
 * Este componente es crucial para informar a los usuarios sobre los aspectos técnicos del
 * producto, ayudando en la decisión de compra y proporcionando una comprensión detallada
 * de lo que ofrece el producto.
 * 
 * @param {Array} techSpecs - Arreglo de objetos con las especificaciones técnicas del producto.
 * 
 * @example
 * <ProductTechSpecs 
 *   techSpecs={[{ primary: "Dimensiones", secondary: [{ spec: "10x20x15 cm" }] }]}
 * />
 * 
 * @returns {React.Component} Un componente para mostrar las especificaciones técnicas de un producto.
 */
export const ProductTechSpecs = ({ techSpecs }) => {
  return (
    <Paper
      elevation={ 4 }
      sx={{
        backgroundColor: '#5C5D5F',
        color: 'white',
        p: '16px',
        mt: '16px',
        pb: '20px'
      }}
    >
      <Typography
        variant='h2'
        component='h2'
        textAlign='center'
        my={ 4 }
      >
        Especificaciones Técnicas
      </Typography>
      <List>
        {
          techSpecs.map( ({ primary, secondary }) => (
            <ListItem key={ primary }>
              <ListItemText
                primary={ primary }
                secondary={
                  (
                    <List>
                      { 
                        secondary.map( ({ spec }) => (
                          <ListItem key={ spec } sx={{ color: 'white' }}>
                            <FiberManualRecord sx={{ mr: 2 }}/>
                            { spec }
                          </ListItem>
                        ))
                      }
                    </List>
                  )
                }
              />
            </ListItem>
          ))
        }
      </List>
    </Paper>
  );
}
