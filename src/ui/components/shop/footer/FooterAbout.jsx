// Next
import Image from 'next/image';
import NextLink from 'next/link';


export const FooterAbout = ({
  aboutTitle = '',
  aboutText = '',
  aboutFooterImage = '',
  brandPath= '',
  imageStyle = '',
  isExternal = false,
  flagAlt = '',
  flagImage = '',
  flagW = 0,
  flagH = 0
}) => {
  return (
    <div className={`mb-5 mx-4`}>
      <h2 className={ `text-xl mb-5` }>
        { aboutTitle }
      </h2>
      
      <div className='w-full mb-4'>
        <p className='text-xs' >
          { aboutText }
        </p>

        <Image
          src={ flagImage }
          alt={ flagAlt }
          className='m-auto mt-2'
          width={ flagW }
          height={ flagH }
        />
      </div>

      <NextLink
        href={ brandPath }
        target={ isExternal ? '_blank' : '' }
      >
        <Image
          src={ aboutFooterImage }
          alt='mupütun'
          className={`sm:p-0 m-auto ${ imageStyle } pt-4 cursor-pointer`}
          onClick={ () => { console.log( 'Hola' ) } }
          width={ 125 }
          height={ 90 }
        />
      </NextLink>
    </div>
  );
}
