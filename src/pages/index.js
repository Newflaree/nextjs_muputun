// Layouts
import {MainLayout} from '@/components/layouts';
//Views
import {InBuilding} from '@/views';


const cardContent = [
  {
    id: 1,
    cardTitle: 'Servicio 1',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload/v1694637816/demos/muputun/Copia_de_Copia_de_X5_RECEIVER_-_EN_CAMPO_-02_c4sm84.png'
  },
  {
    id: 2,
    cardTitle: 'Servicio 2',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload/v1694637245/demos/muputun/Copia_de_20230210_131928_aq1hro.jpg'
  },
  {
    id: 3,
    cardTitle: 'Servicio 3',
    cardDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, ipsum id blandit elementum, erat augue faucibus est,',
    cardImg: 'https://res.cloudinary.com/newflare/image/upload/v1694637238/demos/muputun/Copia_de_X5_MOBILE_-_METTA_vinculado_a_07_00427_wwrzrn.jpg'
  }
];

export default function Home() {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc='Servicio de drones y equipos topográficos'
    >
      <InBuilding />
    </MainLayout>
  )
}
