// src/components/ProductList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../Styles/ProductList.css';

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
