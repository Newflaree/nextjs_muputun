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


export const BlogCard = ({
  blogTitle = '',
  blogImg = '',
  blogDesc = '',
  blogLink = ''
}) => {
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
          image={ blogImg }
          title={ blogTitle }
        />
        <CardContent sx={{ bgcolor: 'transparent' }}>
          <Typography gutterBottom variant="h5" component="div" color='primary' pb={1}>
            { blogTitle }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { blogDesc }
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <NextLink
            href={ blogLink }
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
