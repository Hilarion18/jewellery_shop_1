import { useState, useEffect } from 'react';
import { LocationFilterProps } from '../components/types/types';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';


const LocationFilter = ({ events, onFilterChange }: LocationFilterProps) => {
  const locationData = {
    'BALI': [],
    'HONG KONG': [],
    'AUSTRALIA': ['BRISBANE', 'MELBOURNE', 'SYDNEY', 'CANBERRA']
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  // Filter events when selection changes
  useEffect(() => {
    let filteredEvents = events;
    
    if (selectedCity) {
      filteredEvents = filteredEvents.filter(event => 
        event.country === selectedCity
      );
    } else if (selectedCountry) {
      filteredEvents = filteredEvents.filter(event => 
        event.country === selectedCountry
      );
    }
    
    onFilterChange(filteredEvents);
  }, [selectedCountry, selectedCity, events, onFilterChange]);

  const handleCountrySelect = (country: string) => {
    if (country === expandedCountry) {
      setExpandedCountry(null); // Collapse if clicking the same country
    } else if (locationData[country as keyof typeof locationData]?.length > 0) {
      setExpandedCountry(country); // Expand if has cities
    } else {
      // Select immediately for countries without cities
      setSelectedCountry(country);
      setSelectedCity(country);
      setIsOpen(false);
    }
  };

  const handleCitySelect = (city: string) => {
    setSelectedCountry(expandedCountry);
    setSelectedCity(city);
    setIsOpen(false);
    setExpandedCountry(null);
  };

  const handleClearFilters = () => {
    setSelectedCountry(null);
    setSelectedCity(null);
    setIsOpen(false);
    setExpandedCountry(null);
  };

  return (
    <div className="lg:w-64 w-48 relative inline-block text-left">
      {/* Main Dropdown Button */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between w-full rounded-3xl pl-4 border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedCity || selectedCountry || 'Select Location'}
          {(selectedCountry || selectedCity)
            ? 
              <FiX 
              onClick={handleClearFilters}
              className="h-7 w-7 pl-2 pt-0" />
            : 
              <FiChevronDown
              onClick={() => setIsOpen(!isOpen)}
              className="h-7 w-7 pl-2 pt-0" />
            }
        </button> 
      </div>

      {/* Main Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-3xl p-2 pl-4 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {Object.keys(locationData).map((country) => (
              <div key={country}>
                <button
                  onClick={() => handleCountrySelect(country)}
                  className={`flex justify-between items-center w-full px-4 py-2 text-sm text-left ${
                    selectedCountry === country ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{country}</span>
                  {locationData[country as keyof typeof locationData]?.length > 0 && (
                    <svg
                      className={`h-5 w-5 text-gray-400 transform ${
                        expandedCountry === country ? 'rotate-90' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {/* Nested cities for expanded country */}
                {expandedCountry === country && (
                  <div className="pl-4 bg-gray-50">
                    {locationData[country as keyof typeof locationData].map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className={`block w-full px-4 py-2 text-sm text-left ${
                          selectedCity === city ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilter;