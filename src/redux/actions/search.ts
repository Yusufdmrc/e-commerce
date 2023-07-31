import { Dispatch } from "redux";
import { SEARCH_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

export interface SearchAction {
  type: typeof SEARCH_ACTION;
  payload: ProductData[];
}

export const searchAction =
  (key: string) => async (dispatch: Dispatch<SearchAction>) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: ProductData[] = await response.json();

    const filteredData = data.filter(
      (item) =>
        item.title.includes(key) ||
        item.description.includes(key) ||
        item.category.includes(key)
    );

    dispatch({
      type: SEARCH_ACTION,
      payload: filteredData,
    });
  };
