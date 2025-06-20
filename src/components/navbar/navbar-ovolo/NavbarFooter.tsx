import React from "react";
import { MapPin, Phone, ShoppingCart } from "lucide-react";

const LAT = "28.6139";
const LNG = "77.2090";
const WHATSAPP_NUMBER = "+911234567890"; // Include country code
const WHATSAPP_MESSAGE = "Hi, I’m interested in your jewellery collection!";

export default function NavbarFooter() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      {/* <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-pink-600">BaliSilvers</div>
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Collections</li>
            <li className="hover:text-pink-500 cursor-pointer">About</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center gap-4">
            <ShoppingCart className="text-pink-500 cursor-pointer" />
            <button className="md:hidden text-pink-600">☰</button>
          </div>
        </div>
      </nav> */}

      {/* Page content placeholder */}
      {/* <main className="flex-grow bg-gray-50 p-8"> */}
        {/* Your page content here */}
      {/* </main> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">BaliSilvers</h2>
            <p>Finest handcrafted jewellery for every occasion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
            <p>123 Sparkle Street, Jaipur, Rajasthan</p>
            <a
              href={`https://maps.google.com/?q=${LAT},${LNG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-pink-400 hover:text-pink-300"
            >
              <MapPin className="mr-1 h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300"
            >
              <Phone className="mr-1 h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-sm text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} BaliSilvers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
