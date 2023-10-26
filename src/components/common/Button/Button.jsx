import styled from 'styled-components';

const Button = ({ texto, width, onClick }) => {
  return (
    <>
      <StyleButton onClick={onClick} width={width}>
        {texto}
      </StyleButton>
    </>
  );
};

export default Button;

const StyleButton = styled.button`
  width: auto;
  border-radius: 8px;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 5px 15px;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
  border: none;
  background-color: #8a4546;
  transition: background 0.3s;

  &:hover {
    background-color: #f1a8a2;
  }
`;
