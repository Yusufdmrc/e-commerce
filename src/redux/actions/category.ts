import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { CATEGORY_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { productDataAction } from "./productData";

export interface CategoryAction {
  type: typeof CATEGORY_ACTION;
  payload: ProductData[];
}

export const getCategoryAction =
  (category: string) => async (dispatch: Dispatch<CategoryAction>) => {
    const response: AxiosResponse<ProductData[]> = await axios.get<
      ProductData[]
    >(`https://fakestoreapi.com/products/category/${category}`);
    const data = response.data;

    dispatch({ type: CATEGORY_ACTION, payload: data });
    dispatch(productDataAction());
  };

export const categoryAction =
  () => async (dispatch: Dispatch<CategoryAction>) => {
    const response: AxiosResponse<string[]> = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    const data = response.data;

    dispatch({ type: CATEGORY_ACTION, payload: data });
  };
