// Next
import Image from 'next/image';
import NextLink from 'next/link';
// React Icons
import {
  IoArrowForwardOutline,
  IoCheckmarkCircleOutline,
  IoGlobeOutline,
  IoLayersOutline,
  IoRadioOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';
// Components
import {
  HomeSlider,
  HomeSliderMobile,
  HomeVideo,
} from '../components';
import { ProductGrid } from "@/presentation/shop/products";
import { MupuButton } from '@/presentation/shared';
import { ShopLayout } from '../layouts';
import { useHomePage } from '../hooks';

export const HomeView = () => {
  const { headerSlides, products } = useHomePage();
  const heroSlide = headerSlides[0];
  const heroProduct = products[0];

  return (
    <ShopLayout
      pageTitle='Inicio'
      pageDesc='Receptores GNSS X5 multibanda para topografía, drones RTK, PPK, NTRIP Local y CORS. Precisión centimétrica, soporte técnico local y compatibilidad GIS en Chile.'
    >
      <HomeSlider slides={ headerSlides } />
      <HomeSliderMobile slides={ headerSlides } />

      <section className='relative isolate overflow-hidden bg-white py-24 lg:py-28'>
        <div className='absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent' />

        <div className='mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8'>
          <div className='max-w-2xl'>
            <p className='mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              GNSS multibanda para terreno real
            </p>
            <h1 className='text-5xl font-semibold tracking-normal text-slate-950 sm:text-6xl'>
              Precisión centimétrica, lista para operar.
            </h1>
            <p className='mt-7 max-w-xl text-lg leading-8 text-slate-600'>
              Equipos X5 con constelaciones GPS, GLONASS, Galileo y BeiDou, flujos RTK/PPK/NTRIP y soporte local para topografía, drones RTK y GIS.
            </p>

            <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
              <MupuButton
                href={ heroSlide?.path ? `/${ heroSlide.path.replace(/^\//, '') }` : '/gnss-x5' }
                iconRight={ <IoArrowForwardOutline size={ 18 } /> }
                variant='accent'
              >
                Ver soluciones
              </MupuButton>
              <MupuButton href='/contacto' variant='glass'>
                Hablar con un especialista
              </MupuButton>
            </div>

            <div className='mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3'>
              {[
                ['RTK', 'Fix en segundos'],
                ['PPK', 'RAW UBX/RINEX para postproceso'],
                ['NTRIP', 'Correcciones a drones y rover'],
              ].map(([value, label]) => (
                <div key={ value } className='group/chip relative overflow-hidden rounded-[1.7rem] bg-white/62 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_16px_44px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/78 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_20px_56px_rgba(8,145,178,0.12)]'>
                  <div className='absolute -right-5 -top-6 h-16 w-16 rounded-full bg-cyan-300/18 blur-xl transition group-hover/chip:bg-cyan-300/28' />
                  <div className='relative flex items-start gap-3'>
                    <span className='mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.65)]' />
                    <div>
                      <p className='text-2xl font-semibold text-slate-950'>{ value }</p>
                      <p className='mt-1 text-xs leading-5 text-slate-500'>{ label }</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='relative min-h-[520px] lg:min-h-[620px]'>
            <div className='absolute inset-0 overflow-hidden rounded-[3rem] shadow-[0_34px_110px_rgba(8,145,178,0.16)]'>
              <Image
                src='/images/product-card-x5rt-bg.png'
                alt=''
                fill
                sizes='(min-width: 1024px) 50vw, 100vw'
                className='h-full w-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-br from-white/32 via-white/8 to-white/38' />
              <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent' />
            </div>

            <NextLink
              href={ heroSlide?.path ? `/${ heroSlide.path.replace(/^\//, '') }` : '/gnss-x5' }
              className='absolute inset-x-5 bottom-24 top-10 flex items-center justify-center overflow-hidden rounded-[2.5rem]'
              aria-label={ `Ver ${ heroProduct?.name ?? heroSlide?.title }` }
            >
              <div className='absolute bottom-16 left-1/2 h-20 w-4/5 -translate-x-1/2 rounded-full bg-slate-900/12 blur-2xl' />
              <Image
                src='/images/product-card-x5rt-product.png'
                alt={ heroProduct?.name ?? heroSlide?.title ?? 'Receptor GNSS X5' }
                className='relative z-10 h-full w-full object-contain px-2 drop-shadow-2xl transition duration-700 hover:scale-[1.04]'
                width={ 900 }
                height={ 720 }
                priority
              />
            </NextLink>

            <div className='absolute -bottom-5 left-4 right-4 z-20 rounded-[2rem] bg-white/50 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_26px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl sm:left-auto sm:right-[-1.5rem] sm:bottom-4 sm:w-80 lg:right-[-2.5rem]'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-slate-500'>Destacado</p>
              <p className='mt-2 text-lg font-semibold text-slate-950'>{ heroProduct?.name ?? heroSlide?.title }</p>
              <p className='mt-1 text-sm leading-6 text-slate-600'>Base, rover, multibanda y listo para trabajo profesional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-slate-950 py-20 text-white'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(31,190,232,0.22),transparent_34rem),radial-gradient(circle_at_82%_90%,rgba(14,165,233,0.14),transparent_28rem)]' />
        <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent' />
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 lg:px-8'>
          {[
            [IoShieldCheckmarkOutline, 'Medición crítica', 'RTK, PPK y NTRIP para topografía, control de obra y georreferenciación centimétrica.'],
            [IoRadioOutline, 'Flujos conectados', 'Base, rover, CORS, radio LoRa 433/915 MHz y NTRIP Local para drones RTK.'],
            [IoGlobeOutline, 'Soporte cercano', 'Configuración de SurPad, SW Maps, NMEA, RTCM3, RINEX y operación de campo.'],
          ].map(([Icon, title, description]) => {
            const FeatureIcon = Icon as typeof IoShieldCheckmarkOutline;

            return (
              <div key={ title as string } className='rounded-[2rem] bg-white/[0.07] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl'>
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.08] text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'>
                  <FeatureIcon size={ 28 } />
                </div>
                <h2 className='mt-5 text-xl font-semibold'>{ title as string }</h2>
                <p className='mt-3 text-sm leading-6 text-slate-300'>{ description as string }</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-white py-24'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_8%,rgba(31,190,232,0.10),transparent_28rem)]' />
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mb-12 grid gap-8 rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:grid-cols-[0.8fr_1fr] md:items-end lg:p-10'>
            <div>
              <p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
                Operación en terreno
              </p>
              <h2 className='text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
                Equipos compactos para registrar, corregir y entregar datos confiables.
              </h2>
            </div>
            <p className='text-base leading-8 text-slate-600'>
              Desde una base fija hasta un rover conectado por Bluetooth, WiFi o USB, el ecosistema X5 trabaja con registros RAW, NMEA, RTCM3 y flujos GIS para días de medición exigentes.
            </p>
          </div>
          <HomeVideo />
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-slate-50 py-24'>
        <Image
          src='/images/product-card-x5rt-bg.png'
          alt=''
          fill
          sizes='100vw'
          className='absolute inset-0 -z-10 h-full w-full object-cover opacity-35'
        />
        <div className='absolute inset-0 -z-10 bg-white/62' />
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {[
              ['Topografía', 'RTK/PPK/NTRIP con precisión centimétrica y base-rover.'],
              ['Drones RTK', 'NTRIP Local para DJI Enterprise, Wingtra, eBee y Autel.'],
              ['GIS móvil', 'NMEA por Bluetooth/WiFi para SurPad, SW Maps y Android/iOS.'],
              ['Base y CORS', 'Correcciones estables para zonas efectivas de trabajo.'],
            ].map(([title, description]) => (
              <article key={ title } className='rounded-[2rem] bg-white/42 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/48 text-cyan-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur'>
                  <IoCheckmarkCircleOutline size={ 26 } />
                </div>
                <h3 className='mt-5 text-lg font-semibold text-slate-950'>{ title }</h3>
                <p className='mt-3 text-sm leading-6 text-slate-600'>{ description }</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='relative mx-auto max-w-7xl px-6 py-24 lg:px-8'>
        <div className='mb-12 grid gap-8 rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:grid-cols-[0.9fr_1fr] md:items-end lg:p-10'>
          <div>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
              Catálogo X5
            </p>
            <h2 className='text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl'>
              Elige el formato adecuado para tu equipo de campo.
            </h2>
          </div>
          <div className='flex items-end gap-4'>
            <IoLayersOutline className='hidden text-cyan-600 md:block' size={ 42 } />
            <p className='max-w-xl text-base leading-8 text-slate-600'>
              Compara X5RT con IMU, X5R, X5 Mobile, kits PPK para drones, radio LoRa, CORS y accesorios para montar un flujo completo de captura GNSS.
            </p>
          </div>
        </div>
        <ProductGrid products={ products } />
      </section>
    </ShopLayout>
  );
}
