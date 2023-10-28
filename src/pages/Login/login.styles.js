import styled from 'styled-components';
export const StyleContainerLogin = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background: #c5af9a;

  > .content {
    display: flex;
    padding: 38px;
    height: fit-content;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background: #f3efe4;
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
      4px 4px 8px 0px rgba(0, 0, 0, 0.25);

    > form {
      border-radius: 16px;
      display: flex;
      height: 400px;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      .destaque {
        font-weight: bold;
      }
    }
    .imgDiversiArt {
      width: 600px;
      height: 400px;
      border-radius: 10px;
      box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
        4px 4px 8px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
