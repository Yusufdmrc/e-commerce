import { Dispatch } from "redux";
import { PRODUCT_DATA_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { ProductDataAction } from "../constants/ActionTypes";
import { getSortProducts } from "../apiService";

export const productDataAction =
  () => async (dispatch: Dispatch<ProductDataAction>) => {
    try {
      const data: ProductData[] = await getSortProducts();
      dispatch({ type: PRODUCT_DATA_ACTION, payload: data });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
