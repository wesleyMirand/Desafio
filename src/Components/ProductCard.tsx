import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Adicionar</button>
    </Card>
  );
};

export default ProductCard;