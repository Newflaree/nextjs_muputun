import {
  IoArchiveOutline,
  IoCloseOutline,
  IoPencilOutline,
  IoPersonCircleOutline,
  IoTimeOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { AdminStatusBadge } from '@/presentation/admin/components';
import { MupuButton } from '@/presentation/shared';
import type { MailMessage } from '../types/email-client.types';

type EmailReadModalProps = {
  message: MailMessage | null;
  onClose: () => void;
  onReply: () => void;
  statusTone: (status: string) => 'slate' | 'cyan' | 'green' | 'amber' | 'red';
};

export const EmailReadModal = ({
  message,
  onClose,
  onReply,
  statusTone,
}: EmailReadModalProps) => {
  if (!message) return null;

  return (
    <div className='fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/28 px-4 py-6 backdrop-blur-xl'>
      <div className='w-full max-w-4xl overflow-hidden rounded-[2.25rem] bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.84),0_34px_120px_rgba(15,23,42,0.22)] backdrop-blur-2xl sm:p-7'>
        <div className='flex items-start justify-between gap-5'>
          <div className='min-w-0'>
            <p className='text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700'>{ message.account }</p>
            <h2 className='mt-2 text-3xl font-semibold text-slate-950'>{ message.subject }</h2>
            <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600'>
              <span className='inline-flex items-center gap-2 rounded-full bg-white/62 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <IoPersonCircleOutline size={ 18 } />
                { message.from }
              </span>
              <span className='inline-flex items-center gap-2 rounded-full bg-white/62 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <IoTimeOutline size={ 18 } />
                { message.time }
              </span>
              <AdminStatusBadge tone={ statusTone(message.status) }>
                { message.status }
              </AdminStatusBadge>
            </div>
          </div>
          <button
            className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/64 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition hover:bg-white hover:text-slate-950'
            type='button'
            aria-label='Cerrar mensaje'
            onClick={ onClose }
          >
            <IoCloseOutline size={ 20 } />
          </button>
        </div>

        <div className='mt-7 rounded-[1.75rem] bg-white/62 p-5 text-base leading-8 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
          { message.body }
        </div>

        <div className='mt-6 flex flex-wrap justify-end gap-3'>
          <MupuButton size='md' variant='glass' iconLeft={ <IoArchiveOutline size={ 18 } /> }>
            Archivar
          </MupuButton>
          <MupuButton size='md' variant='glass' iconLeft={ <IoTrashOutline size={ 18 } /> }>
            Eliminar
          </MupuButton>
          <MupuButton size='md' variant='solid' iconLeft={ <IoPencilOutline size={ 18 } /> } onClick={ onReply }>
            Responder
          </MupuButton>
        </div>
      </div>
    </div>
  );
};

