
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
  }, []); // O array vazio como segundo argumento faz com que o useEffect seja executado apenas uma vez após a montagem do componente



export default Produtos;
