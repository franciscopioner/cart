import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from 'react-query';
import productReducer from '../../../store/cartSlice';
import ProductList from '../';
import { fetchProducts } from '../../../pages/api/api';

// Mock the fetchProducts API call
jest.mock('../../../pages/api/api', () => ({
  fetchProducts: jest.fn(),
}));

const mockProducts = {
  products: [
    { id: 1, title: 'Product 1', description: 'Description 1', price: 100, images: ['image1.png'] },
  ],
};

describe('ProductList', () => {
  it('renders ProductList with products', async () => {
    // Mock the API call
    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

    const queryClient = new QueryClient();
    const store = configureStore({
      reducer: {
        cart: productReducer,
      },
    });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('R$ 100,00')).toBeInTheDocument();
    });
  });

  it('shows loading text when fetching products', () => {
    (fetchProducts as jest.Mock).mockImplementation(() => new Promise(() => {})); // pending promise

    const queryClient = new QueryClient();
    const store = configureStore({
      reducer: {
        cart: productReducer,
      },
    });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>
      </Provider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
