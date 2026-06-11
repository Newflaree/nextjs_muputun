import { useEffect } from 'react';
import Router from 'next/router';

const revealSelector = [
  'main > section',
  'main > article',
  'main > div',
  'main section > article',
  'main section > div',
  'main article > section',
  'main [class*="rounded-[2"]',
  'main [class*="rounded-[2."]',
].join(',');

export const ScrollReveal = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let elements: HTMLElement[] = [];
    let frameId: number | undefined;

    const updateReveal = () => {
      frameId = undefined;

      const revealLine = window.innerHeight * 0.86;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isAboveViewport = rect.bottom <= 0;
        const isInRevealRange = rect.top < revealLine && rect.bottom > 0;
        const isBelowRevealRange = rect.top >= revealLine;

        if (isAboveViewport || isInRevealRange) {
          element.classList.add('scroll-reveal--visible');
          return;
        }

        if (isBelowRevealRange) {
          element.classList.remove('scroll-reveal--visible');
        }
      });
    };

    const scheduleRevealUpdate = () => {
      if (frameId !== undefined) return;

      frameId = window.requestAnimationFrame(updateReveal);
    };

    const setupReveal = () => {
      elements = Array.from(
        document.querySelectorAll<HTMLElement>(revealSelector),
      ).filter((element) => {
        if (!element.closest('main')) return false;
        if (element.closest('footer')) return false;
        if (element.closest('nav')) return false;
        if (element.classList.contains('scroll-reveal')) return false;
        if (element.classList.contains('loading-screen')) return false;

        return true;
      });

      elements.forEach((element, index) => {
        element.classList.add('scroll-reveal');
        element.style.setProperty('--reveal-delay', `${ Math.min(index % 4, 3) * 55 }ms`);
      });

      updateReveal();
    };

    setupReveal();

    window.addEventListener('scroll', scheduleRevealUpdate, { passive: true });
    window.addEventListener('resize', scheduleRevealUpdate);
    Router.events.on('routeChangeComplete', setupReveal);

    return () => {
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', scheduleRevealUpdate);
      window.removeEventListener('resize', scheduleRevealUpdate);
      Router.events.off('routeChangeComplete', setupReveal);
    };
  }, []);

  return null;
};
