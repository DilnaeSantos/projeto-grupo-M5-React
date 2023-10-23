// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/Login/Login'; 
import Cadastro from './pages/Cadastro/Cadastro'

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
