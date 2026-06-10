import { create } from "zustand";
import type { HeaderInfo, StaticPageMenuItem } from "@/core";
import { headerInfo, staticPageMenu } from "@/infrastructure/shop";

type ShopDataState = {
  headerSlides: HeaderInfo[];
  menuItems: StaticPageMenuItem[];
  getHeaderSlides: () => Promise<HeaderInfo[]>;
  getMenuItems: () => Promise<StaticPageMenuItem[]>;
};

const getHeaderSlidesFromBackend = async (): Promise<HeaderInfo[]> => headerInfo;
const getMenuItemsFromBackend = async (): Promise<StaticPageMenuItem[]> => staticPageMenu;

export const useShopDataStore = create<ShopDataState>((set) => ({
  headerSlides: headerInfo,
  menuItems: staticPageMenu,

  getHeaderSlides: async () => {
    const slides = await getHeaderSlidesFromBackend();
    set({ headerSlides: slides });
    return slides;
  },

  getMenuItems: async () => {
    const menuItems = await getMenuItemsFromBackend();
    set({ menuItems });
    return menuItems;
  },
}));
