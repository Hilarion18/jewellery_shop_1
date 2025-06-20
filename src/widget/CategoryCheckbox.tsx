import { useState } from 'react';
import { EventCategory } from '../components/types/types';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';

type CategoryDropdownProps = {
  categories: EventCategory[];
  onCategoryChange: (categories: EventCategory[]) => void;
};

const CategoryDropdown = ({ categories, onCategoryChange }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (id: string) => {
    const updatedCategories = categories.map(category => 
      category.id === id ? { ...category, checked: !category.checked } : category
    );
    onCategoryChange(updatedCategories);
  };

  const selectedCount = categories.filter(c => c.checked).length;
  const Icon: IconType = isOpen ? FiX : FiChevronDown;

  return (
    <div className="lg:w-64 w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {selectedCount > 0 ? `${selectedCount} selected` : 'Select categories'}
        <span className="float-right">
          <Icon className="h-5 w-5" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-fit mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2 space-y-2 max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center px-3 py-1 space-x-2 hover:bg-gray-100 rounded">
                <input
                  type="checkbox"
                  checked={category.checked}
                  onChange={() => toggleCategory(category.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;