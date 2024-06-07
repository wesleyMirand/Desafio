import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  
`;

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface Props {
  items: CartItem[];
}

const Cart: React.FC<Props> = ({ items }) => {
  return (
    <CartContainer>
      <h2>Adicionados no carrinho</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </CartContainer>
  );
};

export default Cart;