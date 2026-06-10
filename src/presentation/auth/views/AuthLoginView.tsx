import NextLink from 'next/link';
import { IoArrowForwardOutline, IoPersonOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { AuthLayout } from '../layouts';

export const AuthLoginView = () => {
  return (
    <AuthLayout
      title='Tu espacio Müpütun.'
      subtitle='Accede a una experiencia pensada para cotizaciones, seguimiento de solicitudes y herramientas de compra cuando el store esté conectado.'
    >
      <form className='space-y-5'>
        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='customer-email'>
            Correo
          </label>
          <input
            id='customer-email'
            type='email'
            defaultValue='demo@muputun.cl'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='cliente@empresa.cl'
          />
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='customer-password'>
            Contraseña
          </label>
          <input
            id='customer-password'
            type='password'
            defaultValue='Muputun2026'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='••••••••'
          />
        </div>

        <MupuButton
          className='w-full'
          href='/'
          iconLeft={ <IoPersonOutline size={ 18 } /> }
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          variant='accent'
        >
          Ingresar
        </MupuButton>

        <p className='text-center text-sm text-slate-600'>
          ¿No tienes cuenta?{' '}
          <NextLink href='/auth/register' className='font-semibold text-cyan-700 transition hover:text-cyan-500'>
            Crear cuenta
          </NextLink>
        </p>
      </form>
    </AuthLayout>
  );
};
