import * as api from "../api/index";
import * as types from "./types";

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleProduct(id);
    dispatch({
      type: types.FETCH_SINGLE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = (link) => async (dispatch) => {
  try {
    const data = await api.createProduct(link);

    dispatch({
      type: types.CREATE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
