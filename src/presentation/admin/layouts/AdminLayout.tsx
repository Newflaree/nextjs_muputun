import type { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  IoGridOutline,
  IoLogOutOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoPricetagsOutline,
  IoStorefrontOutline,
} from 'react-icons/io5';
import clsx from 'clsx';
import { MupuButton } from '@/presentation/shared';
import { useAuth } from '@/presentation/auth';

const adminMenuItems = [
  { href: '/admin/home', icon: IoGridOutline, label: 'Resumen' },
  { href: '/admin/products', icon: IoPricetagsOutline, label: 'Productos' },
  { href: '/admin/shop', icon: IoStorefrontOutline, label: 'Tienda' },
  { href: '/admin/users', icon: IoPeopleOutline, label: 'Usuarios' },
  { href: '/admin/mailing', icon: IoMailOutline, label: 'Mailing' },
];

type AdminLayoutProps = {
  children: ReactNode;
  eyebrow?: string;
  title: string;
};

export const AdminLayout = ({
  children,
  eyebrow = 'Administración',
  title,
}: AdminLayoutProps) => {
  const router = useRouter();
  const { logout, state } = useAuth();

  const handleLogout = async () => {
    logout();
    await router.push('/');
  };

  return (
    <main className='relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-950'>
      <Image
        src='/images/product-card-x5rt-bg.png'
        alt=''
        fill
        sizes='100vw'
        className='absolute inset-0 -z-10 h-full w-full object-cover opacity-30'
        priority
      />
      <div className='absolute inset-0 -z-10 bg-white/72' />

      <div className='mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[280px_1fr] lg:px-8'>
        <aside className='rounded-[2.5rem] bg-white/46 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]'>
          <NextLink href='/' className='inline-flex px-2 py-3'>
            <Image
              src='/logo.png'
              alt='mupütun'
              className='h-12 w-auto'
              width={ 180 }
              height={ 90 }
              priority
            />
          </NextLink>

          <div className='mt-8 space-y-2'>
            {adminMenuItems.map(({ href, icon: Icon, label }) => {
              const isActive = router.pathname === href;

              return (
                <NextLink
                  key={ href }
                  href={ href }
                  className={ clsx(
                    'flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition',
                    isActive
                      ? 'bg-slate-950/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_36px_rgba(15,23,42,0.16)]'
                      : 'bg-white/30 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] hover:bg-white/62 hover:text-slate-950',
                  ) }
                >
                  <Icon size={ 18 } />
                  { label }
                </NextLink>
              );
            })}
          </div>

          <div className='mt-8 rounded-[2rem] bg-white/34 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)] backdrop-blur-2xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-500'>
              Sesión
            </p>
            <p className='mt-2 truncate text-sm font-semibold text-slate-950'>
              { state.user?.displayName ?? 'Administrador' }
            </p>
            <p className='mt-1 truncate text-xs text-slate-500'>
              { state.user?.email ?? 'Sin correo' }
            </p>
            <MupuButton
              className='mt-4 w-full'
              iconLeft={ <IoLogOutOutline size={ 18 } /> }
              onClick={ handleLogout }
              size='md'
              variant='glass'
            >
              Salir
            </MupuButton>
          </div>
        </aside>

        <section className='py-2 lg:py-8'>
          <header className='mb-8 rounded-[2.5rem] bg-white/44 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              { eyebrow }
            </p>
            <h1 className='mt-3 text-4xl font-semibold tracking-normal sm:text-5xl'>
              { title }
            </h1>
          </header>

          { children }
        </section>
      </div>
    </main>
  );
};
