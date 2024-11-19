// Next
import NextLink from 'next/link';
// Store
import { useProductStore } from '@/store';


export const ProductToContactBtn = ({ className, product }) => {
  const { setProductName } = useProductStore();

  const handleContactClick = () => {
    setProductName( product.name );
  }

  return (
    <button className='flex flex-col'>
      <NextLink
        href='/contacto'
        className={ `my-2 btn-primary ${ className } w-full` }
        onClick={ handleContactClick }
      >
        Cotizar producto
      </NextLink>
    </button>
  );
}
