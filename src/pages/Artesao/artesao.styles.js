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
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 80px 0;
  }
`;

export const StyleInput = styled.input`
  border-radius: 8px;
  background: #f0f0f0;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 5px;
  font-size: 20px;
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
  width: 100%;
  padding: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 2px solid transparent;
  color: black;
`;
