import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://localhost:5001',
});

export const getAPI = (url) => {
  return axiosInstance.get(url)
};

export const postAPI = (url, element) => {
  return axiosInstance.post(url, element)
};

export const deleteAPI = (url) => {
  return axiosInstance.delete(url)
};

export const putAPI = (url, element) => {
return  axiosInstance.put(url, element)
};


