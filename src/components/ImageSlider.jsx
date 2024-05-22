import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';  // Assurez-vous de créer et d'importer ce fichier CSS

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-out",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [
    "/monbar/concert-1854113.jpg",
    "/monbar/dj-7857071.jpg",
    "/monbar/margarita-1839361.jpg",
    "/monbar/neon-glasses-8118252.jpg"
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="slide-container">
              <img src={src} alt={`Slide ${index}`} className="w-full h-[600px] object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
