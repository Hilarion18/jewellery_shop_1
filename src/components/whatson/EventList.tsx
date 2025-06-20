import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, JSX, useRef, ChangeEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomDatePickerInput from '../../widget/CustomDatePickerInput';
import LocationFilter from '../../widget/LocationFilter';
import { EventCategory } from '../types/types';
import CategoryDropdown from '../../widget/CategoryCheckbox';
import Image from 'next/image';
import GridCard from '../../widget/GridCard';
import { Event } from '../types/types';
import { mainEvent, allEvents } from '../../data/event';

// Helper function to safely parse dates
const parseDateString = (dateString: string): Date => {
  const parts = dateString.split(' ');
  if (parts.length === 3) {
    // Format like "06 June 2025"
    return new Date(`${parts[1]} ${parts[0]}, ${parts[2]}`);
  }
  // Fallback for invalid dates
  return new Date();
};

const parseEventDate = (dateString: string) => {
  try {
    if (dateString.includes('-')) {
      // Handle date ranges like "06-08 June 2025"
      const [startDay, rest] = dateString.split('-');
      const [endDay, month, year] = rest.trim().split(' ');
      const startDate = parseDateString(`${startDay.trim()} ${month} ${year}`);
      const endDate = parseDateString(`${endDay} ${month} ${year}`);
      return { startDate, endDate, isRange: true };
    }
    
    // Handle single dates
    const date = parseDateString(dateString);
    return { startDate: date, endDate: date, isRange: false };
  } catch (error) {
    console.error('Error parsing date:', error);
    const today = new Date();
    return { startDate: today, endDate: today, isRange: false };
  }
};

const EventCard = ({ event }: { event: Event }): JSX.Element => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
          }}
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{event.date}</div>
        <div className="text-sm font-semibold text-gray-700 mb-1">{event.country}</div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{event.description}</p>
        <a 
          href={"/whatson/"+event.slug} 
          className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors duration-300"
          // target="_blank"
          rel="noopener noreferrer"
        >
          View Event
        </a>
      </div>
    </div>
  );
};

const EventListWhatson = () => {
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, endDate] = dateRange;
  const datePickerRef = useRef<any>(null);
  const [categories, setCategories] = useState<EventCategory[]>([
    { id: 'music', name: 'Music', checked: false },
    { id: 'arts', name: 'Arts & Culture', checked: false },
    { id: 'sports', name: 'Sporting Events', checked: false },
    { id: 'food', name: 'Food & Dining Events', checked: false },
    { id: 'festivals', name: 'Festivals & Celebrations', checked: false },
    { id: 'fashion', name: 'Fashion', checked: false },
    { id: 'health', name: 'Health & Wellness', checked: false },
    { id: 'conferences', name: 'Conferences', checked: false },
  ]);
  const [isFilterOpen, setIsFilterOpen] = useState(0);

  // Function to normalize category names for comparison
  const normalizeCategory = (category: string): string => {
    return category.toLowerCase().trim();
  };

  // Create a mapping between event categories and UI categories
  const categoryMapping: Record<string, string> = {
    'music': 'Music',
    'arts & culture': 'Arts & Culture',
    'sporting events': 'Sporting Events',
    'food & dining events': 'Food & Dining Events',
    'foods': 'Food & Dining Events', // Mapping for 'FOODS' in your data
    'festivals & celebrations': 'Festivals & Celebrations',
    'fashion': 'Fashion',
    'health & wellness': 'Health & Wellness',
    'conferences': 'Conferences'
  }
  
  // Function to find the best matching category
  const getMappedCategory = (eventCategory: string): string | undefined => {
    const normalized = normalizeCategory(eventCategory);
    
    // 1. Try exact match first
    if (categoryMapping[normalized]) {
      return categoryMapping[normalized];
    }
    
    // 2. Try partial matches (e.g., "Music Festival" contains "festival")
    for (const [key, value] of Object.entries(categoryMapping)) {
      if (normalized.includes(key)) {
        return value;
      }
    }
    
    return undefined;
  };

  // Updated filter function
  function filterEventsByCategories(events: Event[], activeCategories: EventCategory[]): Event[] {
    const selectedCategoryNames = activeCategories
      .filter(category => category.checked)
      .map(category => category.name);

    if (selectedCategoryNames.length === 0) return allEvents;

    return events.filter(event => {
      const mappedCategory = getMappedCategory(event.category);
      return mappedCategory !== undefined && selectedCategoryNames.includes(mappedCategory);
    });
  }

  const handleCategoryChange = (updatedCategories: EventCategory[]) => {
    setCategories(updatedCategories);
    const newFilteredEvents = filterEventsByCategories(filteredEvents, updatedCategories)
    if (newFilteredEvents.length < 1) {
      setFilteredEvents([])
    } else {
      setFilteredEvents(newFilteredEvents)
    }
  };

  // Initialize with all events
  useEffect(() => {
    setFilteredEvents(allEvents);
  }, []);

  // Update filtered events when date range changes
  useEffect(() => {
    setIsLoading(true);
    
    const filterEvents = () => {
      if (!startDate && !endDate) {
        return allEvents;
      }

      return allEvents.filter(event => {
        const eventDates = parseEventDate(event.date);
        
        if (startDate && !endDate) {
          return eventDates.endDate >= startDate;
        }
        
        if (startDate && endDate) {
          return (
            (eventDates.startDate >= startDate && eventDates.startDate <= endDate) ||
            (eventDates.endDate >= startDate && eventDates.endDate <= endDate) ||
            (eventDates.startDate <= startDate && eventDates.endDate >= endDate)
          );
        }
        
        return true;
      });
    };

    const timer = setTimeout(() => {
      setFilteredEvents(filterEvents());
      setVisibleEvents(12);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [startDate, endDate]);

  const loadMore = () => {
    setIsLoading(true);
    // setVisibleEvents(prev => Math.min(prev + 8, filteredEvents.length));
    // setIsLoading(false);
    setTimeout(() => {
      setVisibleEvents(prev => Math.min(prev + 8, filteredEvents.length));
      setIsLoading(false);
    }, 300);
  };

  const handleClear = () => {
    setDateRange([null, null]);
    datePickerRef.current?.setOpen(false);
  };

  // Dynamic search function
  const searchEvent = (query: string) => {
    if (!query) {
      setFilteredEvents(allEvents); // or setFilteredEvents(mainEvent) if you want to show all when empty
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    console.log("lowerCaseQuery: ", lowerCaseQuery);
    
    const results = filteredEvents.filter(event => {
      return Object.values(event).some(value => {
        console.log("value: ", value);
        
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowerCaseQuery);
        }
        return false;
      });
    });
    
    setFilteredEvents(results);
  };

  return (
    <div className=" bg-white dark:bg-gray-800 mx-auto">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1> */}
      <div className='flex sm:h-[200px] h-[130px] justify-center items-center bg-[#18363d] mb-0'>
        <h3 className='pt-12 pb-12 sm:pl-[30%] pl-[20%] sm:pr-[30%] pr-[20%] text-xs md:text-base text-white text-center'>
          Sharing our local knowledge to help you discover what happening near our unique hotels to help plan your stay. Celebrating the best in food, design and culture from each of our neighbourhoods.
        </h3>
      </div>

      <div className='p-4 px-4 pt-12 pb-12 bg-[#8D206A] pl-[5%] pr-[5%]'>
        <h3 className='text-white pb-6 pt-6 text-2xl font-normal'>
          The Insider
        </h3>
        <GridCard cards={mainEvent} />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainEvent.slice(0, visibleEvents).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div> */}
      </div>

      <div className="flex flex-wrap -mx-2 p-8 px-4 bg-[#EEE9E6] justify-center pl-[10%] pr-[10%]">
        {/* Date Range Filter */}
        <div className="flex w-full pr-2 md:w-48 sm:w-1/2 lg:w-1/4 sm:justify-center justify-start items-center pt-4">
          <DatePicker
            ref={datePickerRef}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            minDate={new Date()}
            customInput={
              <CustomDatePickerInput 
                onClear={handleClear}
                startDate={startDate}
                endDate={endDate}
                setIsFilterOpen={setIsFilterOpen}
                isFilterOpen={isFilterOpen}
              />
            }
            dateFormat="dd MMMM yyyy"
            disabledKeyboardNavigation
            isClearable={false} // We handle clearing ourselves
          />
        </div>
        <div className="flex w-full pr-2 md:w-48 sm:w-1/2 lg:w-1/4 sm:justify-center justify-start items-center pt-4">
          <LocationFilter 
            events={allEvents} 
            onFilterChange={setFilteredEvents} 
          />
        </div>
        <div className="flex w-full pr-2 md:w-48 sm:w-1/2 lg:w-1/4 sm:justify-center justify-start items-center pt-4">
          <CategoryDropdown 
            categories={categories} 
            onCategoryChange={handleCategoryChange} 
          />
        </div>
        <div className="flex w-full pr-2 md:w-48 sm:w-1/2 lg:w-1/4 sm:justify-center justify-start items-center pt-4">
          <div className="lg:w-64 w-48">
            <input 
              // onChange={(event: ChangeEvent<HTMLInputElement>) => {
              onChange={(e) => {
                // console.log(event.target.value);
                searchEvent(e.target.value)
                setSearchQuery(e.target.value);
              }}
              className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search"/>
          </div>
        </div>
      </div>

      <div className='p-4 px-4 bg-[#EEE9E6] pl-[5%] pr-[5%]'>
        {isLoading && filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected date range</p>
            <button
              onClick={() => setDateRange([null, null])}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
          <div>
            <h3 className='pb-6 pt-6 text-2xl font-normal'>
              All Events
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.slice(0, visibleEvents).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

            {visibleEvents < filteredEvents.length && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Loading...' : 'Load More Events'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EventListWhatson;