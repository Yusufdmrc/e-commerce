import thunk from "redux-thunk";
import { CategoryState, categoryReducer } from "./reducers/category";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { drawerReducer, DrawerState } from "./reducers/drawer";
import { productDataReducer, ProductDataState } from "./reducers/productData";
import { productInfoReducer, ProductInfoState } from "./reducers/productInfo";
import { basketReducer } from "./reducers/basket";
import { searchReducer } from "./reducers/search";
import { ProductData } from "../Types/Type";
import authReducer from "./reducers/auth";

interface BasketState {
  basketItems: ProductData[];
}

interface SearchState {
  search: ProductData[];
}

interface AuthState {
  loggedIn: boolean;
}

export interface RootState {
  drawer: DrawerState;
  productData: ProductDataState;
  productInfo: ProductInfoState;
  basket: BasketState;
  search: SearchState;
  category: CategoryState;
  auth: AuthState;
}

const storedBasketItems = localStorage.getItem("basketItems");
const basketItems: ProductData[] = storedBasketItems
  ? JSON.parse(storedBasketItems)
  : [];

const initialState = {
  basket: { basketItems },
  category: { categories: null },
};

const reducers = combineReducers({
  drawer: drawerReducer,
  productData: productDataReducer,
  productInfo: productInfoReducer,
  basket: basketReducer,
  search: searchReducer,
  category: categoryReducer,
  auth: authReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
