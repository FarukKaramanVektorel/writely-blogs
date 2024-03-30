import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090';

export const CATEGORY = {
  GET_CATEGORY: () => {
    return axios.get(`${API_BASE_URL}/kategori/listele`);
  },
  ADD_CATEGORY: (category) => {
    return axios.post(`${API_BASE_URL}/kategori/ekle`, category);
  },
  UPDATE_CATEGORY: (category) => {
    return axios.put(`${API_BASE_URL}/kategori/guncelle`, category);
  },
  DELETE_CATEGORY: (id) => {
    return axios.delete(`${API_BASE_URL}/kategori/sil/${id}`);
  },
  GET_CATEGORY_BY_ID: (id) => {
    return axios.get(`${API_BASE_URL}/kategori/getir/${id}`);
  },
};

export const POST ={
  GET_POST: () => {
    return axios.get(`${API_BASE_URL}/yazilar/listele`);
  },
  ADD_POST: (post) => {
    return axios.post(`${API_BASE_URL}/yazilar/ekle`, post);
  },
  UPDATE_POST: (post) => {
    return axios.put(`${API_BASE_URL}/yazilar/guncelle`, post);
  },
  DELETE_POST: (id) => {
    return axios.delete(`${API_BASE_URL}/yazilar/sil/${id}`);
  },
  GET_POST_BY_ID: (id) => {
    return axios.get(`${API_BASE_URL}/yazilar/getir/${id}`);
  },
};

export const COMMENT={   
  GET_COMMENT_BY_POST_ID: (postId) => {
    return axios.get(`${API_BASE_URL}/yorumlar/listele/${postId}`);
  },
  ADD_COMMENT: (comment) => {
    return axios.post(`${API_BASE_URL}/yorumlar/ekle`, comment);
  },
  UPDATE_COMMENT: (comment) => {
    return axios.put(`${API_BASE_URL}/yorumlar/guncelle`, comment);
  },
  DELETE_COMMENT: (id) => {
    return axios.delete(`${API_BASE_URL}/yorumlar/sil/${id}`);
  },
  GET_COMMENT_BY_ID: (id) => {
    return axios.get(`${API_BASE_URL}/yorumlar/getir/${id}`);
  },
};
