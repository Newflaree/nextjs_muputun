// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
// React Icons
import {
  IoMenuOutline,
  IoSearchOutline,
} from 'react-icons/io5';
// Hooks
import { useMenuItems, useSearch } from '@/presentation';
import { MupuButton } from '@/presentation/shared';
// Store
import {
  useUIStore
} from '@/presentation';


export const TopMenu = () => {
  const {
    isSearchVisible,
    onSearchTerm,
    searchTerm,
    setIsSearchVisible,
    setSearchTerm,
  } = useSearch();
  const openMenu = useUIStore( state => state.openSideMenu );
  const { menuItems } = useMenuItems();

  return (
    <nav className='fixed inset-x-0 top-0 z-40 bg-white/35 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl'>
      <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <NextLink href='/' className='flex shrink-0 items-center'>
          <Image
            src='/logo-muputun-store.png'
            alt='mupütun'
            className='h-12 w-auto'
            width={ 260 }
            height={ 92 }
            priority
          />
        </NextLink>

      <div className='hidden items-center gap-1 rounded-full bg-white/35 p-1 shadow-sm backdrop-blur-2xl lg:flex'>
        {
          menuItems.map( ({ id, name, external, path }) => (
            <NextLink
              key={ id }
              href={ path }
              target={ external ? '_blank' : '' }
              rel={ external ? 'noopener noreferrer' : undefined }
              className='rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/80 hover:text-slate-950 hover:shadow-sm'
            >
              { name }
            </NextLink>
          ))
        }
      </div>

      <div className='flex items-center justify-end gap-3'>
        {
          isSearchVisible
            ? (
              <div className="relative fadeIn hidden lg:block">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                  autoFocus
                  value={searchTerm}
                  type="text"
                  placeholder="Buscar..."
                  className="h-10 w-56 rounded-full bg-white/45 px-4 pr-10 text-sm shadow-sm outline-none backdrop-blur-2xl transition placeholder:text-slate-500 focus:bg-white/75 focus:ring-4 focus:ring-cyan-100/70"
                />

                <button
                  onClick={() => {
                    onSearchTerm();
                    setIsSearchVisible(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-950"
                  aria-label='Buscar'
                >
                  <IoSearchOutline />
                </button>
              </div>
            )
            : (
              <button
                onClick={() => setIsSearchVisible(true)}
                className="fadeIn hidden h-10 w-10 items-center justify-center rounded-full bg-white/45 text-slate-700 shadow-sm backdrop-blur-2xl transition hover:bg-white/80 hover:text-slate-950 lg:flex"
                aria-label='Abrir búsqueda'
              >
                  <IoSearchOutline />
              </button>
            )
        }

        <MupuButton
          ariaLabel='Abrir menú'
          className='shrink-0'
          iconLeft={ <IoMenuOutline size={ 20 } /> }
          onClick={ openMenu }
          size='md'
          variant='glass'
        >
          Menú
        </MupuButton>
      </div>
      </div>
    </nav>
  );
}
