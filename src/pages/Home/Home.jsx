// Em Home.jsx
import React from "react";
import Header from "../../components/common/Header/Header";
import styles from "../Home/home.styles.js";
import fotoHome from "/foto-home-1.svg";
import fotoHome2 from "/foto-home-2.svg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1 style={styles.tituloHome}>DiversiArt</h1>
      <main style={styles.container}>
        <div style={styles.imageContainer1}>
          <img 
            src={fotoHome}
            alt="Imagem com o nome DiversiArt"
            className="imgDiversiArt"
            style={{ width: "700px", height: "auto" }}
          />
        </div>
        <div style={styles.textContainer1}>
          <h2>Bem vindo a DiversiArt</h2>
          <p>autenticidade, qualidade e inclusão de artesãos</p>
        </div>
      </main>

      <main style={styles.container}>
        <div style={styles.imageContainer2}>
          <img
            src={fotoHome2}
            alt="Imagem com o nome DiversiArt"
            style={{ width: "700px", height: "auto" }}
          />
        </div>
        <div style={styles.textContainer2}>
          <h2>Conheça um pouco sobre o DiversiArt</h2>
          <p>
            O DiversiArt Garante a autenticidade e qualidade dos produtos
            vendidos no marketplace, construindo a confiança dos clientes.
            Promove a inclusão e a representatividade de grupos minorizados,
            alinhando-se com a missão do DiversiArt e também, ajuda a manter um
            ambiente seguro e ético para compradores e vendedores.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
