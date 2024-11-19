// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
// React Icons
import { IoSearchOutline } from 'react-icons/io5';
// Database
import { staticPageMenu } from '@/database';
// Hooks
import { useSearch } from '@/hooks';
// Store
import {
  useUIStore
} from '@/store';


export const TopMenu = () => {
  const {
    isSearchVisible,
    onSearchTerm,
    searchTerm,
    setIsSearchVisible,
    setSearchTerm,
  } = useSearch();
  const openMenu = useUIStore( state => state.openSideMenu );
  const menu = staticPageMenu;

  return (
    <nav
      className={`
        flex
        sm:px-5
        justify-between
        items-center
        w-full
        bg-white
        shadow-lg
        fixed
        z-40
      `}
    >
      <div>
        <NextLink href='/'>
          <Image
            src='/logo.png'
            alt='mupütun'
            className='p-2 sm:p-0'
            width={ 150 }
            height={ 75 }
          />
        </NextLink>
      </div>

      <div className='hidden sm:block'>
        {
          menu.map( ({ id, name, external, path }) => (
            <NextLink
              key={ id }
              href={ path }
              target={ external ? '_blank' : '' }
              className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
            >
              { name }
            </NextLink>
          ))
        }
      </div>

      <div className='flex items-center'>
      {/*
        <NextLink
          href='/buscar/sdfkjsadkfj'
          className='mx-2 hidden sm:flex'
        >
          <IoSearchOutline
            className='w-5 h-5'
          />
        </NextLink>
          */}
        {
          isSearchVisible
            ? (
              <div className="relative fadeIn">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                  autoFocus
                  value={searchTerm}
                  type="text"
                  placeholder="Buscar..."
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />

                <button
                  onClick={() => {
                    onSearchTerm();
                    setIsSearchVisible(false);
                  }}
                  className="absolute right-0 top-0 mt-2 mr-3 text-gray-600 hover:text-black"
                >
                  <IoSearchOutline />
                </button>
              </div>
            )
            : (
              <button
                onClick={() => setIsSearchVisible(true)}
                className="fadeIn text-gray-600 hover:text-black hidden sm:flex"
              >
                  <IoSearchOutline />
              </button>
            )
        }

        <button
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 sm:hidden'
          onClick={ openMenu }
        >
          Menú
        </button>
      </div>
    </nav>
  );
}
