// Zustand
import { create } from 'zustand';


export const useProductStore = create( (set) => ({
  productName: '',

  setProductName: ( name ) => set({ productName: name }),
  clearProductName: () => set({ productName: '' }),
}));
