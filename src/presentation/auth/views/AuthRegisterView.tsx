import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IoArrowForwardOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { useAuth } from '../hooks';
import { AuthLayout } from '../layouts';
import type { RegisterCommand } from '../types';

type RegisterFormValues = RegisterCommand & {
  passwordRepeat: string;
};

export const AuthRegisterView = () => {
  const router = useRouter();
  const { register: registerUser, state } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const {
    formState: { errors, isSubmitting },
    getValues,
    handleSubmit,
    register,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  });

  const onSubmit = async (formValues: RegisterFormValues) => {
    try {
      await registerUser({
        displayName: formValues.displayName,
        email: formValues.email,
        password: formValues.password,
      });
      await router.push('/');
    } catch {
      // El mensaje ya queda en AuthStore.lastError para la UI.
    }
  };

  return (
    <AuthLayout
      title='Crea tu cuenta para cotizar mejor.'
      subtitle='Guarda tus datos y deja preparadas solicitudes para receptores X5, kits PPK, radio LoRa, CORS o integración con drones RTK.'
    >
      <form className='space-y-5' onSubmit={ handleSubmit(onSubmit) }>
        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-name'>
            Nombre
          </label>
          <input
            id='register-name'
            type='text'
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='Nombre y apellido'
            { ...register('displayName', {
              required: 'Ingresa tu nombre.',
            }) }
          />
          { errors.displayName?.message && <p className='mt-2 text-sm text-red-600'>{ errors.displayName.message }</p> }
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-email'>
            Correo electrónico
          </label>
          <input
            id='register-email'
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
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-password'>
            Contraseña
          </label>
          <div className='relative mt-2'>
            <input
              id='register-password'
              type={ showPassword ? 'text' : 'password' }
              className='h-14 w-full rounded-full bg-white/58 px-5 pr-14 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
              placeholder='••••••••'
              { ...register('password', {
                minLength: {
                  message: 'La contraseña debe tener al menos 6 caracteres.',
                  value: 6,
                },
                required: 'Ingresa una contraseña.',
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

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='register-password-repeat'>
            Repetir contraseña
          </label>
          <div className='relative mt-2'>
            <input
              id='register-password-repeat'
              type={ showPasswordRepeat ? 'text' : 'password' }
              className='h-14 w-full rounded-full bg-white/58 px-5 pr-14 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
              placeholder='••••••••'
              { ...register('passwordRepeat', {
                required: 'Repite la contraseña.',
                validate: (value) => value === getValues('password') || 'Las contraseñas no coinciden.',
              }) }
            />
            <button
              type='button'
              aria-label={ showPasswordRepeat ? 'Ocultar contraseña repetida' : 'Mostrar contraseña repetida' }
              onClick={ () => setShowPasswordRepeat((current) => !current) }
              className='absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/70 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100/80'
            >
              { showPasswordRepeat ? <IoEyeOffOutline size={ 20 } /> : <IoEyeOutline size={ 20 } /> }
            </button>
          </div>
          { errors.passwordRepeat?.message && <p className='mt-2 text-sm text-red-600'>{ errors.passwordRepeat.message }</p> }
        </div>

        { state.lastError && <p className='text-center text-sm font-semibold text-red-600'>{ state.lastError }</p> }

        <MupuButton
          className='w-full'
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          type='submit'
          variant='accent'
        >
          { isSubmitting ? 'Creando cuenta...' : 'Crear cuenta' }
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
