// Database
import { productsDB } from './productsDatabase'


export const getAllProductSlugs = () => {
  const slugs = productsDB.filter( prod => prod.slug );

  return slugs;
}

export const findProductBySlug = ( slug = '' ) => {

}
