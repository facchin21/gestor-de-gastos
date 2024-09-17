import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #38A37F;
  color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

export const ModalBody = styled.div`
  font-size: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &.confirm {
    background: #4caf50;
    color: #fff;
  }
  &.cancel {
    background: #f44336;
    color: #fff;
  }
  &.confirm:hover,
  &.cancel:hover {
    background: #E1ECC8;
    color: black;
  }
`;

export const Input = styled.input`
  background: none;
  padding : 5px 10px;
  border-radius: 5px;
  border: 2px solid #E1ECC8;
  outline: none;
  
  &::placeholder{
    color : #E1ECC8
  }
`

export const SelectStyled = styled.select`
  background : none;
  outline: none;
  border-radius: 5px;
  border: 2px solid #e1ecc8;
  color : white;
`
