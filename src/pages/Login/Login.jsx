import React from 'react';
import { Link } from 'react-router-dom';
import Textfield from '../../components/common/Texfield/Textfield';
import { StyleContainerLogin } from './login.styles';
import Button from '../../components/common/Button/Button';

const Login = () => {
  return (
    <StyleContainerLogin>
      <div className="content">
        <form>
          <h1>DiversiArt</h1>

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
            <Link to="/" className="destaque">
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
