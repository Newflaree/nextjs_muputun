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

    push( `/buscar/${ searchTerm }` );
  }

  return {
    setSearchTerm,
    isSearchVisible,
    setIsSearchVisible,
    onSearchTerm
  }
}
