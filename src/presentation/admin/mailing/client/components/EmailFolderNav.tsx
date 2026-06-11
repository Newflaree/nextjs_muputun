import NextLink from 'next/link';
import { AdminCard, AdminSectionHeader } from '@/presentation/admin/components';
import { folderConfig } from '../data/email-client.mock';
import type {
  MailFolderKey,
  MailFolderNavItem,
} from '../types/email-client.types';

type EmailFolderNavProps = {
  activeFolder: MailFolderKey;
  folders: MailFolderNavItem[];
};

export const EmailFolderNav = ({ activeFolder, folders }: EmailFolderNavProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow='Bandejas'
      title='Carpetas'
      description='Bandejas navegables del cliente de correos.'
    />
    <div className='space-y-2'>
      {folders.map(({ href, icon: Icon, key, label }) => {
        const isActive = activeFolder === key;

        return (
          <NextLink
            key={ key }
            href={ href }
            className={ `flex items-center justify-between rounded-full px-4 py-3 text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition ${
              isActive
                ? 'bg-slate-950/90 text-white'
                : 'bg-white/54 text-slate-700 hover:bg-white/82 hover:text-slate-950'
            }` }
          >
            <span className='flex items-center gap-2'>
              <Icon size={ 17 } />
              { label }
            </span>
            <span className={ isActive ? 'text-cyan-200' : 'text-cyan-800' }>
              { folderConfig[key].count }
            </span>
          </NextLink>
        );
      })}
    </div>
  </AdminCard>
);

