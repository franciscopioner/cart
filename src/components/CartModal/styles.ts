import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: right;
  align-items: right;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;

export const ModalFooter = styled.div`
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.div`
  text-align: right;
`;

export const Cart = styled.div`
  border: solid 1px #00AA13;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 15% 60% 15% 5%;
  align-items: center;
`;

export const ItemImage = styled.img`
  max-height: 50px;
  border-radius: 8px;
  object-fit: cover;
  place-self: center;
`;
