'use client'

import { useState, useEffect } from 'react';

/* Checks if were in the server or browser */
const isBrowser = () => typeof window !== 'undefined';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{ width: number | null; height: number | null }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (isBrowser()) {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

          // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return screenSize;
};

export default useScreenSize;