import { Dispatch } from "redux";
import {
  ADD_BASKET_ACTION,
  REMOVE_BASKET_ACTION,
} from "../constants/ActionTypes";
import { ProductData } from "../../Types/Type";
import { RootState } from "../store";
import { getProductById } from "../apiService";

interface BasketAction {
  type: typeof ADD_BASKET_ACTION;
  payload: ProductData;
}

export const basketAction =
  (id: number, amount: number) =>
  async (dispatch: Dispatch<BasketAction>, getState: () => RootState) => {
    try {
      const data: ProductData | null = await getProductById(id);

      if (data) {
        dispatch({
          type: ADD_BASKET_ACTION,
          payload: {
            id: data.id,
            image: data.image,
            title: data.title,
            description: data.description,
            price: data.price,
            amount: amount,
          },
        });

        const basketItems = getState().basket.basketItems;
        localStorage.setItem("basketItems", JSON.stringify(basketItems || []));
      } else {
        console.error(`Product with id ${id} not found.`);
      }
    } catch (error) {
      console.error("Error adding to basket:", error);
    }
  };

export const removeBasket =
  (productId: number) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: REMOVE_BASKET_ACTION, payload: productId });
    const basketItems = getState().basket.basketItems;
    localStorage.setItem("basketItems", JSON.stringify(basketItems || []));
  };
