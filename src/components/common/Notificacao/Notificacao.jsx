import React, { useEffect } from 'react';
import styled from 'styled-components';

const Notificacao = ({ texto, tipo, open, fecharNotificacao }) => {
  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        fecharNotificacao();
      }, 10000);
    }
  }, [open]);
  return (
    <StyleNotificacao className={tipo == 'Sucesso' ? 'Sucesso' : 'falha'}>
      <p>{texto}</p>
    </StyleNotificacao>
  );
};

export default Notificacao;

const StyleNotificacao = styled.div`
  width: fit-content;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10vh;
  left: calc(50% - 110px);

  &.Sucesso {
    border: 2px solid green;
    background: #99f899;
    color: green;
  }

  &.falha {
    border: 2px solid red;
    background: #eb6565;
    color: #fdfbfb;
  }
`;
