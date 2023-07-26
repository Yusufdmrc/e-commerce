import { PRODUCT_DATA_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

export interface ProductDataState {
  productData: ProductData[];
}

interface ProductDataActionTypes {
  type: typeof PRODUCT_DATA_ACTION;
  payload: ProductData[];
}

const initialState: ProductDataState = {
  productData: [],
};

export const productDataReducer = (
  state: ProductDataState = initialState,
  action: ProductDataActionTypes
): ProductDataState => {
  switch (action.type) {
    case PRODUCT_DATA_ACTION:
      return { ...state, productData: action.payload };

    default:
      return state;
  }
};
