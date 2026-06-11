import Image from 'next/image';
import {
  MupuButton,
  Slider,
} from '@/presentation/shared';
import type { HeaderInfo } from '@/core';

type HomeSliderMobileProps = {
  slides: HeaderInfo[];
};

export const HomeSliderMobile = ({ slides }: HomeSliderMobileProps) => {
  if (slides.length === 0) return null;

  return (
    <Slider
      items={slides}
      getKey={(item) => item.id}
      ariaLabel="Productos destacados"
      autoplayDelay={6000}
      className="sm:hidden"
      viewportClassName="min-h-[calc(100vh-5rem)]"
      renderSlide={(item, _index, isActive) => (
        <div className="relative h-full w-full">
          <Image
            src={item.imgd}
            alt={item.title}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/88 via-slate-950/58 to-cyan-950/80" />

          {item.png && (
            <div className="absolute bottom-24 left-1/2 z-20 flex aspect-square w-[86%] -translate-x-1/2 items-center justify-center rounded-full bg-white/10 shadow-2xl shadow-cyan-500/20 backdrop-blur">
              <Image
                priority
                className={isActive ? "animate__animated animate__fadeInLeft h-auto w-[90%] drop-shadow-2xl" : "h-auto w-[90%] drop-shadow-2xl"}
                src={item.png}
                alt={item.title}
                width={500}
                height={300}
              />
            </div>
          )}

          <div className="absolute inset-0 z-30 flex items-start px-6 pt-14">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Soluciones GNSS X5
              </p>
              <h1 className="text-4xl font-semibold tracking-normal text-white">
                {item.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-slate-100">{item.desc}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                {item.path.startsWith('http') ? (
                  <MupuButton
                    href={item.path}
                    external
                    size='md'
                    variant='accent'
                  >
                    {item.btn}
                  </MupuButton>
                ) : (
                  <MupuButton href={item.path} size='md' variant='accent'>
                    {item.btn}
                  </MupuButton>
                )}
                <MupuButton href="/contacto" size='md' variant='darkGlass'>
                  Contacto
                </MupuButton>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
