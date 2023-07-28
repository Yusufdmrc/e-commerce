import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { PRODUCT_INFO_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

interface GetProductInfoAction {
  type: typeof PRODUCT_INFO_ACTION;
  payload: ProductData;
}

export const productInfoAction =
  (id: number) => async (dispatch: Dispatch<GetProductInfoAction>) => {
    const response: AxiosResponse<ProductData> = await axios.get<ProductData>(
      `https://fakestoreapi.com/products/${id}`
    );
    const data = response.data;

    dispatch({ type: PRODUCT_INFO_ACTION, payload: data });
  };
