export interface Event {
  id: number;
  image: string;
  date: string;
  country: string;
  title: string;
  category: string;
  description: string;
  url: string;
  address: string;
  location: string;
  time: string;
  cost: number;
  slug: string;
}

export type LocationFilterProps = {
  events: Event[];
  onFilterChange: (filteredEvents: Event[]) => void;
};

export type EventCategory = {
  id: string;
  name: string;
  checked: boolean;
};

export interface BannerSlide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
