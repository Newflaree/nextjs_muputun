// React
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { ContactMessageDto } from '@/core';

type ContactFormFieldsProps = {
  errors: FieldErrors<ContactMessageDto>;
  register: UseFormRegister<ContactMessageDto>;
};

export const ContactFormFields = ({
  errors,
  register
}: ContactFormFieldsProps) => {
  const inputClassName = 'mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80';
  const labelClassName = 'text-sm font-semibold text-slate-700';
  const errorClassName = 'mt-2 block text-sm font-medium text-red-500';

  return (
    <div className='grid gap-5 sm:grid-cols-2'>
      <div>
        <label className={ labelClassName }>Nombre</label>
        <input
          className={ inputClassName }
          placeholder='Nombre'
          type='text'
          { ...register('name', { required: 'Este campo es obligatorio' })}
        />
        <span className={ errorClassName }>{ errors.name?.message }</span>
      </div>

      <div>
        <label className={ labelClassName }>Apellido</label>
        <input
          className={ inputClassName }
          placeholder='Apellido'
          type='text'
          { ...register('lastName', { required: 'Este campo es obligatorio' })}
        />
        <span className={ errorClassName }>{ errors.lastName?.message }</span>
      </div>

      <div className='sm:col-span-2'>
        <label className={ labelClassName }>Correo electrónico</label>
        <input
          className={ inputClassName }
          placeholder='correo@empresa.cl'
          type='email'
          { ...register('emailAddress', { required: 'Este campo es obligatorio' })}
        />
        <span className={ errorClassName }>{ errors.emailAddress?.message }</span>
      </div>

      <div className='sm:col-span-2'>
        <label className={ labelClassName }>Asunto</label>
        <input
          className={ inputClassName }
          placeholder='RTK, PPK, NTRIP Local, CORS o accesorios'
          type='text'
          { ...register('subject', { required: 'Este campo es obligatorio' })}
        />
        <span className={ errorClassName }>{ errors.subject?.message }</span>
      </div>

      <div className='sm:col-span-2'>
        <label className={ labelClassName }>Mensaje</label>
        <textarea
          className='mt-2 min-h-40 w-full resize-none rounded-[1.75rem] bg-white/58 px-5 py-4 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
          placeholder='Cuéntanos el tipo de trabajo, precisión requerida, equipo actual, software, drone RTK o red de corrección que usas.'
          rows={ 5 }
          { ...register('message', { required: 'Este campo es obligatorio' })}
        />
        <span className={ errorClassName }>{ errors.message?.message }</span>
      </div>
    </div>
  );
}
