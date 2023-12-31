import styled from 'styled-components';
import cadastroimg from '../../../public/image-cadastro.svg';
export const StyleContainerContato = styled.main`

width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: #c4ab9a;
margin-top: 7%;


.content {
    display: flex;
    flex-direction: column;
    padding: 48px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background-image : url(${cadastroimg}) ;
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
    4px 4px 8px 0px rgba(0, 0, 0, 0.25);
    gap: 15px;
}

.titulo-contato {
    margin-left: 30%;
}



`;