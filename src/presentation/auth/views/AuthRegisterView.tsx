import NextLink from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { AuthLayout } from '../layouts';

export const AuthRegisterView = () => {
  return (
    <AuthLayout
      title='Crea tu cuenta Müpütun.'
      subtitle='Deja listo tu acceso para comprar, cotizar y gestionar solicitudes cuando el nuevo store entre en operación.'
    >
      <form className='space-y-5'>
        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-name'>
            Nombre
          </label>
          <input
            id='register-name'
            type='text'
            defaultValue='Usuario Demo'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='Nombre y apellido'
          />
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-email'>
            Correo
          </label>
          <input
            id='register-email'
            type='email'
            defaultValue='demo@muputun.cl'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='cliente@empresa.cl'
          />
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-password'>
            Contraseña
          </label>
          <input
            id='register-password'
            type='password'
            defaultValue='Muputun2026'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='••••••••'
          />
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-password-repeat'>
            Repetir contraseña
          </label>
          <input
            id='register-password-repeat'
            type='password'
            defaultValue='Muputun2026'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='••••••••'
          />
        </div>

        <MupuButton
          className='w-full'
          href='/'
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          variant='accent'
        >
          Crear cuenta
        </MupuButton>

        <p className='text-center text-sm text-slate-600'>
          ¿Ya tienes cuenta?{' '}
          <NextLink href='/auth/login' className='font-semibold text-cyan-700 transition hover:text-cyan-500'>
            Ingresar
          </NextLink>
        </p>
      </form>
    </AuthLayout>
  );
};
