// Material UI
import {
  Box,
  Typography
} from "@mui/material";


export const NotFoundView  = () => {
  return (
    <Box
      textAlign='center'
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 70px )'
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Typography
        color={ 'primary' }
        variant="h1"
        component='h1'
        fontSize={ 80 }
        fontWeight={ 200 }
      >
        404  <Typography sx={{ display: 'none' }}>|</Typography>
      </Typography>
      <Typography
        marginLeft={ 2 }
        fontSize={ 30 }
        fontWeight={ 100 }
      >
        No encontramos ninguna página aquí
      </Typography>
    </Box>
  );
}
