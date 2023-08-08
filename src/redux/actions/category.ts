import { Dispatch } from "redux";
import { CATEGORY_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { CategoryAction } from "../constants/ActionTypes";
import { getAllCategories, getProductsByCategory } from "../apiService";
import { productDataAction } from "./productData";

export const getCategoryAction =
  (category: string) => async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const data: ProductData[] = await getProductsByCategory(category);

      dispatch({ type: CATEGORY_ACTION, payload: data });
      dispatch(productDataAction());
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

export const categoryAction =
  () => async (dispatch: Dispatch<CategoryAction>) => {
    try {
      const data: string[] = await getAllCategories();

      dispatch({ type: CATEGORY_ACTION, payload: data });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
