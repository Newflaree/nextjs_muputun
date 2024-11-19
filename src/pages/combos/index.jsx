// Database
import { productsDB } from '@/database';
// Views
import { CategoryView } from '@/ui/views';


const products = productsDB.filter( product => product.cate === 'combos' );

const CombosPage = () => {
  return <CategoryView
    products={ products }
    category='Combos'
    title='Combos mupütün'
    subtitle='Nuestros combos'
    description='Nuestros Dispositivos GNSS X5 ofrecen una precisión incomparable al convertir señales GPS, Glonass, Galileo y Beidou en ubicaciones terrestres exactas. Con capacidad de múltiples constelaciones, garantizan un posicionamiento superior, ideal para navegación vehicular, mapeo detallado y aplicaciones que exigen alta precisión en cualquier entorno como la topografía.'
  />
}

export default CombosPage;
