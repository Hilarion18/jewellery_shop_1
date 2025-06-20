// components/ImageSlider.tsx
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { bannerSlide } from '../data/slide';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === bannerSlide.length - 1 ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, bannerSlide.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerSlide.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlide.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  return (
    // <div className="relative pt-16 w-full h-[90vh] md:h-[70vh] overflow-hidden group">
    <div className="relative pt-16 w-full h-[90vh] md:h-[70vh] group">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerSlide.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            {/* Content */}
            <div className="relative h-[90vh] md:h-[70vh] flex flex-col justify-center items-center text-white px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fadeIn">
                {slide.description}
              </p>
              <a
                href={slide.ctaLink}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors duration-300 animate-fadeIn"
              >
                {slide.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerSlide.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;