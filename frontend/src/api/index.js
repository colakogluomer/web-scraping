import axios from "axios";

const apiEndPoint = "http://localhost:5000/product/";

export const createProduct = async (link) => {
  const { data } = await axios.post(`${apiEndPoint}insert/`, link);
  return data;
};

export const fetchProducts = async () =>
  await axios.get(`${apiEndPoint}find/all`);

export const fetchSingleProduct = async (id) =>
  await axios.get(`${apiEndPoint}find/${id}`);
