import {
  IoMailOutline,
  IoServerOutline,
} from 'react-icons/io5';
import {
  AdminCard,
  AdminSectionHeader,
} from '@/presentation/admin/components';
import type { EmailAccountBacklogItem } from '../types/email-accounts.types';

type EmailAccountsBacklogProps = {
  items: EmailAccountBacklogItem[];
};

export const EmailAccountsBacklog = ({ items }: EmailAccountsBacklogProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow='Integración'
      title='Backlog de backend'
      description='Separación recomendada: cPanel para gestión, IMAP/SMTP para operación de correo.'
    />
    <div className='space-y-3'>
      {items.map(({ title, description }) => (
        <div key={ title } className='rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
          <div className='flex items-center gap-3'>
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100/80 text-cyan-800'>
              { title === 'cPanel UAPI' ? <IoServerOutline size={ 18 } /> : <IoMailOutline size={ 18 } /> }
            </div>
            <p className='text-sm font-semibold text-slate-950'>{ title }</p>
          </div>
          <p className='mt-3 text-sm leading-6 text-slate-600'>{ description }</p>
        </div>
      ))}
    </div>
  </AdminCard>
);

