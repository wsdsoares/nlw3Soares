import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.1.4:3333',
  baseURL: 'http://10.0.0.114:3333',
});

export default api;