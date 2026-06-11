// React Icons
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5';


export const FooterContactUs = () => {
  return (
    <div className='flex h-full flex-col items-center text-center md:items-start md:text-left'>
      <h2 className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300'>Contacto</h2>

      <div className='flex flex-col text-sm'>
        <a
          href='mailto:info@muputun.cl'
          className='mb-2 text-slate-300 transition hover:text-cyan-300'
        >
          info@muputun.cl
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href="https://wa.me/+56987754953"
          className='mb-2 text-slate-300 transition hover:text-cyan-300'
        >
          +56 9 87754953
        </a>
      </div>

      <h2 className='mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300'>Redes</h2>

      <div className='mt-auto'>
        <div className='flex flex-wrap justify-center gap-3 md:justify-start'>
          <a
            href='https://www.facebook.com/people/M%C3%BCp%C3%BCtun/61552329926982/?mibextid=9R9pXO'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-cyan-300'
            aria-label='Facebook'
          >
            <IoLogoFacebook
              size={ 22 }
           />
          </a>

          <a
            href='https://www.instagram.com/muputun/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-cyan-300'
            aria-label='Instagram'
          >
            <IoLogoInstagram
              size={ 22 }
            />
          </a>

          <a
            href='https://www.linkedin.com/in/m%C3%BCp%C3%BCtun-tecnolog%C3%ADas-0728a629b/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-cyan-300'
            aria-label='LinkedIn'
          >
            <IoLogoLinkedin
              size={ 22 }
            />
          </a>

          <a
            href='https://www.youtube.com/@MuputunTecnologias'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-cyan-300'
            aria-label='YouTube'
          >
            <IoLogoYoutube
              size={ 22 }
            />
          </a>
        </div>
      </div>
    </div>
  );
}
