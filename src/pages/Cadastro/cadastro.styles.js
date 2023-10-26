import styled from 'styled-components';
export const StyleContainerCadastro = styled.main`

width: 100%;
height: 170vh;
display: flex;
align-items: center;
justify-content: center;
background: #c4ab9a;

.destaque{
    font-weight:bold;
}

.content {
    display: flex;
    flex-direction: column;
    padding: 48px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    background-image : url(../../../public/image-cadastro.svg) ;
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25),
    4px 4px 8px 0px rgba(0, 0, 0, 0.25);
    gap: 15px;
}




`;