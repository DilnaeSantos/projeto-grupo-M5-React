import styled from 'styled-components';

export const StylesImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: #4a4949;
  border-radius: 8px 0 0 8px;
  > img {
    border-radius: 8px 0 0 8px;
    width: 200px;
    height: 200px;
  }
`;

export const StylesProduto = styled.div`
  display: flex;
  margin: 15px;
  background-color: #f3efe4;
  width: 600px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
    4px 4px 8px 0px rgba(0, 0, 0, 0.25);
`;

export const StylesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StylesDescricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 25px;
  > p {
    font-size: 16px;
    word-wrap: break-word;
  }
  > span {
    font-weight: bolder;
  }
`;

export const StyleEscolha = styled.div`
  display: flex;
  padding: 20px 35px 20px 20px;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
`;
