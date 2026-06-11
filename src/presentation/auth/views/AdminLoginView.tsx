import {
  type FormEvent,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import { useAuth } from '../hooks';
import { AuthLayout } from '../layouts';

export const AdminLoginView = () => {
  const router = useRouter();
  const { login, state } = useAuth();
  const [email, setEmail] = useState('demo@muputun.cl');
  const [password, setPassword] = useState('Muputun2026');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login({ email, password });
      await router.push('/admin/home');
    } catch {
      // El mensaje ya queda en AuthStore.lastError para la UI.
    }
  };

  return (
    <AuthLayout
      eyebrow='Administración'
      title='Administra el catálogo GNSS.'
      subtitle='Acceso interno para ordenar productos X5, fichas técnicas, usuarios, solicitudes y comunicaciones comerciales del nuevo store.'
    >
      <form className='space-y-5' onSubmit={ onSubmit }>
        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='admin-email'>
            Correo
          </label>
          <input
            id='admin-email'
            type='email'
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='admin@muputun.cl'
          />
        </div>

        <div>
          <label className='text-sm font-semibold text-slate-700' htmlFor='admin-password'>
            Contraseña
          </label>
          <input
            id='admin-password'
            type='password'
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
            className='mt-2 h-14 w-full rounded-full bg-white/58 px-5 text-sm text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_36px_rgba(15,23,42,0.08)] outline-none backdrop-blur-2xl transition placeholder:text-slate-400 focus:bg-white/78 focus:ring-4 focus:ring-cyan-100/80'
            placeholder='••••••••'
          />
        </div>

        {state.lastError && (
          <p className='rounded-2xl bg-white/58 px-4 py-3 text-sm font-medium text-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl'>
            { state.lastError }
          </p>
        )}

        <MupuButton
          className='w-full'
          disabled={ state.status === 'loading' }
          iconRight={ <IoArrowForwardOutline size={ 18 } /> }
          type='submit'
          variant='accent'
        >
          { state.status === 'loading' ? 'Ingresando...' : 'Ingresar' }
        </MupuButton>
      </form>
    </AuthLayout>
  );
};
