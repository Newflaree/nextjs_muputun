import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export const HomeCard = ({ cardTitle = '', cardDesc = '', cardImg }) => {
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
