import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-diversiart.onrender.com',
  headers: {
    'content-type': 'application/json',
  },
});

export const getArtesoes = async () => {
  const resposta = await api.get('/artesaos');
  console.log(resposta.data);
  return resposta.data;
};

export const postartesaos = async (body, senha) => {
  const config = {
    headers: {
      'X-password': senha,
    },
  };
  const resposta = await api.post('/artesaos', body, config);
  return resposta.data;
};

export const loginUsuario = async (email, senha) => {
  try {
    const config = {
      headers: {
        'X-password': senha,
      },
    };

    const resposta = await api.post('/loginArtesao', { email }, config);

    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      };
    } else {
      return {
        message: 'erro inesperado',
      };
    }
  }
};

export const getProdutosArtesao = async () => {
  const resposta = await api.get(`/produtos`);
  return resposta.data;
};

export const postProduto = async (body) => {
  try {
    const resposta = await api.post(`/produto`, body);
    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.data.message,
        success: error.response.data.success,
      };
    } else {
      return {
        message: 'erro inesperado',
      };
    }
  }
};

export const deletarProduto = async (idProduto) => {
  try {
    const resposta = await api.delete(`/produto/${idProduto}`);
    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.message,
        success: error.response.data.success,
      };
    } else {
      return {
        error: 'erro inesperado',
      };
    }
  }
};

export const patchProduto = async (idProduto, body) => {
  try {
    const resposta = await api.patch(`/produto/${idProduto}`, body);
    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.message,
        success: error.response.data.success,
      };
    } else {
      return {
        error: 'erro inesperado',
      };
    }
  }
};
