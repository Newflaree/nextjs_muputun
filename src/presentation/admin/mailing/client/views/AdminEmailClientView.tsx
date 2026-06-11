import {
  AdminStatCard,
} from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';
import {
  EmailComposeModal,
  EmailFolderNav,
  EmailMessageList,
  EmailReadModal,
} from '../components';
import { useAdminEmailClient } from '../hooks';
import type { MailFolderKey } from '../types';

type AdminEmailClientViewProps = {
  folder?: MailFolderKey;
};

export const AdminEmailClientView = ({ folder = 'inbox' }: AdminEmailClientViewProps) => {
  const emailClient = useAdminEmailClient({ folder });

  return (
    <AdminLayout
      title='Cliente de correos'
      description='Maqueta para leer bandejas vía IMAP y enviar respuestas por SMTP desde el dashboard administrativo.'
    >
      <div className='grid gap-5 md:grid-cols-3'>
        {emailClient.stats.map(({ description, icon: StatIcon, label, value }) => (
          <AdminStatCard
            key={ label }
            label={ label }
            value={ value }
            description={ description }
            icon={ <StatIcon size={ 21 } /> }
          />
        ))}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]'>
        <EmailFolderNav
          activeFolder={ emailClient.folder }
          folders={ emailClient.folders }
        />
        <EmailMessageList
          folder={ emailClient.activeFolder }
          messages={ emailClient.activeMessages }
          onCompose={ emailClient.openCompose }
          onOpenMessage={ emailClient.openMessage }
          statusTone={ emailClient.getStatusTone }
        />
      </div>

      <EmailComposeModal
        open={ emailClient.isComposeOpen }
        onClose={ emailClient.closeCompose }
      />
      <EmailReadModal
        message={ emailClient.selectedMessage }
        onClose={ emailClient.closeMessage }
        onReply={ emailClient.openCompose }
        statusTone={ emailClient.getStatusTone }
      />
    </AdminLayout>
  );
};

