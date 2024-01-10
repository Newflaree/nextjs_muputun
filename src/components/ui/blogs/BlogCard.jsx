// Next.js
import NextLink from 'next/link';
// Material UI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";


export const BlogCard = ({ title = '' }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ width: '100%'}}
    >
      <Card sx={{ maxWidth: 500}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://res.cloudinary.com/newflare/image/upload/v1704678787/demos/muputun/blogs/lsvcnmzioqmkuzemcgud.jpg"
          title={ title }
        />
        <CardContent sx={{ bgcolor: 'transparent' }}>
          <Typography gutterBottom variant="h5" component="div" color='primary' pb={1}>
            ¿Cuantos canales necesita un receptor GNSS? Los 184 canales del X5R son más que suficientes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ¿Cómo influye el número de canales en un receptor GNSS? ¿Obtengo la misma precisión al medir la posición con un receptor GNSS multibanda de 80 ó 600 canales? ¿Tener más canales es necesario para obtener mejor precisión?
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <NextLink
            href='blogs/canales-gnss'
            passHref
            legacyBehavior
          >
          <Button
            size='medium'
            sx={{
              color: 'white',
              fontSize: 18,
              ':hover': {
                backgroundColor: 'primary.dark'
              }
            }}
          >
              Leer más
          </Button>
          </NextLink>
        </CardActions>
      </Card>
    </Box>
  );
}
