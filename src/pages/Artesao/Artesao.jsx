import React, { useEffect, useState } from 'react';
import { ProdutosCadastro, StyleInput, StyleTextArea } from './artesao.styles';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import Produto from '../../components/Produto/Produto';
import Header from '../../components/common/Header/Header';
import {
  deletarProduto,
  getProdutosArtesao,
  patchProduto,
  postProduto,
} from '../../services/api';

const Artesao = () => {
  const [abrirModal, setAbrirModal] = useState(false);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);

  const [imagemProduto, setImagemProduto] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [emailArtesao, setEmailArtesao] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [idProduto, setIdProduto] = useState('');

  function limparCampos() {
    setImagemProduto('');
    setNomeProduto('');
    setPrecoProduto('');
    setQtdEstoque('');
    setEmailArtesao('');
    setDescricaoProduto('');
    setEEdicao(false);
  }

  const [eEdicao, setEEdicao] = useState(false);

  function handleEditarProduto(produto) {
    setEEdicao(true);
    setIdProduto(produto.id);
    setImagemProduto(produto.url);
    setNomeProduto(produto.nome);
    setPrecoProduto(produto.preco);
    setQtdEstoque(produto.qtDeEstoque);
    setEmailArtesao(produto.emailArtesao);
    setDescricaoProduto(produto.descricao);
    setAbrirModal(true);
  }

  async function handleSalvarProduto() {
    const body = {
      url: imagemProduto,
      nome: nomeProduto,
      preco: precoProduto,
      qtdEstoque: qtdEstoque,
      emailArtesao: emailArtesao,
      descricao: descricaoProduto,
    };

    const response = await postProduto(body);

    setAbrirModal(false);
    limparCampos();
    buscarProdutos();
  }

  async function handlePatchProduto() {
    const body = {
      id: idProduto,
      url: imagemProduto,
      nome: nomeProduto,
      preco: precoProduto,
      qtdEstoque: qtdEstoque,
      emailArtesao: emailArtesao,
      descricao: descricaoProduto,
    };
    const resposta = await patchProduto(idProduto, body);

    setAbrirModal(false);
    setEEdicao(false);
    buscarProdutos();
  }

  async function handleDeleteProduto() {
    const resposta = await deletarProduto(idProduto);
    buscarProdutos();
    setModalDelete(false);
  }

  async function buscarProdutos() {
    const response = await getProdutosArtesao();
    const email = localStorage.getItem('email');
    setEmailArtesao(email);
    const produtosFiltrados = response.filter(
      (produto) => produto.emailArtesao == email,
    );

    setListaProdutos(produtosFiltrados.length > 0 ? produtosFiltrados : []);
  }

  function handleAbrirModalDelete(idProduto) {
    setIdProduto(idProduto);
    setModalDelete(true);
  }

  function handleModal() {
    setAbrirModal(true);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);
  return (
    <>
      <Header />
      <ProdutosCadastro>
        <section>
          <h2>Produtos cadastrados: </h2>
          <Button texto={'Adicionar produto'} onClick={handleModal} />
        </section>
        <ul>
          {listaProdutos.map((produto, index) => {
            return (
              <Produto
                key={index}
                idProduto={produto._id}
                imagemProduto={produto.url}
                nomeProduto={produto.nome}
                precoProduto={produto.preco}
                qtdEstoque={produto.qtdEstoque}
                emailArtesao={produto.emailArtesao}
                descricaoProduto={produto.descricao}
                handleEditarProduto={handleEditarProduto}
                handleAbrirModalDelete={handleAbrirModalDelete}
              />
            );
          })}
        </ul>
      </ProdutosCadastro>
      <Modal
        title={'Cadastrar:'}
        open={abrirModal}
        onClose={() => {
          setAbrirModal(false);
          limparCampos();
        }}
      >
        <label htmlFor="">Imagem-URL:</label>
        <StyleInput
          type="text"
          value={imagemProduto}
          onChange={(evento) => setImagemProduto(evento.target.value)}
        />
        <label htmlFor="">Nome:</label>
        <StyleInput
          type="text"
          value={nomeProduto}
          onChange={(evento) => setNomeProduto(evento.target.value)}
        />
        <label htmlFor="">Preço:</label>
        <StyleInput
          type="text"
          value={precoProduto}
          onChange={(evento) => setPrecoProduto(evento.target.value)}
        />
        <label htmlFor="">Quantidade em Estoque:</label>
        <StyleInput
          type="text"
          value={qtdEstoque}
          onChange={(evento) => setQtdEstoque(evento.target.value)}
        />
        {/* <label htmlFor="">Email Aretesão:</label>
        <StyleInput
          type="text"
          value={emailArtesao}
          onChange={(evento) => setEmailArtesao(evento.target.valueo)}
        /> */}
        <label htmlFor="">Descrição</label>
        <StyleTextArea
          name=""
          id=""
          cols="30"
          rows="2"
          value={descricaoProduto}
          onChange={(evento) => setDescricaoProduto(evento.target.value)}
        ></StyleTextArea>
        <Button
          onClick={eEdicao ? handlePatchProduto : handleSalvarProduto}
          texto={eEdicao ? 'Salvar alterações' : 'ADICIONAR'}
        />
      </Modal>

      {/* MODAL - EXCLUIR A TRANSACAO */}

      <Modal
        open={modalDelete}
        title={'Excluir'}
        onClose={() => setModalDelete(false)}
      >
        <h3>Você deseja realmente excluir esse produto?</h3>
        <Button texto={'sim'} onClick={handleDeleteProduto} />
      </Modal>
    </>
  );
};

export default Artesao;
