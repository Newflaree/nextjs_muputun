// Material UI
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

/**
 * `HomeCard` Component
 * 
 * Componente que representa una tarjeta informativa en la página principal.
 * Ideal para mostrar servicios, características o cualquier otro contenido en formato de tarjeta.
 * 
 * Utiliza Card, CardContent, CardMedia y Typography de Material-UI para crear una tarjeta
 * estilizada con imagen, título y descripción. La imagen se muestra en la parte superior,
 * seguida del título y la descripción en el contenido de la tarjeta.
 * 
 * Las propiedades de la tarjeta como el título, la descripción y la imagen son personalizables
 * a través de props, permitiendo su reutilización para diferentes contenidos.
 * 
 * @param {string} cardTitle - Título de la tarjeta.
 * @param {string} cardDesc - Descripción de la tarjeta.
 * @param {string} cardImg - URL de la imagen para la tarjeta.
 * 
 * @example
 * <HomeCard 
 *   cardTitle="Título de la tarjeta" 
 *   cardDesc="Descripción breve de la tarjeta." 
 *   cardImg="url-de-la-imagen.jpg" 
 * />
 * 
 * @returns {React.Component} Una tarjeta estilizada para presentar información variada.
 */
export const HomeCard = ({
  cardTitle,
  cardDesc,
  cardImg
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Imágen servicio"
        height="140"
        image={ cardImg }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { cardTitle }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { cardDesc }
        </Typography>
      </CardContent>
    </Card>
  );
}
