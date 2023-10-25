import React, { useState } from 'react';
import { ProdutosCadastro, StyleInput, StyleTextArea } from './artesao.styles';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import Produto from '../../components/Produto/Produto';
import Header from '../../components/common/Header/Header';

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
    setImagemProduto(produto.url);
    setNomeProduto(produto.nome);
    setPrecoProduto(produto.preco);
    setQtdEstoque(produto.qtDeEstoque);
    setEmailArtesao(produto.emailArtesao);
    setDescricaoProduto(produto.descricao);
    setAbrirModal(true);
  }

  function handleSalvarProduto() {
    const body = {
      url: imagemProduto,
      nome: nomeProduto,
      preco: precoProduto,
      qtDeEstoque: qtdEstoque,
      emailArtesao: emailArtesao,
      descricao: descricaoProduto,
    };
    console.log(body);
    setAbrirModal(false);
    limparCampos();
  }

  async function handlePutProduto() {
    const body = {
      url: imagemProduto,
      nome: nomeProduto,
      preco: precoProduto,
      qtDeEstoque: qtdEstoque,
      emailArtesao: emailArtesao,
      descricao: descricaoProduto,
    };
    const resposta = await putTransacao(
      idProduto,
      body,
      'a57501f9407c2174825bb862860ec23a',
    );
    console.log(resposta);
    setAbrirModal(false);

    handleBuscarTransacoes();
    setEEdicao(false);
  }

  function handleAbrirModalDelete() {
    setModalDelete(true);
  }

  function handleModal() {
    setAbrirModal(true);
  }
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
                index={index}
                imagemProduto={produto.url}
                nomeProduto={produto.nome}
                precoProduto={produto.preco}
                qtdEstoque={produto.qtDeEstoque}
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
        <label htmlFor="">Email Aretesão:</label>
        <StyleInput
          type="text"
          value={emailArtesao}
          onChange={(evento) => setEmailArtesao(evento.target.value)}
        />
        <label htmlFor="">Descrição</label>
        <StyleTextArea
          name=""
          id=""
          cols="30"
          rows="5"
          value={descricaoProduto}
          onChange={(evento) => setDescricaoProduto(evento.target.value)}
        ></StyleTextArea>
        <Button
          onClick={eEdicao ? handlePutProduto : handleSalvarProduto}
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
        <Button texto={'sim'} onClick={''} />
      </Modal>
    </>
  );
};

export default Artesao;
