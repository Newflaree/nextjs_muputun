import NextLink from 'next/link';
import clsx from 'clsx';
// React Icons
import {
  IoCloseOutline,
  IoLockClosedOutline,
  IoSearchOutline,
  IoSpeedometerOutline,
} from 'react-icons/io5';
// Hooks
import { useMenuItems, useSearch } from '@/presentation';
// Store
import {
  useUIStore,
} from '@/presentation';


export const Sidebar = () => {
  const {
    onSearchTerm,
    searchTerm,
    setSearchTerm,
  } = useSearch();
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );
  const { menuItems } = useMenuItems();

  const searchAndClose = () => {
    onSearchTerm();
    closeMenu();
  }

  return (
    <div className='fixed z-50'>
      {/* Background */}
      {
        isSideMenuOpen && (
          <div
            className={`
              fixed
              top-0
              left-0
              w-screen
              h-screen
              z-10
              bg-slate-950/35
            `}
          />
        )
      }

      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className={`
              fade-in
              fixed
              top-0
              left-0
              w-screen
              h-screen
              z-10
              backdrop-filter
              backdrop-blur-sm
            `}
          />
        )
      }

      {/* Sidemenu */}
      <nav
        className={
          clsx(`
            fixed
            p-6
            right-0
            top-0
            w-[min(88vw,380px)]
            h-screen
            bg-white/62
            z-20
            shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_30px_100px_rgba(15,23,42,0.22)]
            backdrop-blur-2xl
            transform
            transition-all
            duration-300
            `,
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >
        <IoCloseOutline
          size={ 34 }
          onClick={ () => closeMenu() }
          className={`
            absolute
            top-6
            right-6
            cursor-pointer
            text-slate-700
            rounded-full
            bg-white/45
            p-1
            shadow-sm
          `}
        />

        <div className='mt-16'>
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'>
            Navegación
          </p>
        </div>

        <div className='relative'>
          <IoSearchOutline
            size={ 20 }
            className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'
          />

          <input
            onChange={ ( e ) => setSearchTerm( e.target.value ) }
            onKeyDown={ ( e ) => e.key === 'Enter' ? searchAndClose() : null }
            value={ searchTerm }
            type='text'
            placeholder='Buscar'
            className={`
              w-full
              bg-white/50
              rounded-full
              pl-12
              py-3
              pr-5
              text-base
              shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_36px_rgba(15,23,42,0.08)]
              backdrop-blur-2xl
              focus:outline-none
              focus:ring-4
              focus:ring-cyan-100
              transition-all
            `}
          />
        </div>

        <div className='mt-8 space-y-2'>
          <NextLink
            href='/auth/login'
            onClick={ closeMenu }
            className={`
              flex
              items-center
              gap-3
              rounded-2xl
              px-4
              py-3
              text-base
              font-semibold
              text-slate-700
              bg-white/34
              shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]
              hover:bg-white/72
              hover:text-slate-950
              transition-all
            `}
          >
            <IoLockClosedOutline size={ 20 } />
            <span>Ingresar</span>
          </NextLink>

          <NextLink
            href='/admin/login'
            onClick={ closeMenu }
            className={`
              flex
              items-center
              gap-3
              rounded-2xl
              px-4
              py-3
              text-base
              font-semibold
              text-white
              bg-slate-950/90
              shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_38px_rgba(15,23,42,0.18)]
              hover:bg-slate-900
              transition-all
            `}
          >
            <IoSpeedometerOutline size={ 20 } />
            <span>Admin</span>
          </NextLink>

          <div className='space-y-2 lg:hidden'>
            {menuItems.map( ({ id, path, external, name }) => (
              <NextLink
                key={ id }
                href={ path }
                onClick={ closeMenu }
                target={ external ? '_blank' : '' }
                rel={ external ? 'noopener noreferrer' : undefined }
                className={`
                  flex
                  items-center
                  rounded-2xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  text-slate-700
                  bg-white/28
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]
                  hover:bg-white/68
                  hover:text-slate-950
                  transition-all
                `}
              >
                <span>{ name }</span>
              </NextLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
