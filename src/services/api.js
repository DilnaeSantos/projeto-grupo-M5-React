import axios from "axios";

const api = axios.create({
    baseURL: "https://api-diversiart.onrender.com",
    headers: {
        "content-type": "application/json"
    }
})

export const getArtesoes = async () => {
    const resposta = await api.get("/artesaos");
    console.log(resposta.data);
    return resposta.data;
}

export const postartesaos = async (body, senha) => {
    const config = {
      headers: {
        'X-password': senha,
      },
    }
    const resposta = await api.post('/artesaos', body, config)
    return resposta.data
}