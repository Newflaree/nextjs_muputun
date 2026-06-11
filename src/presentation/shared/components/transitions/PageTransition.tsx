import { useEffect, useState } from 'react';
import Router from 'next/router';
import { LoadingScreen } from './LoadingScreen';

const minimumLoadingMs = 780;

export const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimer: number | undefined;
    let loadingStartedAt = 0;

    const showTransition = () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

      loadingStartedAt = window.performance.now();
      setIsVisible(true);
    };

    const hideTransition = () => {
      const elapsedMs = window.performance.now() - loadingStartedAt;
      const remainingMs = Math.max(minimumLoadingMs - elapsedMs, 260);

      hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, remainingMs);
    };

    Router.events.on('routeChangeStart', showTransition);
    Router.events.on('routeChangeComplete', hideTransition);
    Router.events.on('routeChangeError', hideTransition);

    return () => {
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }

      Router.events.off('routeChangeStart', showTransition);
      Router.events.off('routeChangeComplete', hideTransition);
      Router.events.off('routeChangeError', hideTransition);
    };
  }, []);

  return <LoadingScreen isVisible={ isVisible } />;
};
