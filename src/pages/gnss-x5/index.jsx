// Database
import { productsDB } from '@/database';
// Views
import { CategoryView } from '@/ui/views';


const products = productsDB.filter( product => product.cate === 'gnss-x5' );

const GNSSPage = () => {
  return <CategoryView
    products={ products }
    category='GNSS X5'
    title='Dispositivos GNSS X5'
    subtitle='Nuestros Productos GNSS X5'
    description='Nuestros Dispositivos GNSS X5 ofrecen una precisión incomparable al convertir señales GPS, Glonass, Galileo y Beidou en ubicaciones terrestres exactas. Con capacidad de múltiples constelaciones, garantizan un posicionamiento superior, ideal para navegación vehicular, mapeo detallado y aplicaciones que exigen alta precisión en cualquier entorno como la topografía.'
  />
}

export default GNSSPage;
