import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  ADD_BASKET_ACTION,
  REMOVE_BASKET_ACTION,
} from "../constants/ActionTypes";
import { ProductInfo } from "../../Types/Type";
import { RootState } from "../store";

interface BasketAction {
  type: typeof ADD_BASKET_ACTION;
  payload: ProductInfo;
}

export const basketAction =
  (id: number, amount: number) =>
  async (dispatch: Dispatch<BasketAction>, getState: () => RootState) => {
    const response: AxiosResponse<ProductInfo> = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    const data = response.data;

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
  };

export const removeBasket =
  (productId: number) => (dispatch: Dispatch, getState: () => RootState) => {
    dispatch({ type: REMOVE_BASKET_ACTION, payload: productId });
    const basketItems = getState().basket.basketItems;
    localStorage.setItem("basketItems", JSON.stringify(basketItems || []));
  };
