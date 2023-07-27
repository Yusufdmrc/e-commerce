import { Dispatch } from "redux";
import { SEARCH_ACTION } from "../constants/ActionTypes";
import { ProductInfo } from "../../Types/Type";

interface SearchAction {
  type: typeof SEARCH_ACTION;
  payload: ProductInfo[];
}

export const searchAction =
  (keyword: string) => async (dispatch: Dispatch<SearchAction>) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: ProductInfo[] = await response.json();

    const filteredData = data.filter(
      (item) =>
        item.title.includes(keyword) ||
        item.description.includes(keyword) ||
        item.category.includes(keyword)
    );

    dispatch({
      type: SEARCH_ACTION,
      payload: filteredData,
    });
  };
