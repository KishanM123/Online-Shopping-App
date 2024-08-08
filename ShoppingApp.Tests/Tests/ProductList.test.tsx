// src/components/ProductList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

describe('ProductList Component', () => {
  const mockProducts = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 149.99, image: 'product3.jpg' },
  ];

  test('renders the correct number of products', () => {
    render(<ProductList products={mockProducts} searchQuery="" />);
    const productElements = screen.getAllByRole('heading', { level: 2 });
    expect(productElements).toHaveLength(mockProducts.length);
  });

  test('filters products based on the search query', () => {
    render(<ProductList products={mockProducts} searchQuery="Product 1" />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).toBeNull();
  });

  test('displays a message when no products match the search query', () => {
    render(<ProductList products={mockProducts} searchQuery="Nonexistent Product" />);
    expect(screen.getByText('Nothing matched your search.')).toBeInTheDocument();
  });
});
