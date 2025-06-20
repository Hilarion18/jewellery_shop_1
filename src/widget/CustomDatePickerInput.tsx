import { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';

const CustomDatePickerInput = ({ value, onClick, onChange, onClear, startDate, endDate, setIsFilterOpen, isFilterOpen }: any) => {
  const hasValue = startDate !== null || endDate !== null;
  
  return (
    <div className="lg:w-64 w-48">
      <input
        type="text"
        className="placeholder-black w-full p-2 pl-4 border border-gray-300 rounded-3xl shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-10"
        value={value}
        onClick={onClick}
        onChange={onChange}
        placeholder="Date"
        readOnly
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {hasValue ? (
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            <FiX className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick(e);
            }}
          >
            <FiChevronDown className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CustomDatePickerInput;