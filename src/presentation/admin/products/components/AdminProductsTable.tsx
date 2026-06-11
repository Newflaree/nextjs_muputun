import {
  IoAddOutline,
} from 'react-icons/io5';
import {
  AdminCard,
  AdminSectionHeader,
  AdminStatusBadge,
} from '@/presentation/admin/components';
import { MupuButton } from '@/presentation/shared';
import { AdminProductFilters } from './AdminProductFilters';
import type { AdminProductRow } from '../types/admin-products.types';

type AdminProductsTableProps = {
  filters: string[];
  products: AdminProductRow[];
  statusTone: (status: string) => 'slate' | 'cyan' | 'green' | 'amber' | 'red';
};

export const AdminProductsTable = ({
  filters,
  products,
  statusTone,
}: AdminProductsTableProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow='Catálogo'
      title='Inventario visual'
      description='Tabla pensada para filtrar, ordenar y editar fichas cuando conectemos el backend.'
      action={ (
        <MupuButton size='md' variant='solid' iconLeft={ <IoAddOutline size={ 18 } /> }>
          Nuevo producto
        </MupuButton>
      ) }
    />

    <AdminProductFilters filters={ filters } />

    <div className='overflow-hidden rounded-[1.5rem] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
      <div className='overflow-x-auto'>
        <table className='min-w-[820px] w-full text-left text-sm'>
          <thead className='bg-slate-950/90 text-xs uppercase tracking-[0.18em] text-white'>
            <tr>
              <th className='px-5 py-4 font-semibold'>Producto</th>
              <th className='px-5 py-4 font-semibold'>Categoría</th>
              <th className='px-5 py-4 font-semibold'>Estado</th>
              <th className='px-5 py-4 font-semibold'>Visibilidad</th>
              <th className='px-5 py-4 font-semibold'>SEO</th>
              <th className='px-5 py-4 font-semibold'>Actualizado</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200/70'>
            {products.map((product) => (
              <tr key={ product.name } className='bg-white/44 transition hover:bg-white/74'>
                <td className='px-5 py-4 font-semibold text-slate-950'>{ product.name }</td>
                <td className='px-5 py-4 text-slate-600'>{ product.category }</td>
                <td className='px-5 py-4'>
                  <AdminStatusBadge tone={ statusTone(product.status) }>
                    { product.status }
                  </AdminStatusBadge>
                </td>
                <td className='px-5 py-4 text-slate-600'>{ product.visibility }</td>
                <td className='px-5 py-4 text-slate-600'>{ product.seo }</td>
                <td className='px-5 py-4 text-slate-500'>{ product.updated }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminCard>
);

