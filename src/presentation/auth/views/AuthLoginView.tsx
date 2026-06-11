import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IoArrowForwardOutline,
  IoEyeOffOutline,
  IoEyeOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { useAuth } from '../hooks';
import { AuthLayout } from '../layouts';
import type { LoginCommand } from '../types';

export const AuthLoginView = () => {
  const router = useRouter();
  const { login, state } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<LoginCommand>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (command: LoginCommand) => {
    try {
      await login(command);
      await router.push('/');
    } catch {
      // El mensaje ya queda en AuthStore.lastError para la UI.
    }
  };

  return (
    <AuthLayout
      title='Ingresa a tu cuenta Müpütun.'
      subtitle='Accede al flujo de compra y prepara solicitudes para equipos X5, RTK, PPK, NTRIP, SurPad o accesorios de campo.'
    >
      <form className='space-y-5' onSubmit={ handleSubmit(onSubmit) }>
        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='customer-email'>
            Correo electrónico
          </label>
          <input
            id='customer-email'
            type='email'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='cliente@empresa.cl'
            { ...register('email', {
              required: 'Ingresa tu correo.',
            }) }
          />
          { errors.email?.message && <p className='mt-2 text-sm text-red-600'>{ errors.email.message }</p> }
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='customer-password'>
            Contraseña
          </label>
          <div className='relative mt-2'>
            <input
              id='customer-password'
              type={ showPassword ? 'text' : 'password' }
              className='h-14 w-full rounded-full bg-white/58 px-5 pr-14 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
              placeholder='••••••••'
              { ...register('password', {
                minLength: {
                  message: 'La contraseña debe tener al menos 6 caracteres.',
                  value: 6,
                },
                required: 'Ingresa tu contraseña.',
              }) }
            />
            <button
              type='button'
              aria-label={ showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña' }
              onClick={ () => setShowPassword((current) => !current) }
              className='absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/70 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100/80'
            >
              { showPassword ? <IoEyeOffOutline size={ 20 } /> : <IoEyeOutline size={ 20 } /> }
            </button>
          </div>
          { errors.password?.message && <p className='mt-2 text-sm text-red-600'>{ errors.password.message }</p> }
        </div>

        { state.lastError && <p className='text-center text-sm font-semibold text-red-600'>{ state.lastError }</p> }

        <MupuButton
          className='w-full'
          iconLeft={ <IoPersonOutline size={ 18 } /> }
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          type='submit'
          variant='accent'
        >
          { isSubmitting ? 'Ingresando...' : 'Ingresar' }
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
