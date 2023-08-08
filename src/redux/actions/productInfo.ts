import { Dispatch } from "redux";
import { PRODUCT_INFO_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { GetProductInfoAction } from "../constants/ActionTypes";
import { getProductById } from "../apiService";

export const productInfoAction =
  (id: number) => async (dispatch: Dispatch<GetProductInfoAction>) => {
    try {
      const data: ProductData = await getProductById(id);
      dispatch({ type: PRODUCT_INFO_ACTION, payload: data });
    } catch (error) {
      console.error("Error fetching product info:", error);
    }
  };
