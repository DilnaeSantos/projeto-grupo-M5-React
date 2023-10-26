// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../common/Button/Button';
import { PencilSimpleLine, Trash } from '@phosphor-icons/react';
import {
  StyleEscolha,
  StylesContainer,
  StylesDescricao,
  StylesImg,
  StylesProduto,
} from './Produto.style';

const Produto = ({
  idProduto,
  imagemProduto,
  nomeProduto,
  precoProduto,
  qtdEstoque,
  emailArtesao,
  descricaoProduto,
  handleEditarProduto,
  handleAbrirModalDelete,
}) => {
  return (
    <StylesProduto>
      <StylesImg>
        <img src={imagemProduto} alt="" />
      </StylesImg>
      <StylesContainer>
        <StylesDescricao>
          <h3>
            <span>Nome:</span> {nomeProduto}
          </h3>
          <p>
            <span>Descrição:</span> {descricaoProduto}
          </p>
          <p>
            <span>Contato:</span> {emailArtesao}
          </p>
          <p>
            <span>Estoque:</span>
            {qtdEstoque}
          </p>
          <p>
            <span>Preço R$:</span>
            {precoProduto}
          </p>
        </StylesDescricao>

        <StyleEscolha>
          <Button
            texto={<PencilSimpleLine size={32} />}
            onClick={() =>
              handleEditarProduto({
                id: idProduto,
                url: imagemProduto,
                nome: nomeProduto,
                descricao: descricaoProduto,
                emailArtesao: emailArtesao,
                qtDeEstoque: qtdEstoque,
                preco: precoProduto,
              })
            }
          />
          <Button
            texto={<Trash size={32} />}
            onClick={() => handleAbrirModalDelete(idProduto)}
          />
        </StyleEscolha>
      </StylesContainer>
    </StylesProduto>
  );
};

export default Produto;
