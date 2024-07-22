import { useMutation } from 'react-query';
import { addCart, updateCart, deleteCart } from '../pages/api/api';

export const useAddCart = () => {
  return useMutation((data: { userId: number; products: { id: number; quantity: number }[] }) => addCart(data.userId, data.products));
};

export const useUpdateCart = () => {
  return useMutation((data: { cartId: number; products: { id: number; quantity: number }[] }) => updateCart(data.cartId, data.products));
};

export const useDeleteCart = () => {
  return useMutation((cartId: number) => deleteCart(cartId));
};
