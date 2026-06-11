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
    <div className='flex h-full flex-col items-center text-center md:items-start md:text-left'>
      <h2 className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300'>
        { aboutTitle }
      </h2>
      
      <div className='flex flex-1 flex-col items-center md:items-start'>
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
        className='mt-7 inline-flex h-14 max-w-[12rem] items-center justify-center rounded-full bg-white/[0.07] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_34px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition hover:bg-white/[0.12]'
      >
        <Image
          src={ aboutFooterImage }
          alt='mupütun'
          className={`h-auto max-h-8 w-auto max-w-[9rem] object-contain opacity-95 transition hover:opacity-100 ${ imageStyle }`}
          width={ 180 }
          height={ 72 }
        />
      </NextLink>
    </div>
  );
}
