import { useEffect, useState } from "react";
import type { Product } from "@/core";
import { useProductsStore } from "../state";
import { useFileDownload } from "./useFileDownload";

type UseProductDetailOptions = {
  initialProduct: Product;
};

export const useProductDetail = ({ initialProduct }: UseProductDetailOptions) => {
  const hydrateProduct = useProductsStore((state) => state.hydrateProduct);
  const getProductBySlug = useProductsStore((state) => state.getProductBySlug);
  const productFromStore = useProductsStore((state) =>
    state.products.find((product) => product.slug === initialProduct.slug),
  );
  const [product, setProduct] = useState<Product>(productFromStore ?? initialProduct);
  const { handleDownload } = useFileDownload();

  useEffect(() => {
    hydrateProduct(initialProduct);
  }, [hydrateProduct, initialProduct]);

  useEffect(() => {
    let isMounted = true;

    getProductBySlug(initialProduct.slug).then((backendProduct) => {
      if (backendProduct && isMounted) {
        setProduct(backendProduct);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getProductBySlug, initialProduct.slug]);

  return {
    product,
    handleDownload,
  };
};
