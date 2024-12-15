import React from "react";
import styled from "styled-components";
import "../styles/modal.css";

const DivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 1000;
`;

const DivModalConteiner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 40em;
  height: 30em;
  border-radius: 9px;
`;

export default function Modal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <DivModal>
        <DivModalConteiner className="conteiner-modal">
          <h1>Meu Carrinho!</h1>

          <button onClick={setModalOpen}>Fechar</button>
        </DivModalConteiner>
      </DivModal>
    );
  }
  return null;
}
