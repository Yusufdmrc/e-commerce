import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { PRODUCT_INFO_ACTION } from "../constants/ActionTypes";
import { ProductInfo } from "../../Types/Type";

interface GetProductInfoAction {
  type: typeof PRODUCT_INFO_ACTION;
  payload: ProductInfo;
}

export const productInfoAction =
  (id: number) => async (dispatch: Dispatch<GetProductInfoAction>) => {
    const response: AxiosResponse<ProductInfo> = await axios.get<ProductInfo>(
      `https://fakestoreapi.com/products/${id}`
    );
    const data = response.data;

    dispatch({ type: PRODUCT_INFO_ACTION, payload: data });
  };
