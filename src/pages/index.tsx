import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Camisa Normal', price: 10 },
  { id: 2, name: 'Camisa Customizada', price: 20 },
  { id: 3, name: 'Camisa de Time', price: 30 },
];

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  return (
    <div>
      <h1>Camisa Customizada</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <h1>Carrinho:</h1>
      <Cart items={cartItems} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      // props for your component
    },
  };
};

export default Home;