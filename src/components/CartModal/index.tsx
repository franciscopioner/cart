import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { toggleCart, removeFromCart, clearCart } from '../../store/cartSlice';
import { Product } from '../../types';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseButton,
  Cart,
  ItemImage
} from './styles';
import Button from '../Button';
import { formatPrice } from '../../utils';

const CartModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const handleToggleCart = () => {
      dispatch(toggleCart());
    };

    window.addEventListener('openCartModal', handleToggleCart);

    return () => {
      window.removeEventListener('openCartModal', handleToggleCart);
    };
  }, [dispatch]);

  if (!isOpen) return null;

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <ModalOverlay onClick={() => dispatch(toggleCart())}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton>
          <Button onClick={() => dispatch(toggleCart())}>X</Button>
        </CloseButton>
        <ModalHeader>
          <h2>Compras</h2> {items.length}
        </ModalHeader>
        <ModalContent>
          {items.length > 0 ? (
            items.map((item: Product) => (
              <Cart key={item.id}>
                <ItemImage src={item.images[0]} alt={item.title} />
                <p>{item.title}</p>
                <p>{formatPrice(item.price)}</p>
                <Button onClick={() => handleRemoveFromCart(item.id)}>X</Button>
              </Cart>
            ))
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </ModalContent>
        <ModalFooter>
          <Button rounded="true" onClick={() => dispatch(toggleCart())}>Concluir compras</Button>
          <Button onClick={handleClearCart}>Cancelar</Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CartModal;
