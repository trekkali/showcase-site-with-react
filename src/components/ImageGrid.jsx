import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ImageGrid = () => {
  return (
    <ParallaxProvider>
      <section className="py-16 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Parallax className="md:col-span-1" y={[-20, 20]}>
              <img 
                src="/monbar/concert-1854113.jpg" 
                alt="Concert" 
                className="w-full h-[1300px] object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </Parallax>
            <div className="md:col-span-2 grid grid-cols-1 gap-4">
              <Parallax y={[-20, 20]}>
                <img 
                  src="/monbar/dj-7857071.jpg" 
                  alt="DJ" 
                  className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </Parallax>
              <Parallax y={[-20, 20]}>
                <img 
                  src="/monbar/margarita-1839361.jpg" 
                  alt="Margarita" 
                  className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </Parallax>
            </div>
            <Parallax className="md:col-span-1" y={[-20, 20]}>
              <img 
                src="/monbar/neon-glasses-8118252.jpg" 
                alt="Neon Glasses" 
                className="w-full h-[1300px] object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </Parallax>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default ImageGrid;
