import { create } from "zustand";
import type { HomeProduct, Product } from "@/core";
import { homeProducts, productsDB } from "@/infrastructure/products";

type ProductSearchResult = {
  products: Product[];
  productsExists: boolean;
};

type ProductsState = {
  products: Product[];
  homeProducts: HomeProduct[];
  setProducts: (products: Product[]) => void;
  setHomeProducts: (products: HomeProduct[]) => void;
  hydrateProduct: (product: Product) => void;
  getAllProducts: () => Promise<Product[]>;
  getHomeProducts: () => Promise<HomeProduct[]>;
  getProductsByCategory: (category: string) => Promise<Product[]>;
  getProductBySlug: (slug: string) => Promise<Product | undefined>;
  searchProducts: (term: string) => Promise<ProductSearchResult>;
};

const getAllProductsFromBackend = async (): Promise<Product[]> => productsDB;
const getHomeProductsFromBackend = async (): Promise<HomeProduct[]> => homeProducts;

export const getProductBySlugFromBackend = async (
  slug: string,
): Promise<Product | undefined> => {
  return productsDB.find((product) => product.slug === slug);
};

export const searchProductsFromBackend = async (
  term: string,
): Promise<ProductSearchResult> => {
  const normalizedTerm = term.toString().toLowerCase();
  const foundProducts = productsDB.filter((product) =>
    product.name.toLowerCase().includes(normalizedTerm),
  );

  if (foundProducts.length > 0) {
    return {
      products: foundProducts,
      productsExists: true,
    };
  }

  return {
    products: productsDB,
    productsExists: false,
  };
};

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: productsDB,
  homeProducts,

  setProducts: (products) => set({ products }),
  setHomeProducts: (products) => set({ homeProducts: products }),

  hydrateProduct: (product) =>
    set((state) => {
      const productExists = state.products.some(
        (storedProduct) => storedProduct.slug === product.slug,
      );

      if (productExists) return state;

      return {
        products: [...state.products, product],
      };
    }),

  getAllProducts: async () => {
    const products = await getAllProductsFromBackend();
    set({ products });
    return products;
  },

  getHomeProducts: async () => {
    const products = await getHomeProductsFromBackend();
    set({ homeProducts: products });
    return products;
  },

  getProductsByCategory: async (category) => {
    const products = get().products.filter((product) => product.cate === category);

    if (products.length > 0) return products;

    const backendProducts = await getAllProductsFromBackend();
    set({ products: backendProducts });

    return backendProducts.filter((product) => product.cate === category);
  },

  getProductBySlug: async (slug) => {
    const product = get().products.find((storedProduct) => storedProduct.slug === slug);

    if (product) return product;

    const backendProduct = await getProductBySlugFromBackend(slug);

    if (backendProduct) {
      get().hydrateProduct(backendProduct);
    }

    return backendProduct;
  },

  searchProducts: async (term) => {
    const result = await searchProductsFromBackend(term);
    set({ products: productsDB });
    return result;
  },
}));
