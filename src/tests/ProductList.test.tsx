import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../components/ProductList';

describe('ProductList component', () => {
  test('renders product list correctly', () => {
    // Mock data
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      // Add more mock products as needed
    ];

    const { getByText } = render(<ProductList products={products} />);
    
    // Add your assertions here
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('$20')).toBeInTheDocument();
    // Add more assertions as needed
  });
});