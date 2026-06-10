import Image from 'next/image';
import {
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
// Componets
import {
  ContactFormFields,
  ContactSubmitButton,
} from '../components';
import { ShopLayout } from '@/presentation/shop';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import type { ContactMessageDto } from '@/core';

type ContactViewProps = {
  register: UseFormRegister<ContactMessageDto>;
  handleSubmit: UseFormHandleSubmit<ContactMessageDto>;
  onSubmitMessage: SubmitHandler<ContactMessageDto>;
  errors: FieldErrors<ContactMessageDto>;
  isSubmitting: boolean;
};

export const ContactView = ({
  register,
  handleSubmit,
  onSubmitMessage,
  errors,
  isSubmitting
}: ContactViewProps) => {
  return (
    <ShopLayout
      pageTitle='Contacto'
      pageDesc='Contacta a Müpütun para cotizar soluciones GNSS, soporte técnico y configuración de equipos X5.'
    >
      <section className='relative isolate overflow-hidden bg-white py-24 lg:py-28'>
        <Image
          src='/images/product-card-x5rt-bg.png'
          alt=''
          fill
          sizes='100vw'
          className='absolute inset-0 -z-10 h-full w-full object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 -z-10 bg-white/72' />

        <div className='mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8'>
          <div className='flex flex-col justify-between rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:p-10'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                Contacto
              </p>
              <h1 className='mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl'>
                Conversemos sobre precisión en terreno.
              </h1>
              <p className='mt-6 max-w-xl text-lg leading-8 text-slate-600'>
                Cuéntanos qué necesitas medir, integrar o resolver. Te ayudamos a elegir equipos X5, flujos RTK/PPK/NTRIP y soporte para tu operación.
              </p>
            </div>

            <div className='mt-12 space-y-3'>
              {[
                [IoMailOutline, 'info@muputun.cl', 'Correo comercial y soporte'],
                [IoPhonePortraitOutline, '+56 9 87754953', 'WhatsApp y contacto directo'],
                [IoLocationOutline, 'Chile', 'Atención a proyectos geoespaciales'],
              ].map(([Icon, title, subtitle]) => {
                const ContactIcon = Icon as typeof IoMailOutline;

                return (
                  <div key={ title as string } className='flex items-center gap-4 rounded-[1.6rem] bg-white/42 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_14px_40px_rgba(15,23,42,0.07)] backdrop-blur-2xl'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/12 text-cyan-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                      <ContactIcon size={ 22 } />
                    </div>
                    <div>
                      <p className='font-semibold text-slate-950'>{ title as string }</p>
                      <p className='text-sm text-slate-500'>{ subtitle as string }</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={ handleSubmit( onSubmitMessage ) }
            className='rounded-[2.5rem] bg-white/48 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-8 lg:p-10'
          >
            <div className='mb-8'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600'>
                Solicitud
              </p>
              <h2 className='mt-3 text-3xl font-semibold tracking-normal text-slate-950'>
                Envíanos los detalles
              </h2>
              <p className='mt-3 text-sm leading-6 text-slate-600'>
                Mientras más contexto tengamos, mejor podremos orientar la configuración.
              </p>
            </div>

            <ContactFormFields
              register={ register }
              errors={ errors }
            />

            <ContactSubmitButton
              isSubmitting={ isSubmitting }
            />
          </form>
        </div>
      </section>
    </ShopLayout>
  );
}
