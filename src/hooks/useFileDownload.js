// React
import { useCallback } from 'react';


export const useFileDownload = () => {
  const handleDownload = useCallback( ( fileName = '' ) => {
    const link = document.createElement( 'a' );
    link.href = `/docs/${ fileName }`;
    link.download = fileName;
    link.click();
    link.remove();
  }, []);

  return {
    handleDownload
  }
}
