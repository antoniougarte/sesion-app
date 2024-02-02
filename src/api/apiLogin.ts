import axios from 'axios';
import type { ExistingUser, NewUser } from '@/types/userType';

const apiUrl = import.meta.env.VITE_APP_API_LOGIN_URL; // Accede a la variable de entorno para la URL de la API desde el .env


export const createApi = async (credentials: NewUser) => {
  const response = await axios.post(`${apiUrl}/create`, credentials);
  return response;
}

export const loginApi = async (credentials: ExistingUser) => {
  const response = await axios.post(`${apiUrl}/login`, credentials);
  return response;
}

export const getCurrentUserApi = async (token:string) => {
    const response = await axios.get(`${apiUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Devuelve solo los datos de la respuesta, no la respuesta completa
};