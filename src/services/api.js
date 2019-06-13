import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: process.env.REACT_APP_URL_API
});

export default api;
