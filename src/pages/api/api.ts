import { Product, Cart } from '../../types';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<{ products: Product[] }> => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return { products: data.products };
};


export const fetchCarts = async (): Promise<{ carts: Cart[] }> => {
  const response = await fetch(`${API_BASE_URL}/carts`);
  if (!response.ok) {
    throw new Error('Failed to fetch carts');
  }
  return response.json();
};

export const fetchCartById = async (id: number): Promise<Cart> => {
  const response = await fetch(`${API_BASE_URL}/carts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  return response.json();
};

export const fetchCartsByUser = async (userId: number): Promise<{ carts: Cart[] }> => {
  const response = await fetch(`${API_BASE_URL}/carts/user/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch carts for user');
  }
  return response.json();
};

export const addCart = async (userId: number, products: { id: number; quantity: number }[]): Promise<Cart> => {
  const response = await fetch(`${API_BASE_URL}/carts/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, products }),
  });
  if (!response.ok) {
    throw new Error('Failed to add cart');
  }
  return response.json();
};

export const updateCart = async (cartId: number, products: { id: number; quantity: number }[]): Promise<Cart> => {
  const response = await fetch(`${API_BASE_URL}/carts/${cartId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ merge: true, products }),
  });
  if (!response.ok) {
    throw new Error('Failed to update cart');
  }
  return response.json();
};

export const deleteCart = async (cartId: number): Promise<Cart> => {
  const response = await fetch(`${API_BASE_URL}/carts/${cartId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete cart');
  }
  return response.json();
};
