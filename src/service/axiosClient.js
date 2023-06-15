import axios from 'axios';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
  // paramsSerializer: params => queryString.stringify({...params})
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
