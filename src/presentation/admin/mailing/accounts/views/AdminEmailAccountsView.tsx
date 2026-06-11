import { AdminStatCard } from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';
import {
  EmailAccountsBacklog,
  EmailAccountsTable,
} from '../components';
import { useAdminEmailAccounts } from '../hooks';

export const AdminEmailAccountsView = () => {
  const emailAccounts = useAdminEmailAccounts();

  return (
    <AdminLayout
      title='Gestión de cuentas'
      description='Maqueta para administrar correos corporativos vía backend: creación de casillas con cPanel UAPI y operación segura de credenciales.'
    >
      <div className='grid gap-5 md:grid-cols-3'>
        {emailAccounts.stats.map(({ description, icon: StatIcon, label, value }) => (
          <AdminStatCard
            key={ label }
            label={ label }
            value={ value }
            description={ description }
            icon={ <StatIcon size={ 21 } /> }
          />
        ))}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1fr_340px]'>
        <EmailAccountsTable
          accounts={ emailAccounts.accounts }
          statusTone={ emailAccounts.getStatusTone }
        />
        <EmailAccountsBacklog items={ emailAccounts.backlog } />
      </div>
    </AdminLayout>
  );
};

