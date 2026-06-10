type HomeVideoItemProps = {
  source?: string;
  title: string;
  description: string;
  variant?: 'featured' | 'compact';
};

export const HomeVideoItem = ({
  source = '',
  title,
  description,
  variant = 'compact',
}: HomeVideoItemProps) => {
  const isFeatured = variant === 'featured';

  return (
    <article className='group relative overflow-hidden rounded-[2.5rem] bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.52),0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white/26 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_34px_100px_rgba(8,145,178,0.16)]'>
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/24 via-transparent to-white/10' />
      <div className='relative overflow-hidden rounded-[2.5rem] bg-slate-950'>
        <video
          controls
          playsInline
          muted
          preload="metadata"
          className={`${ isFeatured ? 'aspect-[16/11] lg:aspect-[16/12]' : 'aspect-[16/11] lg:aspect-[16/10]' } w-full object-cover opacity-95 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100`}
        >
          <source src={source} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/74 via-slate-950/18 to-transparent' />
      </div>

      <div className={`${ isFeatured ? 'left-5 right-5 bottom-5 p-6' : 'left-4 right-4 bottom-4 p-5' } absolute z-10 rounded-[1.75rem] bg-white/44 shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_18px_56px_rgba(15,23,42,0.16)] backdrop-blur-2xl`}>
        <p className='mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700'>
          En terreno
        </p>
        <h3 className={`${ isFeatured ? 'text-2xl' : 'text-lg' } font-semibold leading-tight text-slate-950`}>{ title }</h3>
        <p className='mt-2 text-sm leading-6 text-slate-600'>{ description }</p>
      </div>
    </article>
  );
};
