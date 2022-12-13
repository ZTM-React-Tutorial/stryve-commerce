import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { CategoriesReducer } from "./categories/categories.reducer";
import { CartItemReducer } from "./cart/cart.reducer";

// This the root reducer that combines smaller reducers.
export const rootReducer = combineReducers({
  user: userReducer,
  categories: CategoriesReducer,
  cart: CartItemReducer,
});
