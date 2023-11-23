'use client'

import { useState, useEffect } from 'react';

/* Checks if were in the server or browser */
const getSize = () => (typeof window !== 'undefined' ? { width: window.innerWidth, height: window.innerHeight } : undefined);

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSize());
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;