// Database
import { productsDB } from './'


export const getAllProducts = async () => {
  return productsDB;
}

export const getProductByCategory = async ( cate = '' ) => {
  const filteredProducts = productsDB.filter(
    product => product.cate === cate 
  );

  return filteredProducts;
}

export const getProductBySlug = async ( slug = '' ) => {
  const productBySlug = productsDB.find(
    product => product.slug === slug
  );

  return productBySlug;
}

export const getAllProductSlugs = async () => {
  const slugs = productsDB.map( product => product.slug );

  return slugs;
}

export const getProductsBySearchTerm = async ( term = '' ) => {
  term = term.toString().toLowerCase();

  const searchedProducts = productsDB.filter(( product ) =>
    product.name.toLowerCase().includes( term )
  );

  return searchedProducts;
}
