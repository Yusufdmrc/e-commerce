import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { CATEGORY_ACTION } from "../constants/ActionTypes";

export interface getCategoryAction {
  type: typeof CATEGORY_ACTION;
  payload: string[];
}

export const categoryAction =
  () => async (dispatch: Dispatch<getCategoryAction>) => {
    const response: AxiosResponse<string[]> = await axios.get<string[]>(
      "https://fakestoreapi.com/products/categories"
    );
    const data = response.data;

    dispatch({ type: CATEGORY_ACTION, payload: data });
  };
