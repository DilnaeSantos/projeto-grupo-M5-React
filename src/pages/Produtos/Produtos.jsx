import { useState, useEffect } from 'react';
import Header from '../../components/common/Header/Header';
import { getProdutosArtesao } from '../../services/api';
import { StyleCard } from './produtos.styles';

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
      <div className="produtos-container">
        <h1>Produtos Disponíveis</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <StyleCard>
                <img src={produto.url} alt={produto.descricao} />
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p>Quantidade: {produto.qtdEstoque}</p>
                <p>Contato: {produto.emailArtesao}</p>
                <p>Preço :{produto.preco},00</p>
              </StyleCard>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Produtos;
