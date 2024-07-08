import React, { useRef } from 'react';
import Cards from './Cards';
import backgroundImage from '../assets/wallpaperflare.com_wallpaper (1).jpg'; // Ensure this path is correct

function Foreground() {
  const ref = useRef(null);
  return (
    <div ref={ref} className="fixed w-full h-screen z-10 p-4 overflow-hidden flex items-center justify-center">
      <img
        className="absolute h-full w-full object-cover opacity-40"
        src={backgroundImage}
        alt="blade runner"
      />
      <div className="relative z-20 flex flex-wrap gap-4">
        <Cards reference={ref} />
        <Cards reference={ref} />
        <Cards reference={ref} />
        <Cards reference={ref} />

      </div>
    </div>
  );
}

export default Foreground;
