import axios from "axios";

const API_URL = "http://localhost:8000/api"; // Replace with your backend URL

// Axios instance with credentials
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for cookies
});

// Product API
export const getProducts = async () => {
  return await api.get("/products");
};

export const addProduct = async (productData) => {
  return await api.post("/products", productData);
};

export const updateProduct = async (id, productData) => {
  return await api.patch(`/products/${id}`, productData);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/products/${id}`);
};

// User API
export const loginUser = async (userData) => {
  return await api.post("/users/login", userData);
};

export const registerUser = async (userData) => {
  return await api.post("/users/register", userData);
};

export const getUser = async () => {
  return await api.get("/users/getuser");
};

export const updateUser = async (userData) => {
  return await api.patch("/users/updateuser", userData);
};

export default api;
