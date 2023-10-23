import React from 'react'
import Textfield from '../../components/common/Texfield/Textfield';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import { StyleContainerCadastro } from './cadastro.styles';

const Cadastro = () => {
  return (
<StyleContainerCadastro>
    <form>
        <div className='content'>
            <h1>Cadastro</h1>
                <Textfield
                label="Nome completo:"
                name="nome"
                placeholder="Nome Completo"
                type="text"
                required
                />


                <Textfield
                label="Email"
                name="email"
                placeholder="email@email.com"
                type="email"
                required
                />

                <Textfield
                label="Telefone:"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                type="number"
                required
                />

                <Textfield
                label="Qual o seu tipo de arte?"
                name="tipoDeArte"
                placeholder="Tipo de arte"
                type="text"
                required
                />

                <Textfield
                label="Nos fale um pouco sobre você"
                name="minibio"
                placeholder="Descreva-se de forma breve"
                type="text"
                required
                />

                <Textfield
                label="Senha"
                name="senha"
                placeholder="●●●●●●●"
                type="password"
                required
                />

                <p>
                Já possui conta?
                <Link to="/login" className="destaque">
                Realizar login
                </Link>
                </p>

                <Button texto={'Entrar'} width={'100%'} />

        </div>
    </form>
    </StyleContainerCadastro>
  )
}

export default Cadastro