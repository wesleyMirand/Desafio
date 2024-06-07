import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}



const ProductContainer = styled.div`
  margin-bottom: 16px;
`;


const ProductList: React.FC<Props> = ({ products, onAddToCart }) => {
  return (
    <List>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </List>
  );
};

export default ProductList;