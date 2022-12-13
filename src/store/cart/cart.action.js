import { CART_CONTEXT_CONSTANTS } from "./cart.action.types";

const updateCartItem = (cartItems, productToUpdate, quantityUpdate) => {
  // find if cartItem contains the item
  let filteredCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToUpdate.id;
  });
  //if present -> increment the quantity
  if (filteredCartItem) {
    // filteredCartItem.quantity += 1;

    // NOTE : Should be a new array , else components depending on the context does not refresh.
    // inorder to refresh , the props should be a new object.
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToUpdate.id) {
        let updatedQuantity = cartItem.quantity + quantityUpdate;
        if (updatedQuantity > 0) {
          return { ...cartItem, quantity: updatedQuantity };
        } else {
          return undefined;
        }
      } else {
        return cartItem;
      }
    });
  }
  // if not present -> add to cartItems array.
  // cartItems.push({ ...productToAdd, quantity: 1 });
  // NOTE : Should be a new array , else context does not refresh.
  return [...cartItems, { ...productToUpdate, quantity: 1 }];
};

export const setCartDisplay = (newCartDisplay) => {
  return {
    type: CART_CONTEXT_CONSTANTS.TOGGLE_CART_DISPLAY,
    payload: newCartDisplay,
  };
};

export const addItemToCart = (cartItems, productToAdd) => {
  let updatedCartItems = updateCartItem(cartItems, productToAdd, 1);
  return {
    type: CART_CONTEXT_CONSTANTS.SET_CART_ITEM,
    payload: updatedCartItems,
  };
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  let updatedCartItems = updateCartItem(cartItems, productToRemove, -1);
  let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
  return {
    type: CART_CONTEXT_CONSTANTS.SET_CART_ITEM,
    payload: filteredCartItems,
  };
};

export const removeProductFromCart = (cartItems, productToRemove) => {
  let updatedCartItems = updateCartItem(
    cartItems,
    productToRemove,
    -productToRemove.quantity
  );
  let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
  return {
    type: CART_CONTEXT_CONSTANTS.SET_CART_ITEM,
    payload: filteredCartItems,
  };
};
