import {
  IoPencilOutline,
  IoSearchOutline,
} from 'react-icons/io5';
import { AdminCard, AdminSectionHeader, AdminStatusBadge } from '@/presentation/admin/components';
import { MupuButton } from '@/presentation/shared';
import type {
  MailFolderConfig,
  MailMessage,
} from '../types/email-client.types';

type EmailMessageListProps = {
  folder: MailFolderConfig;
  messages: MailMessage[];
  onCompose: () => void;
  onOpenMessage: (message: MailMessage) => void;
  statusTone: (status: string) => 'slate' | 'cyan' | 'green' | 'amber' | 'red';
};

export const EmailMessageList = ({
  folder,
  messages,
  onCompose,
  onOpenMessage,
  statusTone,
}: EmailMessageListProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow={ folder.eyebrow }
      title={ folder.title }
      description={ folder.description }
      action={ (
        <MupuButton
          size='md'
          variant='solid'
          iconLeft={ <IoPencilOutline size={ 18 } /> }
          onClick={ onCompose }
        >
          Redactar
        </MupuButton>
      ) }
    />

    <div className='mb-5 flex h-12 items-center gap-3 rounded-full bg-white/62 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
      <IoSearchOutline className='text-slate-400' size={ 18 } />
      <span className='text-sm text-slate-500'>Buscar por cuenta, asunto o cliente</span>
    </div>

    <div className='space-y-3'>
      {messages.map((message) => (
        <button
          key={ `${ message.account }-${ message.subject }` }
          className='w-full rounded-[1.5rem] bg-white/54 p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:-translate-y-0.5 hover:bg-white/78 hover:shadow-[0_18px_54px_rgba(15,23,42,0.10)]'
          type='button'
          onClick={ () => onOpenMessage(message) }
        >
          <div className='grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>{ message.account }</p>
              <h2 className='mt-2 text-base font-semibold text-slate-950'>{ message.subject }</h2>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{ message.preview }</p>
              <p className='mt-3 line-clamp-2 text-sm leading-6 text-slate-500'>{ message.body }</p>
            </div>
            <div className='flex shrink-0 items-center gap-3'>
              <AdminStatusBadge tone={ statusTone(message.status) }>
                { message.status }
              </AdminStatusBadge>
              <span className='text-sm font-semibold text-slate-500'>{ message.time }</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  </AdminCard>
);

