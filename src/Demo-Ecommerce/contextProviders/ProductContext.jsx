import React, {
  createContext,
  Children,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { reducer } from "../reducers/products";
import axios from "axios";

const productContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  products: [],
  featuredProducts: [],
  isError: false,
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);
      const data = res.data;
      dispatch({ type: "SET_API_DATA", payload: data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const setSingleProduct = useCallback(async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(`${API}?id=${id}`);
      const product = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
    } catch (err) {
      dispatch({ type: "SET_SINGLE_ERROR", payload: `Error : ${err}` });
    }
  }, []);

  return (
    <productContext.Provider value={{ ...state, setSingleProduct }}>
      {children}
    </productContext.Provider>
  );
};
export function useProductContext() {
  return useContext(productContext);
}
export default ProductContextProvider;
