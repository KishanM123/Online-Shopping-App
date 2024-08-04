// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.ts';
import { useCart } from '../context/CartContext.tsx';
import '../Styles/ProductDetailPage.css';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
