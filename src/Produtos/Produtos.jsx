import { useState, useEffect } from "react";
import ProdutosRepository from "../../../../projeto-grupo-M5-API/src/Repository/ProdutoRepository";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await ProdutosRepository.buscarTodosOsProdutos();
        setProdutos(response); // Define o estado produtos com os dados recebidos da API
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos(); // Chama a função para buscar os produtos quando o componente é montado
  }, []); // O array vazio executa o useEffect

  return (
    <div className="produtos-container">
      <h1>Produtos Disponíveis</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img src={produto.imagemUrl} alt={produto.descricao} />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Quantidade: {produto.quantidade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
