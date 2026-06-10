import { useEffect, useState } from "react";
import type { Product } from "@/core";
import { useProductsStore } from "@/presentation/products";

type UseSearchResultsOptions = {
  query: string;
  initialProducts: Product[];
  initialProductsExists: boolean;
};

export const useSearchResults = ({
  query,
  initialProducts,
  initialProductsExists,
}: UseSearchResultsOptions) => {
  const searchProducts = useProductsStore((state) => state.searchProducts);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [productsExists, setProductsExists] = useState(initialProductsExists);

  useEffect(() => {
    let isMounted = true;

    searchProducts(query).then((result) => {
      if (!isMounted) return;

      setProducts(result.products);
      setProductsExists(result.productsExists);
    });

    return () => {
      isMounted = false;
    };
  }, [query, searchProducts]);

  return {
    products,
    productsExists,
    query,
  };
};
