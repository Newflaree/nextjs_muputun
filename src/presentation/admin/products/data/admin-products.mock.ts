import {
  IoCloudUploadOutline,
  IoFilterOutline,
  IoPricetagsOutline,
} from 'react-icons/io5';
import type {
  AdminProductRow,
  AdminProductStat,
} from '../types/admin-products.types';

export const adminProductStats: AdminProductStat[] = [
  {
    description: 'Fichas visibles en catálogo.',
    icon: IoPricetagsOutline,
    label: 'Publicados',
    value: '18',
  },
  {
    description: 'Productos en preparación.',
    icon: IoCloudUploadOutline,
    label: 'Borradores',
    value: '3',
  },
  {
    description: 'Cotización personalizada activa.',
    icon: IoFilterOutline,
    label: 'Sin precio',
    value: '21',
  },
];

export const adminProductRows: AdminProductRow[] = [
  { category: 'GNSS X5', name: 'X5 RT Multibanda', seo: 'Completo', status: 'Publicado', updated: 'Hoy', visibility: 'Destacado' },
  { category: 'GNSS X5', name: 'X5 GNSS Receptor', seo: 'Completo', status: 'Publicado', updated: 'Ayer', visibility: 'Visible' },
  { category: 'GNSS X5', name: 'X5 CORS', seo: 'Revisar SEO', status: 'Publicado', updated: '10 Jun', visibility: 'Visible' },
  { category: 'GNSS X5', name: 'X5 Stick', seo: 'Completo', status: 'Publicado', updated: '09 Jun', visibility: 'Visible' },
  { category: 'Accesorios', name: 'X5 LoRa Radio RTK', seo: 'Falta imagen', status: 'Borrador', updated: '08 Jun', visibility: 'Oculto' },
  { category: 'Combos', name: 'Combo X5 + SurPad', seo: 'Completo', status: 'Publicado', updated: '07 Jun', visibility: 'Visible' },
];

export const adminProductBacklog = [
  'Conectar CRUD de productos con API del store.',
  'Habilitar carga de PNG, background y documentos PDF.',
  'Agregar validación SEO antes de publicar.',
  'Separar visibilidad por categoría y producto destacado.',
];

export const adminProductFilters = ['Todos', 'GNSS X5', 'Combos', 'Accesorios'];

export const getAdminProductStatusTone = (status: string) => {
  if (status === 'Publicado') return 'green';
  if (status === 'Borrador') return 'amber';
  return 'slate';
};

