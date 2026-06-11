import Image from "next/image";

type BlogImageProps = {
  source?: string;
  alt?: string;
  isShort?: boolean;
  isBanner?: boolean;
};

export const BlogImage = ({
  source = '',
  alt = '',
  isShort = false,
  isBanner = false
}: BlogImageProps) => {
  return (
    <figure className={`my-10 ${ isShort ? 'mx-auto max-w-sm' : 'w-full' }`}>
      <div className={`relative overflow-hidden rounded-[2rem] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl ${ isShort ? 'aspect-[3/4]' : isBanner ? 'aspect-[16/8]' : 'aspect-[16/9]' }`}>
        <Image
          src={ source }
          alt={ alt }
          fill
          sizes={ isShort ? '(min-width: 768px) 360px, 90vw' : '(min-width: 1024px) 820px, 100vw' }
          className='h-full w-full object-cover'
        />
        <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.14)_0%,transparent_42%,rgba(255,255,255,0.10)_100%)]' />
      </div>
    </figure>
  );
};
