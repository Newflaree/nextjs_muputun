// Next
import Image from 'next/image';
import NextLink from 'next/link';

type FooterAboutProps = {
  aboutTitle?: string;
  aboutText?: string;
  aboutFooterImage?: string;
  brandPath?: string;
  imageStyle?: string;
  isExternal?: boolean;
  flagAlt?: string;
  flagImage?: string;
  flagW?: number;
  flagH?: number;
};

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
}: FooterAboutProps) => {
  return (
    <div>
      <h2 className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300'>
        { aboutTitle }
      </h2>
      
      <div className='mb-6'>
        <p className='max-w-sm text-sm leading-6 text-slate-300'>
          { aboutText }
        </p>

        {flagImage && (
          <Image
            src={ flagImage }
            alt={ flagAlt }
            className='mt-4 opacity-90'
            width={ flagW }
            height={ flagH }
          />
        )}
      </div>

      <NextLink
        href={ brandPath }
        target={ isExternal ? '_blank' : '' }
        rel={ isExternal ? 'noopener noreferrer' : undefined }
        className='inline-flex'
      >
        <Image
          src={ aboutFooterImage }
          alt='mupütun'
          className={`h-auto max-h-16 w-auto rounded-2xl bg-white/80 p-2 opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur transition hover:bg-white/95 hover:opacity-100 ${ imageStyle }`}
          width={ 125 }
          height={ 90 }
        />
      </NextLink>
    </div>
  );
}
