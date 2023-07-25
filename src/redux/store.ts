import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { drawerReducer, DrawerState } from "./reducers/drawer";
import { productDataReducer, ProductDataState } from "./reducers/productData";

export interface RootState {
  drawer: DrawerState;
  productData: ProductDataState;
}

let initialState = {};

const reducers = combineReducers({
  drawer: drawerReducer,
  productData: productDataReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
