import { SEARCH_ACTION } from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

interface SearchState {
  search: ProductData[];
}

interface SearchAction {
  type: typeof SEARCH_ACTION;
  payload: ProductData[];
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
