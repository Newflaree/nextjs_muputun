import { useEffect, useState } from "react";
import type { StaticPageMenuItem } from "@/core";
import { useShopDataStore } from "../state";

export const useMenuItems = () => {
  const getMenuItems = useShopDataStore((state) => state.getMenuItems);
  const menuItemsFromStore = useShopDataStore((state) => state.menuItems);
  const [menuItems, setMenuItems] = useState<StaticPageMenuItem[]>(menuItemsFromStore);

  useEffect(() => {
    let isMounted = true;

    getMenuItems().then((backendMenuItems) => {
      if (isMounted) {
        setMenuItems(backendMenuItems);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getMenuItems]);

  return {
    menuItems,
  };
};
