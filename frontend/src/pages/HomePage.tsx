// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductList from '../components/ProductList';
import { Product } from '../models/Product';
import '../Styles/HomePage.css';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <div className="home-page">
      <h1>Products</h1>
      <ProductList products={products} searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
