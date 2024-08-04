import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../models/Product';
import '../Styles/ProductItem.css';
import product1Image from '../images/product1.jpg';
import product2Image from '../images/product2.jpg';

interface ProductItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name, price, imageUrl }) => {
  // Use a mapping if the imageUrl is dynamic
  const images: Record<string, string> = {
    '/images/product1.jpg': product1Image,
    '/images/product2.jpg': product2Image,
    // Add more mappings as needed
  };

  return (
    <div className="product-item">
      <img src={images[imageUrl]} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <button>View Details</button>
    </div>
  );
};

export default ProductItem;