import axios from 'axios';

// constantes
export const API_URL = 'http://localhost:3000';

// Función para realizar una solicitud GET a una URL configurable

export const getDataFromEndpoin = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

