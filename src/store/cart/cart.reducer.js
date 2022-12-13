import { CART_CONTEXT_CONSTANTS } from "./cart.action.types";

const INITIAL_STATE = {
  cartDisplay: false,
  cartItems: [],
};

export const CartItemReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_CONTEXT_CONSTANTS.SET_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_CONTEXT_CONSTANTS.TOGGLE_CART_DISPLAY: {
      return {
        ...state,
        cartDisplay: payload,
      };
    }
    default:
      return state;
  }
};
