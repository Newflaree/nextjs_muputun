import {Button, Card, CardContent, CardMedia, Typography} from '@mui/material';

export const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        width: 300,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <CardMedia
        sx={{ height: 270 }}
        image='...'
        title='...'
      />

      <CardContent>
        <Typography
          variant='h6'
          gutterBottom
        >
          Title
        </Typography>

        <Typography
          variant='body2'
          component='p'
          color='secondary'
        >
          Description
        </Typography>

        <Typography
          variant='h5'
          mt='16px'
          color='primary'
        >
          Price
        </Typography>

        <Button
          variant='contained'
          color='primary'
          fullWidth
          sx={{ mt: '16px', color: 'white' }}
        >
          Contactar
        </Button>
      </CardContent>
    </Card>
  );
}
