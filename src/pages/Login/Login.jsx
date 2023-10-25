import React from 'react';
import { Link } from 'react-router-dom';
import Textfield from '../../components/common/Texfield/Textfield';
import { StyleContainerLogin } from './login.styles';
import Button from '../../components/common/Button/Button';

const Login = () => {
  return (
    <StyleContainerLogin>
      <div className="content">
        <div>
          <img
            src="../../../public/diversiart.jpg"
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
          />

          <Textfield
            label="Senha"
            name="senha"
            placeholder="●●●●●●●"
            type="password"
            required
          />
          <p>
            Ainda não tem conta?
            <Link to="/cadastro" className="destaque">
              Cadastre-se
            </Link>
          </p>

          <Button texto={'Entrar'} width={'100%'} />
        </form>
      </div>
    </StyleContainerLogin>
  );
};

export default Login;
