// App.tsx
import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const ImageSliderPartialAdvance: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sample slides data
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      title: 'Mountain Adventure',
      description: 'Experience the breathtaking views of the Alps'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Forest Exploration',
      description: 'Discover the secrets of ancient forests'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'Nature Wonders',
      description: 'Witness the beauty of untouched nature'
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
      title: 'Lake Serenity',
      description: 'Find peace in the calm waters of mountain lakes'
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5',
      title: 'Island Paradise',
      description: 'Escape to tropical islands with crystal clear waters'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">
          Responsive Image Slider
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Background slides every 2 seconds with fixed content overlay
        </p>
        
        {/* Main slider container */}
        <div 
          ref={sliderRef}
          className="relative w-full h-[70vh] md:h-[90vh] rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 relative"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                />
                
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            ))}
          </div>

          {/* Fixed content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover Amazing Places
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Explore breathtaking destinations around the world. Our slider showcases beautiful locations while our content remains fixed for your convenience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">Current Destination:</h3>
                <p className="text-lg font-semibold text-gray-800">{slides[currentSlide].title}</p>
                <p className="text-gray-600">{slides[currentSlide].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>Slider automatically changes every 2 seconds. Hover to reveal navigation controls.</p>
          <p className="mt-2">Desktop: 90% height | Mobile: 70% height</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderPartialAdvance;