import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-stretch items-center gap-8">
        {/* <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-pink-600">GlamourGems</div>
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
        </div> */}
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600 tracking-wide">
          GlamourGems
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-gray-700 font-medium text-lg">
          <li className="hover:text-pink-500 cursor-pointer">Product</li>
          <li className="flex items-center gap-4">
            <ShoppingCart className="text-pink-500 cursor-pointer" />
            <button className="md:hidden text-pink-600">☰</button>
          </li>
          <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-600 text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-base font-medium">
            <li className="hover:text-pink-500 cursor-pointer">Product</li>
            <li className="flex items-center gap-4">
              <ShoppingCart className="text-pink-500 cursor-pointer" />
              <button className="md:hidden text-pink-600">☰</button>
            </li>
            <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </header>
  );
}
