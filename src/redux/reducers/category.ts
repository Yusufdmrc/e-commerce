import { CATEGORY_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

export interface CategoryState {
  category: ProductData | null;
}

interface CategoryActionTypes {
  type: typeof CATEGORY_ACTION;
  payload: ProductData | null;
}

const initialState: CategoryState = {
  category: [],
};

export const categoryReducer = (
  state: CategoryState = initialState,
  action: CategoryActionTypes
): CategoryState => {
  switch (action.type) {
    case CATEGORY_ACTION:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
