import { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import { getProdutosArtesao } from '../../services/api';
import { StyleConatiner, StyledSection } from './produtos.styles';
import Produto from '../../components/Produto/Produto';
import Footer from '../../components/common/Footer/Footer';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos() {
    const response = await getProdutosArtesao();
    setProdutos(response);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);
  return (
    <>
      <Header />
      <StyledSection>
        <h1>Produtos Disponíveis</h1>
        <StyleConatiner>
          <ul>
            {produtos.map((produto) => (
              <Produto
                idProduto={produto._id}
                imagemProduto={produto.url}
                nomeProduto={produto.nome}
                precoProduto={produto.preco}
                qtdEstoque={produto.qtdEstoque}
                emailArtesao={produto.emailArtesao}
                descricaoProduto={produto.descricao}
              />
            ))}
          </ul>
        </StyleConatiner>
      </StyledSection>
      <Footer />
    </>
    
  );
};

export default Produtos;
