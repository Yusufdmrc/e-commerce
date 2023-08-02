import {
  ADD_BASKET_ACTION,
  REMOVE_BASKET_ACTION,
} from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";

interface BasketState {
  basketItems: ProductData[];
}

interface AddBasketAction {
  type: typeof ADD_BASKET_ACTION;
  payload: ProductData;
}

interface RemoveBasketAction {
  type: typeof REMOVE_BASKET_ACTION;
  payload: number;
}

type BasketActionTypes = AddBasketAction | RemoveBasketAction;

export const basketReducer = (
  state: BasketState = { basketItems: [] },
  action: BasketActionTypes
): BasketState => {
  switch (action.type) {
    case ADD_BASKET_ACTION:
      // eslint-disable-next-line no-case-declarations
      const item = action.payload;
      // eslint-disable-next-line no-case-declarations
      const availableItem = state.basketItems.find((x) => x.id === item.id);
      if (availableItem) {
        return {
          ...state,
          basketItems: state.basketItems.map((x) =>
            x.id === availableItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, item],
        };
      }
    case REMOVE_BASKET_ACTION:
      return {
        basketItems: state.basketItems.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};
