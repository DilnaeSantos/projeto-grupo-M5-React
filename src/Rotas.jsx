import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/Login/Login';

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
