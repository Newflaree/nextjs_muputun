// Components
import {
  FooterAbout,
  FooterContactUs,
  FooterCopyright,
  Separator
} from '@/ui/components';


export const Footer = () => {
  return (
    <footer className='sm:w-[1080px] m-auto mt-30'>
      <Separator />

      <div
        className={`
          gap-10
          grid
          grid-cols-1
          sm:grid-cols-3
          mb-10
          mx-5
          text-center
        `}
      >
        <FooterAbout
          aboutTitle='Sobre nosotros'
          aboutText='Somos una empresa emergente, con equipo de profesionales de espíritu emprendedor, cuyo objetivo es modernizar la operación de la industria en CHILE, expandiendo el acceso a las nuevas tecnologías, brindando acompañamiento en la implementación de estas a quienes sean parte de este grupo humano.'
          aboutFooterImage='/logo.png'
          brandPath='/'
          flagImage='https://res.cloudinary.com/newflare/image/upload/v1700866079/demos/muputun/vqcdpmqlyrflsdirkigh.png'
          flagAlt='Bandera Chilena'
          flagW={ 18 }
          flagH={ 13 }
        />

        <FooterContactUs />

        <FooterAbout
          aboutTitle='Nuestra alianza'
          aboutText='Distribuidores oficiales de nuestros amigos mettatec en CHILE, pioneros en dar soluciones tecnológicas de punta, a la medida de tus necesidades. convirtiéndose en tu aliado estratégico el cual puede ayudarte a afrontar de mejor manera el presente de tu negocio.'
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

      <FooterCopyright />
    </footer>
  );
}
