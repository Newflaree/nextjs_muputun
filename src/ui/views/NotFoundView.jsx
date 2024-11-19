// Next
import NextLink from 'next/link';
// Layouts
import { ShopLayout } from '../layouts';


export const NotFoundView = () => {
  return (
    <ShopLayout pageTitle='404'>
      <div
        className={ `
          flex
          flex-col
          h-[calc(100vh-200px)]
          items-center
          justify-center
          sm:flex-row
        `}
      >
        <h2 className="text-8xl font-light text-mupu">
          404 <span className='hidden sm:inline-block'>|</span>
        </h2>

        <h3 className="ml-2 text-2xl text-center mt-4 sm:mt-0">
          No encontramos ninguna página aquí. Puedes volver al <NextLink href='/' className='text-mupu hover:text-cyan-600'>Inicio</NextLink>
        </h3>
      </div>
    </ShopLayout>
  );
}
