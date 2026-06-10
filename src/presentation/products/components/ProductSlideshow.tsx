import Image from 'next/image';
import type { ProductImage } from '@/core';
import { Slider } from '@/presentation/shared';

type ProductSlideshowProps = {
  images: ProductImage[];
  title: string;
  className?: string;
};

const slideBackground = '/images/product-card-x5rt-bg.png';
const fallbackProduct = '/images/product-card-x5rt-product.png';

const getForegroundImage = (image: ProductImage) => (
  image.url.toLowerCase().includes('.png') ? image.url : fallbackProduct
);

export const ProductSlideshow = ({
  images,
  title,
  className
}: ProductSlideshowProps) => {
  return (
    <Slider
      items={images}
      getKey={(image) => image.name}
      ariaLabel={`Imágenes de ${title}`}
      autoplayDelay={9000}
      className={className}
      viewportClassName="h-[620px] rounded-[2.75rem] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.12)]"
      renderSlide={(image, index) => (
        <div className='relative h-full w-full overflow-hidden'>
          <Image
            src={ slideBackground }
            alt=''
            fill
            sizes='(min-width: 1280px) 820px, 100vw'
            className='h-full w-full object-cover'
            priority={ index === 0 }
          />
          <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.24)_100%)]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/62 via-white/22 to-transparent' />
          <div className='absolute bottom-12 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-slate-900/14 blur-3xl' />

          <Image
            width={1400}
            height={1122}
            src={ getForegroundImage(image) }
            alt={title}
            className='absolute inset-0 z-10 m-auto h-[88%] w-[88%] object-contain px-4 drop-shadow-[0_34px_58px_rgba(15,23,42,0.16)] transition duration-700 lg:h-[92%] lg:w-[92%] lg:px-8'
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.88) 78%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 62%, rgba(0, 0, 0, 0.88) 78%, transparent 100%)',
            }}
            priority={ index === 0 }
          />
        </div>
      )}
      renderThumbnail={(image) => (
        <div className='relative h-24 w-full overflow-hidden bg-white'>
          <Image
            src={ slideBackground }
            alt=''
            fill
            sizes='160px'
            className='h-full w-full object-cover'
          />
          <Image
            width={300}
            height={300}
            src={ getForegroundImage(image) }
            alt={title}
            className='relative z-10 h-full w-full object-contain p-2'
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 58%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse at center, black 58%, transparent 100%)',
            }}
          />
        </div>
      )}
      thumbnailClassName="grid-cols-5"
    />
  );
}
