import styled from 'styled-components';

export const StyleConatiner = styled.div`
  display: flex;
  margin-top: 50px;
  > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 45px;
    padding: 15px;
  }
`;
