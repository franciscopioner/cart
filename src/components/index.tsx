import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '../store';
import CartModal from './CartModal'
import ProductList from './ProductList'
import GlobalStyles from '../styles/GlobalStyles';

const Cart: React.FC = () => {
  const [queryClient, ] = useState(() => new QueryClient())
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <CartModal />
        <ProductList />
      </QueryClientProvider>
    </Provider>
  );
};

export default Cart;
