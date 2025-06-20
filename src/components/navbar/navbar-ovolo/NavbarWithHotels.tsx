import React, { useState } from 'react';

const NavbarWithHotels: React.FC = () => {
  const [showHotels, setShowHotels] = useState(false);

  return (
    <div className="relative bg-black text-white">
      {/* Navbar */}
      <nav className="flex  items-center px-8 py-4">
        <div className="relative">
          <button
            className="font-bold text-green-400"
            onClick={() => setShowHotels(!showHotels)}
          >
            HOTELS <span className="ml-1">▼</span>
          </button>

          {/* Hotels Dropdown Section */}
          {showHotels && (
            <div className="absolute left-0 top-full mt-4 w-[90vw] max-w-6xl bg-black border border-gray-700 p-8 shadow-lg z-50">
              {/* Ovolo Hotels */}
              <section>
                <h2 className="text-2xl font-bold">Ovolo Hotels</h2>
                <p className="mt-2 max-w-2xl">
                  Welcome to an experience full of wonder. A collection of boutique hotels that keep you connected to the little luxuries you love.
                  <br />
                  All effortlessly included. Wonder. Full.
                </p>
                <div className="mt-6 grid md:grid-cols-5 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Hong Kong</h3>
                    <p className="font-bold">Ovolo Central</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Sydney, Australia</h3>
                    <p className="font-bold">Ovolo Woolloomooloo</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Brisbane, Australia</h3>
                    <p className="font-bold">Ovolo The Valley</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Melbourne, Australia</h3>
                    <p className="font-bold">Ovolo South Yarra</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Canberra, Australia</h3>
                    <p className="font-bold">Ovolo Nishi</p>
                  </div>
                </div>
              </section>

              <hr className="my-6 border-gray-700" />

              {/* Collective Hotels */}
              <section>
                <h2 className="text-2xl font-bold">By Ovolo Collective Hotels</h2>
                <p className="mt-2 max-w-2xl">
                  Each one unique, each one special. The more you explore, the more you’ll find. Which is why people come for the experience, and stay for the memories. Wonder. Full.
                </p>
                <div className="mt-6 grid md:grid-cols-5 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Hong Kong</h3>
                    <p className="font-bold">Southside by Ovolo</p>
                    <p className="font-bold mt-1">The Aberdeen by Dash</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Melbourne, Australia</h3>
                    <p className="font-bold">Laneways by Ovolo</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Canberra, Australia</h3>
                    <p className="font-bold">Nishi Apartments by Ovolo</p>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-400 font-semibold">Bali, Indonesia</h3>
                    <p className="font-bold">Mamaka by Ovolo</p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Right Side of Navbar */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white">Profile</a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWithHotels;
