import React from 'react';

const BannerWhatson = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: 'url(https://ovolohotels.com/wp-content/uploads/2025/05/whats-on-banner-2.png)'
        }}
      >
        {/* Overlay for better text visibility (optional) */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Centered Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-start text-2xl md:text-4xl lg:text-6xl font-normal mb-4">The Insider
            <p className='text-3xl text-start md:text-5xl lg:text-8xl pt-4'>
              <i className='' style={{fontFamily: "Didot"}}>WHAT&apos;S</i>
              <span className='font-bold'> ON</span>
            </p>
          </h1>
          {/* <p className="text-lg md:text-xl lg:text-2xl">Your subtitle or description goes here</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
            Call to Action
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BannerWhatson;