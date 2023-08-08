import { ProductData } from "../../Types/Type";

export interface LoginAction {
  type: typeof LOGIN_ACTION;
}

export interface LogoutAction {
  type: typeof LOGOUT_ACTION;
}

export interface AddBasketAction {
  type: typeof ADD_BASKET_ACTION;
  payload: ProductData;
}

export interface RemoveBasketAction {
  type: typeof REMOVE_BASKET_ACTION;
  payload: number;
}

export interface CategoryAction {
  type: typeof CATEGORY_ACTION;
  payload: ProductData[];
}

export interface ProductDataAction {
  type: typeof PRODUCT_DATA_ACTION;
  payload: ProductData[];
}

export interface ProductInfoAction {
  type: typeof PRODUCT_INFO_ACTION;
  payload: ProductData;
}

export interface SearchAction {
  type: typeof SEARCH_ACTION;
  payload: ProductData[];
}

export const DRAWER_ACTION = "DRAWER";
export const PRODUCT_DATA_ACTION = "GET_PRODUCT_DATA";
export const PRODUCT_INFO_ACTION = "GET_INFO";
export const ADD_BASKET_ACTION = "ADD_BASKET";
export const REMOVE_BASKET_ACTION = "REMOVE_BASKET";
export const SEARCH_ACTION = "SEARCH";
export const CATEGORY_ACTION = "CATEGORY";
export const LOGIN_ACTION = "LOGIN_SUCCESS";
export const LOGOUT_ACTION = "LOGOUT_SUCCESS";
