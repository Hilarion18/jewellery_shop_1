// src/pages/AboutUs.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import NavbarOvolo from '../components/navbar/navbar-ovolo/NavbarOvolo';
import EventListWhatson from '../components/whatson/EventList';
import BannerWhatson from '../components/banner/BannerWhatson';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavbarOvolo />
      <BannerWhatson/>
      <EventListWhatson/>
    </div>
  );
};

export default ProfilePage;