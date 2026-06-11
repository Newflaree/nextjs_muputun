// Components
import { MupuButton } from '@/presentation/shared';
import { Separator } from '../separator';
import { FooterAbout } from './FooterAbout';
import { FooterContactUs } from './FooterContactUs';
import { FooterCopyright } from './FooterCopyright';


export const Footer = () => {
  return (
    <footer className='relative isolate overflow-hidden bg-slate-950 text-white'>
      <Separator className='hidden' />
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(31,190,232,0.18),transparent_34rem),radial-gradient(circle_at_86%_82%,rgba(14,165,233,0.10),transparent_30rem),linear-gradient(180deg,#020617_0%,#07111f_100%)]' />
      <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent' />

      <div className='px-6 py-14 lg:px-8'>
        <div className='relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] bg-white/[0.07] px-7 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_30px_100px_rgba(0,0,0,0.24)] backdrop-blur-2xl md:grid-cols-[1fr_auto] md:items-center lg:px-10'>
          <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent' />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.04]' />
          <div className='relative'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300'>
              Configuración GNSS para tu próximo proyecto
            </p>
            <h2 className='mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-white md:text-5xl'>
              Aterricemos el flujo GNSS que necesitas en terreno.
            </h2>
            <p className='mt-5 max-w-2xl text-sm leading-6 text-slate-300'>
              Revisamos precisión requerida, zona de trabajo, base/rover, CORS, drone RTK, SurPad y formatos de datos antes de recomendar equipo.
            </p>
          </div>
          <MupuButton href='/contacto' className='relative' variant='accent'>
            Agendar contacto
          </MupuButton>
        </div>
      </div>

      <div className='px-6 pb-14 lg:px-8'>
        <div className='relative mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-[2.5rem] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_26px_86px_rgba(0,0,0,0.20)] backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr_1.1fr]'>
          <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent' />

          <div className='p-7 md:p-8'>
            <FooterAbout
              aboutTitle='Müpütun'
              aboutText='Especialistas en soluciones GNSS X5 para topografía, drones RTK, GIS y operación geoespacial en Chile. Aterrizamos RTK, PPK, NTRIP, CORS y accesorios a flujos reales de campo.'
              aboutFooterImage='/logo-muputun-store.png'
              brandPath='/'
              flagImage='https://res.cloudinary.com/newflare/image/upload/v1700866079/demos/muputun/vqcdpmqlyrflsdirkigh.png'
              flagAlt='Bandera Chilena'
              flagW={ 18 }
              flagH={ 13 }
            />
          </div>

          <div className='border-y border-white/[0.08] p-7 md:border-x md:border-y-0 md:p-8'>
            <FooterContactUs />
          </div>

          <div className='p-7 md:p-8'>
            <FooterAbout
              aboutTitle='Alianza Mettatec'
              aboutText='Partner Mettatec para receptores GNSS multibanda, antenas HeliX5, radio LoRa, CORS y software de campo orientado a precisión centimétrica.'
              aboutFooterImage='/logo-metta.png'
              isExternal={ true }
              brandPath='https://mettatec.com/es/'
              imageStyle='max-w-[8.25rem]'
              flagImage='https://res.cloudinary.com/newflare/image/upload/v1700866080/demos/muputun/gm4zmtndwwkwq5lvr3vf.png'
              flagAlt='Banderas Chilena y Peruana'
              flagW={ 34 }
              flagH={ 13 }
            />
          </div>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
