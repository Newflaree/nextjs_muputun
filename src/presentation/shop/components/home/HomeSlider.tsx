import Image from 'next/image';
import {
  MupuButton,
  Slider,
} from '@/presentation/shared';
import type { HeaderInfo } from '@/core';

type HomeSliderProps = {
  slides: HeaderInfo[];
};

export const HomeSlider = ({ slides }: HomeSliderProps) => {
  if (slides.length === 0) return null;

  return (
    <Slider
      items={slides}
      getKey={(item) => item.id}
      ariaLabel="Productos destacados"
      autoplayDelay={6000}
      className="hidden sm:block"
      viewportClassName="min-h-[calc(100vh-5rem)] max-h-[820px] rounded-none"
      renderSlide={(item, _index, isActive) => (
        <div className="relative h-full w-full">
          <Image
            src={item.imgm}
            alt={item.title}
            fill
            sizes="(min-width: 640px) 1080px, 100vw"
            style={{ objectFit: 'cover' }}
            priority
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/58 to-cyan-950/15" />

          {item.png && (
            <div className="absolute bottom-10 right-10 z-20 flex aspect-square w-[44%] max-w-[560px] items-center justify-center rounded-full bg-white/10 shadow-2xl shadow-cyan-500/20 backdrop-blur">
              <Image
                priority
                className={isActive ? "animate__animated animate__fadeInLeft h-auto w-[92%] drop-shadow-2xl" : "h-auto w-[92%] drop-shadow-2xl"}
                src={item.png}
                alt={item.title}
                width={620}
                height={420}
              />
            </div>
          )}

          <div className="absolute inset-0 z-30 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Soluciones GNSS X5
                </p>
                <h1 className="text-5xl font-semibold tracking-normal text-white lg:text-7xl">
                  {item.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100">{item.desc}</p>

                <div className="mt-10 flex items-center gap-4">
                  {item.path.startsWith('http') ? (
                    <MupuButton
                      href={item.path}
                      external
                      variant='accent'
                    >
                      {item.btn}
                    </MupuButton>
                  ) : (
                    <MupuButton href={item.path} variant='accent'>
                      {item.btn}
                    </MupuButton>
                  )}
                  <MupuButton href="/contacto" variant='darkGlass'>
                    Hablar con ventas
                  </MupuButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};
