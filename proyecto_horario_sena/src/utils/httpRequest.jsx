import axios from 'axios';

// Función para realizar una solicitud GET a una URL configurable

export const getDataFromEndpoin = async (endpoint) => {
  try {
    const response = await axios.get(`http://localhost:3000/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postDataToEndpoint = async (endpoint, data) => {
  try {
    const response = await axios.post(`http://localhost:3000/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};