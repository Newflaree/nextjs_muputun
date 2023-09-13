// Components
import { HomeCard, SlideShow } from '@/components/ui/home';
// Layouts
import { MainLayout } from '@/components/layouts';
import {Box, Grid} from '@mui/material';


const cardContent = [
  {
    id: 1,
    cardTitle: 'Servicio 1',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload//c_thumb,w_900,h_900,g_auto/v1692218033/bustagrand/banner/171317908_184296963525585_7864976729209806356_n_zqhecw.jpg'
  },
  {
    id: 2,
    cardTitle: 'Servicio 2',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload//c_thumb,w_900,h_900,g_auto/v1692218033/bustagrand/banner/278182265_397551982200081_2172593407620871580_n_txgz0c.jpg'
  },
  {
    id: 3,
    cardTitle: 'Servicio 3',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload//c_thumb,w_900,h_900,g_auto/v1692218033/bustagrand/banner/262979003_322756166346330_7667277787421249266_n_vh47kv.jpg'
  }
]

export default function Home() {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc='Servicio de drones y equipos topográficos'
    >
      { /*SlideShow*/ }
      <SlideShow />
      { /*Algunos servicios*/ }
      <Box margin={ 4 }>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          rowSpacing={ 2 }
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {

            cardContent.map( ({ id, cardTitle, cardDesc, cardImg })  => (
              <Grid key={ id } item xs={ 12 } sm={ 6 }>
                <HomeCard
                  cardTitle={ cardTitle } 
                  cardDesc={ cardDesc }
                  cardImg={ cardImg }
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </MainLayout>
  )
}
