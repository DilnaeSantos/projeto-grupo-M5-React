// eslint-disable-next-line no-unused-vars
import React from 'react'
import Textfield from '../../components/common/Texfield/Textfield';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router-dom';
import { StyleContainerCadastro } from './cadastro.styles';
import { postartesaos } from '../../services/api';
import { useState } from "react";
import Header from '../../components/common/Header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/common/Footer/Footer';


const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [telefone, settelefone] = useState('')
  const [email, setEmail] = useState('')
  const [tipoDeArte, settipoDeArte] = useState('')
  const [bio, setbio] = useState('')
  const [senha, setSenha] = useState('')
  const [errorCadastro, setErrorCadastro] = useState('')
  //const [resposta, setResposta] = useState('')
  const navigate = useNavigate()


  const handleCadastro = async (e) => {
    e.preventDefault();

    const body = {
        nome,
        telefone,
        email,
        tipoDeArte,
        bio,
        senha,
    };

    try {
    const status =  await postartesaos(body, senha);

      if (status === 201) {
        navigate('/login');
      }

      //console.log(status);

    } catch (erro) {
        if (erro.response) {
            if (erro.response.status === 406) {
                setErrorCadastro('Email já cadastrado.');

            } else {
                setErrorCadastro(erro.response.data.message);
            }
        } else {
            setErrorCadastro('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
    }
};

  return (
<div>
<Header/>
<StyleContainerCadastro>
    <form>
        <div className='content'>
            <h1>Cadastro</h1>
                <Textfield
                label="Nome completo:"
                name="nome"
                placeholder="Nome Completo"
                type="text"
                value={nome}
                onChange={(e) => setNome(e)}
                required
                />


                <Textfield
                label="Email"
                name="email"
                placeholder="email@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e)}
                required
                />

                <Textfield
                label="Telefone:"
                name="telefone"
                placeholder="(XX) XXXXX-XXXX"
                type="number"
                value={telefone}
                onChange={(e) => settelefone(e)}
                required
                />

                <Textfield
                label="Qual o seu tipo de arte?"
                name="tipoDeArte"
                placeholder="Tipo de arte"
                type="text"
                value={tipoDeArte}
                onChange={(e) => settipoDeArte(e)}
                required
                />

                <Textfield
                label="Nos fale um pouco sobre você"
                name="minibio"
                placeholder="Descreva-se de forma breve"
                type="text"
                value={bio}
                onChange={(e) => setbio(e)}
                required
                />

                <Textfield
                label="Senha"
                name="senha"
                placeholder="●●●●●●●"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e)}
                required
                />

                <p className="erro">{errorCadastro}</p>

                <p>
                Já possui conta?
                <Link to="/login" className="destaque">
                Realizar login
                </Link>
                </p>

                <Button onClick={(e) => handleCadastro(e)} texto={'Cadastrar'} width={'100%'} />

        </div>
    </form>
    </StyleContainerCadastro>
    <Footer/>
</div>
  )
}

export default Cadastro