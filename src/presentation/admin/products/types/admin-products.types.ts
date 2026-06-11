import type { IconType } from 'react-icons';

export type AdminProductStat = {
  description: string;
  icon: IconType;
  label: string;
  value: string;
};

export type AdminProductRow = {
  category: string;
  name: string;
  seo: string;
  status: string;
  updated: string;
  visibility: string;
};

