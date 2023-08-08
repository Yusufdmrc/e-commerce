import { Dispatch } from "redux";
import { SEARCH_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { SearchAction } from "../constants/ActionTypes";
import { searchProducts } from "../apiService";

export const searchAction =
  (key: string) => async (dispatch: Dispatch<SearchAction>) => {
    try {
      const filteredData: ProductData[] = await searchProducts(key);
      dispatch({
        type: SEARCH_ACTION,
        payload: filteredData,
      });
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };
