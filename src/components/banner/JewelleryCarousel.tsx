import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Diamond3D from "./Diamond3d";

const banners = [
  {
    image: "https://bannerjewellery.com/cdn/shop/collections/shop.jpg?v=1678778985&width=2048",
    title: "Elegance Redefined",
    subtitle: "Discover timeless beauty in our new diamond collection.",
  },
  {
    image: "https://bannerjewellery.com/cdn/shop/collections/shop.jpg?v=1678778985&width=2048",
    title: "Golden Glamour",
    subtitle: "Shine bright with handcrafted gold pieces.",
  },
  {
    image: "https://bannerjewellery.com/cdn/shop/collections/shop.jpg?v=1678778985&width=2048",
    title: "Luxury for Every Occasion",
    subtitle: "Celebrate moments with unique gemstone designs.",
  },
];

export default function JewelleryCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden ">
      {banners.map((banner, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
        >
          <img
            src={banner.image}
            alt={`Banner ${index + 1}`}
            className="object-cover w-full h-full"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-6 md:px-16 text-white">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {banner.title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-2xl max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {banner.subtitle}
            </motion.p>
          </div> */}
          <div className="absolute inset-0 bg-gray-100  bg-opacity-40 flex flex-col justify-center items-start px-6 md:px-16 text-black">
            <div className="absolute right-6 bottom-6 md:right-16 md:bottom-16 w-32 h-32 md:w-52 md:h-52">
              <Diamond3D />
            </div>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-4">
              {banner.title}
            </motion.h2>
            <motion.p className="text-lg md:text-2xl max-w-xl">
              {banner.subtitle}
            </motion.p>
          </div>
        </motion.div>
      ))}

      {/* need to fix the slide fixing error */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
