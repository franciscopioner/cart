import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../store/cartSlice';
import CartModal from '../../CartModal';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      items: [
        { id: 1, title: 'Product 1', price: 100, images: ['image1.png'], quantity: 1 },
      ],
      isOpen: true,
    },
  },
});

describe('CartModal', () => {
  it('renders CartModal when open', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <CartModal />
      </Provider>
    );

    expect(getByText('Compras')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('R$ 100,00')).toBeInTheDocument();
    expect(getByAltText('Product 1')).toBeInTheDocument();
  });
  
  it('closes modal on close button click', () => {
    const { getAllByText, getByText } = render(
      <Provider store={store}>
        <CartModal />
      </Provider>
    );
    
    const buttons = getAllByText('X');
    
    fireEvent.click(buttons[0]);
    
    expect(() => getByText('Compras')).toThrow();
  });
});
