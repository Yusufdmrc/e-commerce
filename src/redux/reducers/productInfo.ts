import { PRODUCT_INFO_ACTION } from "../constants/ActionTypes";
import { ProductInfo } from "../../Types/Type";

export interface ProductInfoState {
  productInfo: ProductInfo | null;
}

interface ProductInfoActionTypes {
  type: typeof PRODUCT_INFO_ACTION;
  payload: ProductInfo | null;
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
