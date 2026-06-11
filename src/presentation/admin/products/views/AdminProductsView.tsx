import { AdminStatCard } from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';
import {
  AdminProductsBacklog,
  AdminProductsTable,
} from '../components';
import { useAdminProducts } from '../hooks';

export const AdminProductsView = () => {
  const adminProducts = useAdminProducts();

  return (
    <AdminLayout
      title='Productos'
      description='Maquetación del módulo para administrar catálogo GNSS, categorías, visibilidad, assets y estado SEO.'
    >
      <div className='grid gap-5 md:grid-cols-3'>
        {adminProducts.stats.map(({ description, icon: StatIcon, label, value }) => (
          <AdminStatCard
            key={ label }
            label={ label }
            value={ value }
            description={ description }
            icon={ <StatIcon size={ 21 } /> }
          />
        ))}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1fr_320px]'>
        <AdminProductsTable
          filters={ adminProducts.filters }
          products={ adminProducts.products }
          statusTone={ adminProducts.getStatusTone }
        />
        <AdminProductsBacklog items={ adminProducts.backlog } />
      </div>
    </AdminLayout>
  );
};

