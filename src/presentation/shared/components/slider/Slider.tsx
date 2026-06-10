import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type SliderProps<T> = {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderSlide: (item: T, index: number, isActive: boolean) => ReactNode;
  renderThumbnail?: (item: T, index: number, isActive: boolean) => ReactNode;
  ariaLabel: string;
  autoplayDelay?: number;
  className?: string;
  viewportClassName?: string;
  showControls?: boolean;
  showDots?: boolean;
  thumbnailClassName?: string;
};

export const Slider = <T,>({
  items,
  getKey,
  renderSlide,
  renderThumbnail,
  ariaLabel,
  autoplayDelay = 0,
  className = "",
  viewportClassName = "",
  showControls = true,
  showDots = true,
  thumbnailClassName = "",
}: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;

  const canNavigate = totalItems > 1;

  const slideKeys = useMemo(
    () => items.map((item, index) => getKey(item, index)),
    [getKey, items],
  );

  useEffect(() => {
    if (!canNavigate || autoplayDelay <= 0) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalItems);
    }, autoplayDelay);

    return () => window.clearInterval(intervalId);
  }, [autoplayDelay, canNavigate, totalItems]);

  if (totalItems === 0) return null;

  const currentIndex = Math.min(activeIndex, totalItems - 1);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? totalItems - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalItems);
  };

  return (
    <section className={className} aria-label={ariaLabel}>
      <div className={clsx("relative overflow-hidden", viewportClassName)}>
        {items.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={slideKeys[index]}
              aria-hidden={!isActive}
              className={clsx(
                "absolute inset-0 transition-opacity duration-500 ease-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none",
              )}
            >
              {renderSlide(item, index, isActive)}
            </div>
          );
        })}

        {showControls && canNavigate && (
          <>
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-xl transition hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <IoChevronBackOutline size={24} />
            </button>

            <button
              type="button"
              aria-label="Slide siguiente"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-xl transition hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <IoChevronForwardOutline size={24} />
            </button>
          </>
        )}

        {showDots && canNavigate && (
          <div className="absolute bottom-6 left-0 right-0 z-40 flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={slideKeys[index] ?? getKey(item, index)}
                type="button"
                aria-label={`Ir al slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={clsx(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30",
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        )}
      </div>

      {renderThumbnail && canNavigate && (
        <div className={clsx("mt-4 grid grid-cols-4 gap-3", thumbnailClassName)}>
          {items.map((item, index) => (
            <button
              key={slideKeys[index] ?? getKey(item, index)}
              type="button"
              aria-label={`Seleccionar slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "overflow-hidden rounded-lg border-2 transition",
                index === currentIndex ? "border-mupu" : "border-transparent opacity-75 hover:opacity-100",
              )}
            >
              {renderThumbnail(item, index, index === currentIndex)}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
