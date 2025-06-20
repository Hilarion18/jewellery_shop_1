import React, { useState, useEffect } from 'react';
// import { products, categories } from '../data/products';
import { Product, products, categories } from '../data/products';

interface SidebarProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortField, setSortField] = useState<'name' | 'price'>('name');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value === '' ? null : event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(event.target.value as 'name' | 'price');
  };

  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  useEffect(() => {
    let filteredProducts = products;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    filteredProducts = filteredProducts.sort((a, b) => {
      if (sortField === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }
    });

    setFilteredProducts(filteredProducts);
  }, [searchTerm, selectedCategory, sortOrder, sortField, setFilteredProducts]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Search</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        <select
          value={selectedCategory || ''}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded py-2 px-3"
        >
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sort By</label>
        <select
          value={sortField}
          onChange={handleSortChange}
          className="w-full border border-gray-300 rounded py-2 px-3"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Order</label>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="w-full border border-gray-300 rounded py-2 px-3"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;