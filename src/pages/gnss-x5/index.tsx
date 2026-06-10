import { CategoryView, useCategoryProducts } from '@/presentation';

const GNSSPage = () => {
  const category = useCategoryProducts({
    productCategory: 'gnss-x5',
    category: 'GNSS X5',
    title: 'Dispositivos GNSS X5',
    subtitle: 'Nuestros Productos GNSS X5',
    description: 'Nuestros Dispositivos GNSS X5 ofrecen una precisión incomparable al convertir señales GPS, Glonass, Galileo y Beidou en ubicaciones terrestres exactas. Con capacidad de múltiples constelaciones, garantizan un posicionamiento superior, ideal para navegación vehicular, mapeo detallado y aplicaciones que exigen alta precisión en cualquier entorno como la topografía.',
  });

  return <CategoryView { ...category } />
}

export default GNSSPage;
