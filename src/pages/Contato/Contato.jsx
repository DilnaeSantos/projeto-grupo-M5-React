import React from 'react'
import Textfield from '../../components/common/Texfield/Textfield';
import Button from '../../components/common/Button/Button';
import { StyleContainerContato } from './contato.styles';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

const Contato = () => { 
    return (
<div>
    <Header/>
    <StyleContainerContato>
    <div className="content">
        
        <form>
        <h1 className='titulo-contato'>Contato</h1>

            <Textfield
                label="Nome:"
                name="nome"
                placeholder="Seu nome"
                type="text"
                required
            />

            <Textfield
                label="Email:"
                name="email"
                placeholder="email@email.com"
                type="email"
                required
            />
            <Textfield
                label="Assunto:"
                name="assunto"
                placeholder="Do que deseja tratar?"
                type="text"
                required
            />

            <Textfield
                label="Mensagem:"
                name="mensagem"
                placeholder="Insira aqui sua mensagem"
                type="textarea"
                required
            />
        <Button texto={'Enviar'} width={'100%'} />
        </form>
    </div>
    </StyleContainerContato>
    <Footer/>
    </div>
)
}

export default Contato