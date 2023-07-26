import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { drawerReducer, DrawerState } from "./reducers/drawer";
import { productDataReducer, ProductDataState } from "./reducers/productData";
import { productInfoReducer, ProductInfoState } from "./reducers/productInfo";

export interface RootState {
  drawer: DrawerState;
  productData: ProductDataState;
  productInfo: ProductInfoState;
}

let initialState = {};

const reducers = combineReducers({
  drawer: drawerReducer,
  productData: productDataReducer,
  productInfo: productInfoReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
