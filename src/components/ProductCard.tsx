// import React from 'react';
// import { Product } from '../data/products';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{product.name}</h3>
//         <p className="text-gray-600">{product.shortDescription}</p>
//         <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../data/products';
import { ProductCardProps } from '../types/products';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.shortDescription}</p>
        <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;