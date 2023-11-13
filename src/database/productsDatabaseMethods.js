// Database
import { productsDB } from './productsDatabase'

export const getProductByCategory = ( cate = '' ) => {
  const filteredProducts = productsDB.filter(
    product => product.cate === cate 
  );

  return filteredProducts;
}

export const getProductBySlug = ( slug = '' ) => {
  const productBySlug = productsDB.find(
    product => product.slug === slug
  );

  return productBySlug;
}

export const getAllProductSlugs = () => {
  const slugs = productsDB.map( product => product.slug );

  return slugs;
}
