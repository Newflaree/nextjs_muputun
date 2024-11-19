// React Icons
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5';


export const FooterContactUs = () => {
  return (
    <div className='mb-5 mx-4'>
      <h2 className={ `text-xl mb-5` }>Contáctanos</h2>

      <div className='flex flex-col'>
        <span className={`cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu`}>
          info@muputun.cl
        </span>
        <span className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'>+56 9 87754953</span>
      </div>
      <span></span>

      <h2 className={ `text-xl my-5` }>Contáctanos</h2>

      <div className='w-[200px] m-auto'>
        <div className='grid grid-cols-4 gap-10'>
          <a
            href='https://www.facebook.com/people/M%C3%BCp%C3%BCtun/61552329926982/?mibextid=9R9pXO'
            target='_blank'
          >
            <IoLogoFacebook
              size={ 30 }
              className='mb-2 hover:text-cyan-600 transition-all text-mupu'
           />
          </a>

          <a
            href='https://www.instagram.com/muputun/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
            target='_blank'
          >
            <IoLogoInstagram
              size={ 30 }
              className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'
            />
          </a>

          <a
            href='https://www.linkedin.com/in/m%C3%BCp%C3%BCtun-tecnolog%C3%ADas-0728a629b/'
            target='_blank'
          >
            <IoLogoLinkedin
              size={ 30 }
              className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'
            />
          </a>

          <a
            href='https://www.youtube.com/@MuputunTecnologias'
            target='_blank'
          >
            <IoLogoYoutube
              size={ 30 }
              className='cursor-pointer mb-2 hover:text-cyan-600 transition-all text-mupu'
            />
          </a>
        </div>
      </div>
      <span></span>
    </div>
  );
}
