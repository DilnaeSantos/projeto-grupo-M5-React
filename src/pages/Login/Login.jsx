// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Textfield from '../../components/common/Texfield/Textfield';
import { StyleContainerLogin } from './login.styles';
import Button from '../../components/common/Button/Button';
import diversiartImg from '/diversiart.png';
import { loginUsuario } from '../../services/api';
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from 'react';
>>>>>>> cd4ef75e35b0edf7ab3a7e2db88ad235eb377047

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const resposta = await loginUsuario(email, senha);

    if (resposta.success) {
      navigate('/');
      localStorage.setItem('id', resposta.data.id);
      localStorage.setItem('nome', resposta.data.nome);
    } else {
      setError(resposta.message);
    }
    console.log(resposta);
    console.log(error);
  }
  return (
    <StyleContainerLogin>
      <div className="content">
        <div>
          <img
            src={diversiartImg}
            alt="Imagem com o nome DiversiArt"
            className="imgDiversiArt"
          />
        </div>
        <form>
          <h1>LOGIN</h1>

          <Textfield
            label="Email"
            name="email"
            placeholder="email@email.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e)}
          />

          <Textfield
            label="Senha"
            name="senha"
            placeholder="●●●●●●●"
            type="password"
            required
            value={senha}
            onChange={(e) => setSenha(e)}
          />
          <p>
            Ainda não tem conta?
            <Link to="/cadastro" className="destaque">
              Cadastre-se
            </Link>
          </p>

          <Button texto={'Entrar'} width={'100%'} onClick={handleLogin} />
        </form>
      </div>
    </StyleContainerLogin>
  );
};

export default Login;
