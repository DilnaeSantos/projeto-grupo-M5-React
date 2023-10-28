// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { ProdutosCadastro, StyleInput, StyleTextArea } from './artesao.styles';
import Button from '../../components/common/Button/Button';
import Modal from '../../components/common/Modal/Modal';
import Produto from '../../components/Produto/Produto';
import HeaderArdesao from '../../components/common/HeaderArdesao/Header';
import {
  deletarProduto,
  getProdutosArtesao,
  patchProduto,
  postProduto,
} from '../../services/api';
import Notificacao from '../../components/common/Notificacao/Notificacao';

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

  const [infosNotificacao, setInfosNotificacao] = useState({
    tipo: '',
    texto: '',
  });

  const [abrirNotificacao, setAbrirNotificacao] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const url = e.target.value;
    setImagemProduto(url);
    preloadImage(url);
  };

  const preloadImage = (url) => {
    setLoading(true);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      setLoading(false);
      console.error('Erro ao carregar a imagem.');
    };
  };

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

    const resposta = await postProduto(body);
    console.log(resposta);
    if (resposta.Sucesso) {
      buscarProdutos();
    }
    setInfosNotificacao({
      tipo: resposta.Sucesso ? 'Sucesso' : 'falha',
      texto: resposta.Sucesso
        ? 'Produto adicionada com sucesso'
        : 'Erro ao adicionar Produto',
    });

    setAbrirNotificacao(true);
    setAbrirModal(false);
    limparCampos();
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
    if (resposta.message) {
      buscarProdutos();
    }
    setInfosNotificacao({
      tipo: resposta.message ? 'Sucesso' : 'falha',
      texto: resposta.message
        ? 'Produto editado com sucesso'
        : 'Erro ao editar Produto',
    });

    setAbrirNotificacao(true);
    setAbrirModal(false);
    setEEdicao(false);
  }

  async function handleDeleteProduto() {
    const resposta = await deletarProduto(idProduto);
    if (resposta.message) {
      buscarProdutos();
    }
    setInfosNotificacao({
      tipo: resposta.message ? 'Sucesso' : 'falha',
      texto: resposta.message
        ? 'Produto deletado com sucesso'
        : 'Erro ao deletar Produto',
    });

    setAbrirNotificacao(true);
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
      <HeaderArdesao />
      <ProdutosCadastro>
        <section>
          <h2>Produtos cadastrados: </h2>
          <Button texto={'Adicionar produto'} onClick={handleModal} />
        </section>
        <ul>
          {listaProdutos.map((produto, index) => {
            return (
              <Produto
                type={'cadastar'}
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
      {abrirNotificacao && (
        <Notificacao
          texto={infosNotificacao.texto}
          tipo={infosNotificacao.tipo}
          fecharNotificacao={() => setAbrirNotificacao(false)}
          open={abrirNotificacao}
        />
      )}
      <Modal
        title={'Cadastrar:'}
        open={abrirModal}
        onClose={() => {
          setAbrirModal(false);
          limparCampos();
        }}
      >
        <div>
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
          <label htmlFor="">Descrição</label>
          <StyleTextArea
            name=""
            id=""
            cols="30"
            rows="3"
            value={descricaoProduto}
            onChange={(evento) => setDescricaoProduto(evento.target.value)}
          ></StyleTextArea>
        </div>
        <div>
          <img src={imagemProduto} alt="" />
          <label htmlFor="">Imagem-URL:</label>
          <StyleInput
            type="text"
            value={imagemProduto}
            onChange={handleInputChange}
          />
          <Button
            onClick={eEdicao ? handlePatchProduto : handleSalvarProduto}
            texto={eEdicao ? 'Salvar alterações' : 'ADICIONAR'}
          />
        </div>
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
