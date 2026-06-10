import Image from 'next/image';
import type { ProductImage } from '@/core';
import { Slider } from '@/presentation/shared';

type ProductMobileSlideshowProps = {
  images: ProductImage[];
  title: string;
  className?: string;
};

const slideBackground = '/images/product-card-x5rt-bg.png';
const fallbackProduct = '/images/product-card-x5rt-product.png';

const getForegroundImage = (image: ProductImage) => (
  image.url.toLowerCase().includes('.png') ? image.url : fallbackProduct
);

export const ProductMobileSlideshow = ({
  images,
  title,
  className
}: ProductMobileSlideshowProps) => {
  return (
    <Slider
      items={images}
      getKey={(image) => image.url}
      ariaLabel={`Imágenes de ${title}`}
      autoplayDelay={9000}
      className={className}
      viewportClassName="h-[400px] rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]"
      renderSlide={(image, index) => (
        <div className='relative h-full w-full overflow-hidden'>
          <Image
            src={ slideBackground }
            alt=''
            fill
            sizes='100vw'
            className='h-full w-full object-cover'
            priority={ index === 0 }
          />
          <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.24)_100%)]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/64 via-white/24 to-transparent' />
          <div className='absolute bottom-10 left-1/2 h-14 w-4/5 -translate-x-1/2 rounded-full bg-slate-900/14 blur-2xl' />

          <Image
            width={700}
            height={700}
            src={ getForegroundImage(image) }
            alt={title}
            className='absolute inset-0 z-10 m-auto h-[86%] w-[86%] object-contain px-3 drop-shadow-[0_24px_44px_rgba(15,23,42,0.15)]'
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.88) 78%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.88) 78%, transparent 100%)',
            }}
            priority={ index === 0 }
          />
        </div>
      )}
    />
  );
}
