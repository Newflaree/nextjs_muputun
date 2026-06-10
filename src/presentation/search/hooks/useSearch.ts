// React
import { useState } from 'react';
// Next.js
import { useRouter } from 'next/router';


export const useSearch = () => {
  const { push } = useRouter();
  const [ searchTerm, setSearchTerm ] = useState( '' );
  const [ isSearchVisible, setIsSearchVisible ] = useState( false );

  const onSearchTerm = () => {
    if ( searchTerm.trim().length === 0 ) return;

    push( `/buscar/${ encodeURIComponent( searchTerm.trim() ) }` );
  }

  return {
    searchTerm,
    setSearchTerm,
    isSearchVisible,
    setIsSearchVisible,
    onSearchTerm
  }
}
