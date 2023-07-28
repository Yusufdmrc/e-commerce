import { PRODUCT_INFO_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

export interface ProductInfoState {
  productInfo: ProductData | null;
}

interface ProductInfoActionTypes {
  type: typeof PRODUCT_INFO_ACTION;
  payload: ProductData | null;
}

const initialState: ProductInfoState = {
  productInfo: null,
};

export const productInfoReducer = (
  state: ProductInfoState = initialState,
  action: ProductInfoActionTypes
): ProductInfoState => {
  switch (action.type) {
    case PRODUCT_INFO_ACTION:
      return {
        ...state,
        productInfo: action.payload,
      };

    default:
      return state;
  }
};
