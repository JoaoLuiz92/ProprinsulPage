import axios from 'axios';

export const createAccessToken = async (userId) => {
  try {
    const response = await axios.post(`http://localhost:3333/users/${userId}/tokens`);
    const token = response.data.value;
    return token;
  } catch (error) {
    console.error('Erro ao criar token de acesso:', error);
    throw new Error('Erro ao criar token de acesso');
  }
};

export const getloginData = async (token) => {
  try {
    const response = await axios.get('http://localhost:3333/login', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados do login:', error);
    throw new Error('Erro ao obter dados do login');
  }
};
