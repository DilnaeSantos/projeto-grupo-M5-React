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
              <p>autenticidade, qualidade e inclusão de artesãos</p>
              <img className='artesanato' src={ArtesanatoImg} />
          </h2>
          <h2>Conheça um pouco sobre o DiversiArt
              <p>O DiversiArt Garante a autenticidade e qualidade dos produtos vendidos no marketplace, construindo a confiança dos clientes.
                Promove a inclusão  e a representatividade de grupos minorizados, alinhando-se com a missão do DiversiArt e também,
                  ajuda a manter um ambiente seguro e ético para compradores e vendedores.
                  </p>
              <img className='artesa' src={ArtesaImg} />
          </h2>
      </main>
    </div>
  );
}

export default Home