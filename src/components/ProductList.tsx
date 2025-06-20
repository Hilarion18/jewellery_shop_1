import React, { useState, useEffect } from 'react';
// import { Product, products, categories } from '../data/products';
import { Product } from '../data/products';
import dynamic from 'next/dynamic';

// import ProductCard from './ProductCard';
const ProductCard = dynamic(() => import('./ProductCard'), { ssr: false });
// const ProductCard = dynamic(() => import('../components/ProductCard').then(mod => mod.ProductCard), { ssr: false });

interface ProductListProps {
  filteredProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ filteredProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {currentProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="col-span-3 flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;