// src/pages/AboutUs.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import SongMarketplace from '../components/SongMarketPlace';
import NavbarOvolo from '../components/navbar/navbar-ovolo/NavbarOvolo';
import Footer from '../components/Footer';
import NavbarWithHotels from '../components/navbar/navbar-ovolo/NavbarWithHotels';
import Image from 'next/image';
import ImageSlider from '../widget/ImageSlider';
import ImageSliderPartial from '../widget/ImageSliderPartial';
import ProductPage from '../components/product/ProductPage';
import Navbar from '../components/navbar/Navbar';
import NavbarFooter from '../components/navbar/navbar-ovolo/NavbarFooter';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <ProductPage/>
      <NavbarFooter />
    </div>
  );
};

export default HomePage;