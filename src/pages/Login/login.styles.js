import styled from 'styled-components';
export const StyleContainerLogin = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4ab9a;

  > .content {
    display: flex;
    padding: 48px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: #f5f5f5;
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
      4px 4px 8px 0px rgba(0, 0, 0, 0.25);

    > form {
      border-radius: 16px;
      background: #f5f5f5;
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;

      .destaque {
        font-weight: bold;
      }
    }
  }
`;
