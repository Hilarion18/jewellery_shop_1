import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';
import { products } from '../../data/products';

const ProductPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <Sidebar setFilteredProducts={setFilteredProducts} />
        </div>
        <div className="w-full md:w-2/3 px-4">
          <ProductList filteredProducts={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;