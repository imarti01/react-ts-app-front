import axios from 'axios';
import { IRegisterUser } from '../interfaces/auth';

const API_URL = `${import.meta.env.VITE_APP_API_URL}/api`;

export const registerRequest = async (userData: IRegisterUser) => {
  return await axios.post(`${API_URL}/signup`, userData).catch((res) => res.response.data.msg);
};
