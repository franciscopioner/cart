import React from 'react';
import ProductList from '../components/ProductList';
import CartModal from '../components/CartModal';

const Cart: React.FC = () => {
  return (
    <div>
      <ProductList />
      <CartModal />
    </div>
  );
};

export default Cart;
