// Components
import {
  ProductDetailTable,
  ProductDocs,
  ProductMainAdv,
  ProductSlideshow,
  ProductMobileSlideshow,
  ProductToContactBtn
} from '../../components';
// Layouts
import { ShopLayout } from '../../layouts';
// Utils
import { currencyFormat } from '@/utils';


export const ProductView = ({ product, handleDownload }) => {
  return (
    <ShopLayout
      pageTitle={ product.name }
    >
      <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 pt-10'>
        {/*SlideShow*/}
        <div className='col-span-1 md:col-span-2'>
          {/*Mobile Slideshow*/}
          <ProductMobileSlideshow
            title={ product.name }
            images={ product.imgs }
            className='block md:hidden'
          />

          {/*Desktop Slideshow*/}
          <ProductSlideshow
            title={ product.name }
            images={ product.imgs }
            className='hidden md:block'
          />
        </div>
        {/*Details*/}
        <div className='col-span-1 px-5'>
          <h1 className={ `antialiased font-bold text-xl mb-2` }>
            { product.name }
          </h1>

          {
            product.price > 0 && 
              <p className='text-3xl mb-5 text-mupu'>
                ${ currencyFormat( product.price ) }
              </p>
          }

          <ProductToContactBtn product={ product } />

          <h3 className='font-bold text-mupu my-3'>
            * Entrega dependerá del stock disponible y región a la que pertenece
          </h3>

          <h3 className='font-bold text-sm'>Descripción</h3>
          <p className='font-light'>
            { product.desc }
          </p>
        </div>


        <div className='md:mx-0 mx-2 md:w-[1080px] mt-auto pt-20'>
          {/*Main Adv*/}
          <ProductMainAdv mainAdv={ product.mainAdv } />

          {/*Tech Specs*/}
          <div className='md:w-[900px] mt-20 mx-auto'>
            <h2 className='font-bold text-2xl'>Especificaciones Técnicas</h2>

            <div className='overflow-x-auto mx-2 md:mx-auto'>
              <ProductDetailTable
                techSpecs={ product.techSpecs }
              />
            </div>
          </div>

          <div className='mt-20'>
            <ProductDocs
              name={ product.name }
              doc={ product.doc } 
              handleDownload={ handleDownload }
            />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
