// React
import { useCallback } from 'react';


export type FileDownloadHandler = (fileName: string) => void;

export const useFileDownload = () => {
  const handleDownload: FileDownloadHandler = useCallback( ( fileName ) => {
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
