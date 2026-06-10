import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/core";
import { useProductsStore } from "../state";

type UseCategoryProductsOptions = {
  productCategory: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
};

export const useCategoryProducts = ({
  productCategory,
  category,
  title,
  subtitle,
  description,
}: UseCategoryProductsOptions) => {
  const getProductsByCategory = useProductsStore((state) => state.getProductsByCategory);
  const productsFromStore = useProductsStore((state) => state.products);
  const categoryProductsFromStore = useMemo(
    () => productsFromStore.filter((product) => product.cate === productCategory),
    [productCategory, productsFromStore],
  );
  const [products, setProducts] = useState<Product[]>(categoryProductsFromStore);

  useEffect(() => {
    let isMounted = true;

    getProductsByCategory(productCategory).then((categoryProducts) => {
      if (isMounted) {
        setProducts(categoryProducts);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [productCategory, getProductsByCategory]);

  return {
    products,
    category,
    title,
    subtitle,
    description,
  };
};
