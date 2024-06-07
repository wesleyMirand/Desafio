import React from 'react';
import { render } from '@testing-library/react';
import Cart from '../components/Cart';

describe('Cart component', () => {
  test('renders cart items correctly', () => {
    // Mock data
    const items = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      // Add more mock items as needed
    ];

    const { getByText } = render(<Cart items={items} />);
    
    // Add your assertions here
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('$20')).toBeInTheDocument();
    // Add more assertions as needed
  });
});