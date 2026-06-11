// Components
import Image from 'next/image';
import {
  IoCheckmarkCircleOutline,
  IoCubeOutline,
  IoLayersOutline,
  IoRadioOutline,
} from 'react-icons/io5';
import {
  ProductGrid,
} from '../components';
import { ShopLayout } from '@/presentation/shop';
import { useCategoryProducts } from '../hooks';

type CategoryViewProps = {
  productCategory: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
};

export const CategoryView = ({
  productCategory,
  category,
  title,
  subtitle,
  description
}: CategoryViewProps) => {
  const { products } = useCategoryProducts({
    productCategory,
    category,
    title,
    subtitle,
    description,
  });
  const categoryHighlights = [
    [IoRadioOutline, 'Centimétrica', 'RTK, PPK y NTRIP con flujos RAW UBX/RINEX, NMEA y RTCM3.'],
    [IoLayersOutline, 'Integración', 'Bluetooth, WiFi, USB, SurPad, SW Maps y drones RTK según configuración.'],
    [IoCheckmarkCircleOutline, 'Continuidad', 'Soporte local para base-rover, CORS, LoRa 433/915 MHz y operación en terreno.'],
  ];

  return (
    <ShopLayout
      pageTitle={ category }
      pageDesc={ description }
    >
      <section className='relative isolate overflow-hidden bg-white py-24 lg:py-28'>
        <Image
          src='/images/product-card-x5rt-bg.png'
          alt=''
          fill
          sizes='100vw'
          className='absolute inset-0 -z-10 h-full w-full object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 -z-10 bg-white/72' />

        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch'>
            <div className='rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-2xl lg:p-10'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                { category }
              </p>
              <h1 className='mt-5 text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl'>
                { title }
              </h1>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
                { description }
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1'>
              {categoryHighlights.map(([Icon, highlightTitle, highlightText]) => {
                const HighlightIcon = Icon as typeof IoRadioOutline;

                return (
                  <article key={ highlightTitle as string } className='rounded-[2rem] bg-white/46 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_20px_64px_rgba(15,23,42,0.09)] backdrop-blur-2xl'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/12 text-cyan-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                      <HighlightIcon size={ 22 } />
                    </div>
                    <h2 className='mt-4 text-lg font-semibold text-slate-950'>
                      { highlightTitle as string }
                    </h2>
                    <p className='mt-2 text-sm leading-6 text-slate-600'>
                      { highlightText as string }
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='relative bg-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mb-12 grid gap-8 rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:grid-cols-[0.9fr_1fr] md:items-end lg:p-10'>
            <div>
              <p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                Catálogo
              </p>
              <h2 className='text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
                { subtitle }
              </h2>
            </div>

            <div className='flex items-end gap-4'>
              <IoCubeOutline className='hidden text-cyan-600 md:block' size={ 42 } />
              <p className='max-w-xl text-base leading-8 text-slate-600'>
                Compara receptores, kits PPK, radio LoRa, CORS y accesorios. Te ayudamos a elegir antena, rover/base, software y montaje según precisión, autonomía y flujo de datos.
              </p>
            </div>
          </div>

          <ProductGrid products={ products } />
        </div>
      </section>
    </ShopLayout>
  );
}
