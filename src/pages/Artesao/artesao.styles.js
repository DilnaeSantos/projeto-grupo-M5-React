import styled from 'styled-components';

export const ProdutosCadastro = styled.main`
  display: flex;
  flex-direction: column;
  padding: 100px 200px;
  background-color: #c5af9a;

  > section {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  > ul {
    padding: 80px 100px;
  }
`;

export const StyleInput = styled.input`
  border-radius: 8px;
  background: #f0f0f0;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  padding: 5px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 2px solid transparent;
  color: black;
`;

export const StyleTextArea = styled.textarea`
  border-radius: 8px;
  background: #f0f0f0;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  padding: 5px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 2px solid transparent;
  color: black;
`;
