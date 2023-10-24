import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = ({ titulo }) => {
  return (
    <HeaderContainer>
      <LeftLinks>
        <Link to="/home"><FontAwesomeIcon icon={faHouse}   size='xl'/></Link>
      </LeftLinks>
      <RightLinks>
        <Link to="/">Produtos</Link>
        <Link to="/">Contato</Link>
        <Link to="/">Cadastre-se</Link>
        <Link to="/login"><FontAwesomeIcon icon={faUser}  size='lg' /> Efetuar login</Link>
      </RightLinks>
      {titulo}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #8a4546;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  
  a {
    text-decoration: none;
    color: white;
    margin-right: 40px;
    font-size: 20px;
    transition: color 0.3s;

    &:hover{
      color: #c4ab9a;
      transform: scale(1.1);
    
    }
  }
`;

const LeftLinks = styled.div`
  display: flex;
  align-items: center;
`;

const RightLinks = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;