import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

// Selector to return the status of the cart
export const isCartOpen = createSelector(
  [selectCartReducer],
  (cartDisplayReducer) => cartDisplayReducer.cartDisplay
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartDisplayReducer) => cartDisplayReducer.cartItems
);

// Selector to return total items in cart.
export const selectTotalItemsInCart = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0)
);

// selector to return cart total
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);
