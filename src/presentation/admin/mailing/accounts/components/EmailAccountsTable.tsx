import {
  IoAddOutline,
} from 'react-icons/io5';
import {
  AdminCard,
  AdminSectionHeader,
  AdminStatusBadge,
} from '@/presentation/admin/components';
import { MupuButton } from '@/presentation/shared';
import type { EmailAccountRow } from '../types/email-accounts.types';

type EmailAccountsTableProps = {
  accounts: EmailAccountRow[];
  statusTone: (status: string) => 'slate' | 'cyan' | 'green' | 'amber' | 'red';
};

export const EmailAccountsTable = ({
  accounts,
  statusTone,
}: EmailAccountsTableProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow='cPanel'
      title='Cuentas corporativas'
      description='Vista preparada para crear buzones, cambiar cuotas, rotar passwords y suspender accesos desde el backend.'
      action={ (
        <MupuButton size='md' variant='solid' iconLeft={ <IoAddOutline size={ 18 } /> }>
          Nueva cuenta
        </MupuButton>
      ) }
    />

    <div className='overflow-hidden rounded-[1.5rem] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
      <div className='overflow-x-auto'>
        <table className='min-w-[820px] w-full text-left text-sm'>
          <thead className='bg-slate-950/90 text-xs uppercase tracking-[0.18em] text-white'>
            <tr>
              <th className='px-5 py-4 font-semibold'>Cuenta</th>
              <th className='px-5 py-4 font-semibold'>Uso</th>
              <th className='px-5 py-4 font-semibold'>Estado</th>
              <th className='px-5 py-4 font-semibold'>Cuota</th>
              <th className='px-5 py-4 font-semibold'>Protocolo</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200/70'>
            {accounts.map((account) => (
              <tr key={ account.email } className='bg-white/44 transition hover:bg-white/74'>
                <td className='px-5 py-4 font-semibold text-slate-950'>{ account.email }</td>
                <td className='px-5 py-4 text-slate-600'>{ account.use }</td>
                <td className='px-5 py-4'>
                  <AdminStatusBadge tone={ statusTone(account.status) }>
                    { account.status }
                  </AdminStatusBadge>
                </td>
                <td className='px-5 py-4 text-slate-600'>{ account.quota }</td>
                <td className='px-5 py-4 text-slate-500'>{ account.protocol }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AdminCard>
);

