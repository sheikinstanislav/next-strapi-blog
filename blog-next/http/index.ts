import axios from 'axios';

export const BASE_URL = 'http://localhost:1337';
export const API_BASE_URL = 'http://localhost:1337/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
