import axios, { AxiosRequestConfig } from 'axios';
import { Method, AxiosResponse } from 'axios';

const BASE_URL =
   process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_DEV_API_URL;

let config = {
   authToken: '',
};

export const getAPIConfig = () => ({ ...config });

export const updateAPIConfig = (newConfig: {}) => {
   config = {
      ...config,
      ...newConfig,
   };
};

export const callAPI = <T = any, R = AxiosResponse<T>>(endpoint: string, method: Method, data?: any): Promise<R> => {
   
   return new Promise((resolve, reject) => {
      axios({
         method,
         headers: {
            Authorization: config.authToken ? `Bearer ${getAPIConfig().authToken}` : '',
         },
         url: `${BASE_URL}${endpoint}`,
         data,
      })
         .then((res) => resolve(res.data))
         .catch((err) => {
            reject({
               status: (err.response && err.response.status) || '',
               message: err.message || '',
            });
         });
   });
};