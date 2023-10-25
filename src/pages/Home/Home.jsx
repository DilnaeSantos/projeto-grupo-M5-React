import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../../components/common/Header/Header"
import ArtesanatoImg from "../../assets/artesanato.png"
import { HomeStyle } from '../../style/GlobalStyle';
import ArtesaImg from "../../assets/artesa.png"

const Home = () => {
  return (
    <div className='home'>
      <HomeStyle />

      <main>
          <h2>Bem vindo a Diversiart
              <p>E nosso objetivo com o diversiArt é promover autenticidade, qualidade e inclusão dos produtos oferecidos por artesãos e empreendedores de grupos minorizados no marketplace DiversiArt.</p>
              <img className='artesanato' src={ArtesanatoImg} />
          </h2>
          <h2>Faça seu cadastro agora mesmo!
              <p>Todos os vendedores que desejam se registrar no DiversiArt podem acessar a nossa aba "Cadastro" e cadastrar todas as artes.</p>
              <img className='artesa' src={ArtesaImg} />
          </h2>
      </main>
    </div>
  );
}

export default Home