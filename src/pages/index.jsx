// Layouts
import { MainLayout } from '@/components/layouts';
// Material UI
import { Box } from '@mui/material';


export default function Home() {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc='Accesorios para drones enfocado en servicios topográficos'
    >
      <Box
        height='calc( 100vh - 70px )'
        mt={ 8 }
      >
        { /*SideShow*/ }
        <h1>Slide</h1>
        { /*SideProducts*/ }
        <h1>products</h1>
        { /*SideServices*/ }
        <h1>Services</h1>
      </Box>
    </MainLayout>
  )
}
