import { create } from 'zustand';

type ContactProductState = {
  productName: string;
  setProductName: (name: string) => void;
  clearProductName: () => void;
};

export const useProductStore = create<ContactProductState>( (set) => ({
  productName: '',

  setProductName: ( name ) => set({ productName: name }),
  clearProductName: () => set({ productName: '' }),
}));
