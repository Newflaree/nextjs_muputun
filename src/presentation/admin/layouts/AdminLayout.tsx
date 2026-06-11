import {
  useState,
  type ReactNode,
} from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  IoCheckmarkCircleOutline,
  IoChevronDownOutline,
  IoGridOutline,
  IoLogOutOutline,
  IoMailOutline,
  IoMailOpenOutline,
  IoMegaphoneOutline,
  IoPeopleOutline,
  IoPricetagsOutline,
  IoSettingsOutline,
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
];

const mailingMenuItems = [
  { href: '/admin/mailing/campaigns', icon: IoMegaphoneOutline, label: 'Campañas' },
  { href: '/admin/mailing/accounts', icon: IoSettingsOutline, label: 'Gestión de cuentas' },
  { href: '/admin/mailing/client', icon: IoMailOpenOutline, label: 'Cliente de correos' },
];

type AdminLayoutProps = {
  children: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
};

export const AdminLayout = ({
  children,
  description = 'Maquetación preparada para conectar el panel con servicios reales del store.',
  eyebrow = 'Administración',
  title,
}: AdminLayoutProps) => {
  const router = useRouter();
  const { logout, state } = useAuth();
  const isMailingSectionActive = router.pathname.startsWith('/admin/mailing');
  const [isMailingManuallyOpen, setIsMailingManuallyOpen] = useState(false);
  const isMailingOpen = isMailingSectionActive || isMailingManuallyOpen;

  const handleLogout = async () => {
    logout();
    await router.push('/');
  };

  return (
    <main data-admin-layout='true' className='relative isolate min-h-screen overflow-x-hidden bg-slate-100 text-slate-950 sm:h-screen sm:overflow-hidden'>
      <Image
        src='/images/product-card-x5rt-bg.png'
        alt=''
        fill
        sizes='100vw'
        className='absolute inset-0 -z-10 h-full w-full object-cover opacity-18 grayscale'
        priority
      />
      <div className='absolute inset-0 -z-10 bg-slate-100/84' />
      <div className='absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white/80 to-transparent' />

      <div className='min-h-screen px-4 py-5 sm:grid sm:h-screen sm:min-h-0 sm:grid-cols-[280px_minmax(0,1fr)] sm:gap-6 sm:px-6'>
        <aside className='admin-sidebar rounded-[2rem] bg-white/64 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl'>
          <NextLink href='/' className='inline-flex px-2 py-3'>
            <Image
              src='/logo-muputun-store.png'
              alt='mupütun'
              className='h-10 w-auto'
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
                      : 'bg-white/36 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)] hover:bg-white/78 hover:text-slate-950',
                  ) }
                >
                  <Icon size={ 18 } />
                  { label }
                </NextLink>
              );
            })}

            <div className='space-y-2'>
              <button
                className={ clsx(
                  'flex w-full items-center gap-3 rounded-full px-4 py-3 text-left text-sm font-semibold transition',
                  isMailingSectionActive
                    ? 'bg-slate-950/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_36px_rgba(15,23,42,0.16)]'
                    : 'bg-white/36 text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)] hover:bg-white/78 hover:text-slate-950',
                ) }
                type='button'
                onClick={ () => setIsMailingManuallyOpen((current) => !current) }
                aria-expanded={ isMailingOpen }
              >
                <IoMailOutline size={ 18 } />
                <span className='flex-1'>Mailing</span>
                <IoChevronDownOutline
                  className={ clsx('transition duration-300', isMailingOpen && 'rotate-180') }
                  size={ 16 }
                />
              </button>

              {isMailingOpen && (
                <div className='space-y-2 pl-4'>
                  {mailingMenuItems.map(({ href, icon: Icon, label }) => {
                    const isActive = router.pathname === href || (router.pathname === '/admin/mailing' && href === '/admin/mailing/campaigns');

                    return (
                      <NextLink
                        key={ href }
                        href={ href }
                        className={ clsx(
                          'flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold transition',
                          isActive
                            ? 'bg-cyan-100/88 text-cyan-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'
                            : 'bg-white/28 text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)] hover:bg-white/72 hover:text-slate-950',
                        ) }
                      >
                        <Icon size={ 17 } />
                        { label }
                      </NextLink>
                    );
                  })}
                </div>
              )}
            </div>
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

        <section className='pt-6 sm:min-h-0 sm:overflow-y-auto sm:pt-0 sm:pr-1'>
          <header className='mb-6 rounded-[2rem] bg-white/64 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_24px_80px_rgba(15,23,42,0.09)] backdrop-blur-2xl lg:p-7'>
            <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700'>
                  { eyebrow }
                </p>
                <h1 className='mt-3 text-4xl font-semibold tracking-normal sm:text-5xl'>
                  { title }
                </h1>
                <p className='mt-3 max-w-3xl text-sm leading-6 text-slate-600'>
                  { description }
                </p>
              </div>
              <div className='flex w-fit items-center gap-2 rounded-full bg-emerald-50/86 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl'>
                <IoCheckmarkCircleOutline size={ 18 } />
                Maqueta navegable
              </div>
            </div>
          </header>

          { children }
        </section>
      </div>
    </main>
  );
};
