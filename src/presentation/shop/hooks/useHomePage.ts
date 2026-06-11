import { useEffect, useState } from "react";
import type { HeaderInfo, HomeProduct } from "@/core";
import { useProductsStore } from "@/presentation/shop/products";
import { useShopDataStore } from "../state";

export const useHomePage = () => {
  const getHeaderSlides = useShopDataStore((state) => state.getHeaderSlides);
  const headerSlidesFromStore = useShopDataStore((state) => state.headerSlides);
  const getHomeProducts = useProductsStore((state) => state.getHomeProducts);
  const homeProductsFromStore = useProductsStore((state) => state.homeProducts);
  const [headerSlides, setHeaderSlides] = useState<HeaderInfo[]>(headerSlidesFromStore);
  const [products, setProducts] = useState<HomeProduct[]>(homeProductsFromStore);

  useEffect(() => {
    let isMounted = true;

    Promise.all([getHeaderSlides(), getHomeProducts()]).then(
      ([backendSlides, backendProducts]) => {
        if (!isMounted) return;

        setHeaderSlides(backendSlides);
        setProducts(backendProducts);
      },
    );

    return () => {
      isMounted = false;
    };
  }, [getHeaderSlides, getHomeProducts]);

  return {
    headerSlides,
    products,
  };
};
