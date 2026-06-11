import Image from "next/image";

type BlogSmallImageProps = {
  source?: string;
  alt?: string;
  isShort?: boolean;
  isBanner?: boolean;
};

export const BlogSmallImage = ({
  source = '',
  alt = '',
  isShort = false,
  isBanner = false
}: BlogSmallImageProps) => {
  return (
    <figure className={`my-10 ${ isShort ? 'mx-auto max-w-xs' : 'mx-auto max-w-2xl' }`}>
      <div className={`relative overflow-hidden rounded-[2rem] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl ${ isShort ? 'aspect-[9/16]' : isBanner ? 'aspect-[16/9]' : 'aspect-[4/3]' }`}>
        <Image
          src={ source }
          alt={ alt }
          fill
          sizes={ isShort ? '(min-width: 768px) 320px, 85vw' : '(min-width: 768px) 640px, 90vw' }
          className='h-full w-full object-cover'
        />
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,transparent_44%,rgba(255,255,255,0.10)_100%)]' />
      </div>
    </figure>
  );
};
