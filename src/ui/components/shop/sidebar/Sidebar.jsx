import NextLink from 'next/link';
import clsx from 'clsx';
// React Icons
import {
  IoCloseOutline,
  IoSearchOutline,
} from 'react-icons/io5';
// Database
import { staticPageMenu } from '@/database';
// Hooks
import { useSearch } from '@/hooks';
// Store
import {
  useUIStore,
} from '@/store';


export const Sidebar = () => {
  const {
    isSearchVisible,
    onSearchTerm,
    searchTerm,
    setIsSearchVisible,
    setSearchTerm,
  } = useSearch();
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );

  const searchAndClose = () => {
    onSearchTerm();
    closeMenu();
  }

  const menu = staticPageMenu;

  return (
    <div className='z-50 fixed'>
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
              bg-black
              opacity-30
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
            p-5
            right-0
            top-0
            w-[300px]
            h-screen
            bg-white
            z-20
            shadow-2xl
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
          size={ 50 }
          onClick={ () => closeMenu() }
          className={`
            absolute
            top-5
            right-5
            cursor-pointer
          `}
        />

        <div className='relative mt-14'>
          <IoSearchOutline
            size={ 20 }
            className='absolute top-2 left-2'
          />

          <input
            onChange={ ( e ) => setSearchTerm( e.target.value ) }
          onKeyPress={ ( e ) => e.key === 'Enter' ? searchAndClose() : null }
            value={ searchTerm }
            type='text'
            placeholder='Buscar'
            className={`
              w-full
              bg-gray-50
              rounded
              pl-10
              py-1
              pr-10
              border-b-2
              text-xl
              border-gray-200
              focus:outline-none
              focus:border-cyan-500
              transition-all
            `}
          />
        </div>

        {
          menu.map( ({ id, path, external, name }) => (
            <NextLink
              key={ id }
              href={ path }
              onClick={ closeMenu }
              target={ external ? '_blank' : '' }
              className={`
                flex
                items-center
                mt-5
                p-2
                hover:bg-gray-100 rounded transition-all
              `}
            >
              <span className='ml-3'>{ name }</span>
            </NextLink>
          ))
        }
        {/* List Item */}
      </nav>
    </div>
  );
}
