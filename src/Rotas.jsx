// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Contato from './pages/Contato/Contato';
import Artesao from './pages/Artesao/Artesao';

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/artesao" element={<Artesao />} />
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
