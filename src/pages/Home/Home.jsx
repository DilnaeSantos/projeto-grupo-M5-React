// Em Home.jsx
import React from "react";
import Header from "../../components/common/Header/Header";
import styles from "../Home/home.styles.js";
import fotoHome from "/foto-home-1.svg";
import fotoHome2 from "/foto-home-2.svg";
import fotoHome3 from "/foto-home-3.svg";

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
          <h2>Autenticidade, qualidade e inclusão de artesãos.</h2>
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
            Acreditamos no poder da expressão criativa e na riqueza da
            diversidade. Somos um ponto de encontro onde artesãos e
            empreendedores de grupos minorizados trazem à vida suas paixões e
            talentos únicos.
          </p>
        </div>
      </main>
      <main style={styles.container}>
        <div style={styles.imageContainer3}>
          <img
            src={fotoHome3}
            alt="Imagem com o nome DiversiArt"
            className="imgDiversiArt"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div style={styles.textContainer3}>
          <h2>Todo Mês Uma Loja Fisica</h2>
          <p>
            Celebramos parcerias mensais com estabelecimentos locais, dando aos
            nossos artesãos a chance de expor e vender suas criações. Envolvendo
            a comunidade, oferecemos uma experiência de compra autêntica. Fique
            de olho para descobrir o próximo local; sua cidade pode ser o
            próximo destino!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
