import {
  IoAttachOutline,
  IoCloseOutline,
  IoSendOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';

type EmailComposeModalProps = {
  open: boolean;
  onClose: () => void;
};

export const EmailComposeModal = ({ open, onClose }: EmailComposeModalProps) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/28 px-4 py-6 backdrop-blur-xl'>
      <div className='w-full max-w-3xl overflow-hidden rounded-[2.25rem] bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.84),0_34px_120px_rgba(15,23,42,0.22)] backdrop-blur-2xl sm:p-7'>
        <div className='flex items-start justify-between gap-5'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700'>SMTP</p>
            <h2 className='mt-2 text-3xl font-semibold text-slate-950'>Nuevo correo</h2>
            <p className='mt-2 text-sm leading-6 text-slate-600'>Composer visual para futura integración con SMTP y plantillas guardadas.</p>
          </div>
          <button
            className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/64 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] transition hover:bg-white hover:text-slate-950'
            type='button'
            aria-label='Cerrar redacción'
            onClick={ onClose }
          >
            <IoCloseOutline size={ 20 } />
          </button>
        </div>

        <div className='mt-6 grid gap-3'>
          {['Desde: ventas@muputun.cl', 'Para', 'Asunto'].map((label) => (
            <div key={ label } className='rounded-full bg-white/62 px-5 py-3 text-sm text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
              { label }
            </div>
          ))}
          <div className='min-h-56 rounded-[1.75rem] bg-white/62 p-5 text-sm leading-6 text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
            Escribe una respuesta comercial o técnica. Más adelante este editor enviará por SMTP, permitirá adjuntos y guardará borradores.
          </div>
        </div>

        <div className='mt-6 flex flex-wrap justify-end gap-3'>
          <MupuButton size='md' variant='glass' iconLeft={ <IoAttachOutline size={ 18 } /> }>
            Adjuntar
          </MupuButton>
          <MupuButton size='md' variant='solid' iconRight={ <IoSendOutline size={ 18 } /> }>
            Enviar
          </MupuButton>
        </div>
      </div>
    </div>
  );
};

