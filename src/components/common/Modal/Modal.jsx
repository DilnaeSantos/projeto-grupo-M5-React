import { X } from '@phosphor-icons/react';
import React from 'react';
import styled from 'styled-components';

const Modal = ({ open, title, onClose, children }) => {
  const handleClose = (e) => {
    e.target.id === 'modal' && onClose();
  };
  return (
    <>
      {open && (
        <StylesModal id="modal" onClick={handleClose}>
          <StylesContentModal>
            <section className="header">
              <h2>{title}</h2>
              <X color={'black'} onClick={onClose} cursor="pointer" size={32} />
            </section>
            <SectionChildren>{children}</SectionChildren>
          </StylesContentModal>
        </StylesModal>
      )}
    </>
  );
};

export default Modal;

const StylesModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(38, 50, 56, 0.6);
`;

const StylesContentModal = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: #d7c0ab;
  box-shadow: 4px 7px 21px 0px #263238, -4px -7px 21px 0px #263238;

  > .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h2 {
      color: black;
    }
  }
`;

const SectionChildren = styled.div`
  display: flex;
  padding: 5px;
  gap: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    > img {
      align-self: center;
      width: 100px;
      height: 100px;
      margin-top: 25px;
      border-radius: 8px;
      background-color: #595959;
    }

    > label {
      padding: 5px;
      margin-top: 10px;
    }

    > Button {
      width: 100%;
      margin-top: 30px;
    }
  }
`;
