import { SEARCH_ACTION } from "../constants/ActionTypes";
import { ProductInfo } from "../../Types/Type";

interface SearchState {
  search: ProductInfo[];
}

interface SearchAction {
  type: typeof SEARCH_ACTION;
  payload: ProductInfo[];
}

type SearchActionTypes = SearchAction;

const initialState: SearchState = {
  search: [],
};

export const searchReducer = (
  state: SearchState = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case SEARCH_ACTION:
      return {
        search: action.payload,
      };
    default:
      return state;
  }
};
