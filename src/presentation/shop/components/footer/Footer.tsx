// Components
import {
  FooterAbout,
  FooterContactUs,
  FooterCopyright,
  MupuButton,
  Separator
} from '@/presentation';


export const Footer = () => {
  return (
    <footer className='relative isolate overflow-hidden bg-slate-950 text-white'>
      <Separator className='hidden' />
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(31,190,232,0.20),transparent_34rem),radial-gradient(circle_at_86%_82%,rgba(14,165,233,0.12),transparent_30rem)]' />
      <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent' />

      <div className='px-6 py-16 lg:px-8'>
        <div className='relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.5rem] bg-white/[0.07] px-8 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:grid-cols-[1fr_auto] md:items-center lg:px-10'>
          <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent' />
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-300/[0.04]' />
          <div className='relative'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300'>
              Precisión para tu próximo proyecto
            </p>
            <h2 className='mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-white md:text-5xl'>
              Diseñemos una configuración GNSS para tu operación en terreno.
            </h2>
            <p className='mt-5 max-w-2xl text-sm leading-6 text-slate-300'>
              Revisa equipos, compatibilidad y flujo de trabajo con un equipo técnico que conoce la operación local.
            </p>
          </div>
          <MupuButton href='/contacto' className='relative' variant='accent'>
            Agendar contacto
          </MupuButton>
        </div>
      </div>

      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 pb-16 md:grid-cols-[1.2fr_0.9fr_1.2fr] lg:px-8'>
        <div className='rounded-[2rem] bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl'>
          <FooterAbout
            aboutTitle='Müpütun'
            aboutText='Tecnología GNSS profesional para topografía, agricultura de precisión y operación geoespacial en Chile. Acompañamos a equipos técnicos que necesitan precisión, continuidad y soporte cercano.'
            aboutFooterImage='/logo.png'
            brandPath='/'
            flagImage='https://res.cloudinary.com/newflare/image/upload/v1700866079/demos/muputun/vqcdpmqlyrflsdirkigh.png'
            flagAlt='Bandera Chilena'
            flagW={ 18 }
            flagH={ 13 }
          />
        </div>

        <div className='rounded-[2rem] bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl'>
          <FooterContactUs />
        </div>

        <div className='rounded-[2rem] bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl'>
          <FooterAbout
            aboutTitle='Alianza Mettatec'
            aboutText='Distribuidores oficiales de Mettatec en Chile, acercando soluciones GNSS multibanda, RTK, PPK y NTRIP a proyectos que requieren alto estándar técnico.'
            aboutFooterImage='/logo-metta.png'
            isExternal={ true }
            brandPath='https://mettatec.com/es/'
            imageStyle='mt-2'
            flagImage='https://res.cloudinary.com/newflare/image/upload/v1700866080/demos/muputun/gm4zmtndwwkwq5lvr3vf.png'
            flagAlt='Banderas Chilena y Peruana'
            flagW={ 34 }
            flagH={ 13 }
          />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
