// Material UI
import {
  Box,
  Typography
} from '@mui/material';

// Layouts
import { MainLayout } from '@/components/layouts';


const AboutPage = () => {
  return (
    <MainLayout
      pageTitle="Quiénes Somos"
      pageDesc="Conoce más sobre nosotros"
    > 
      <Box
        p={ 8 }
        height={ 'calc( 100vh - 100px )' }
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='h1'
          my={ 4 }
          textAlign='center'
        >
          Sobre Nosotros
        </Typography>
        <Typography
          variant='p'
          textAlign='center'
        >
          Somos una empresa emergente, con equipo de profesionales de espíritu emprendedor, cuyo objetivo es modernizar la operación de la industria en CHILE, expandiendo el acceso a las nuevas tecnologías, brindando acompañamiento en la implementación de estas a quienes sean parte de este grupo hermano.
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default AboutPage;
