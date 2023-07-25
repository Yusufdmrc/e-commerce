import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { PRODUCT_DATA_ACTION } from "../constants/ActionTypes";

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface GetProductDataAction {
  type: typeof PRODUCT_DATA_ACTION;
  payload: ProductData[];
}

export const productDataAction =
  () => async (dispatch: Dispatch<GetProductDataAction>) => {
    const response: AxiosResponse<ProductData[]> = await axios.get<
      ProductData[]
    >("https://fakestoreapi.com/products?sort=desc");
    const data = response.data;
    dispatch({ type: PRODUCT_DATA_ACTION, payload: data });
  };
