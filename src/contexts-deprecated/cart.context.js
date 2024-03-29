import { createContext, useEffect, useReducer, useState } from "react";

// const updateCartItem = (cartItems, productToUpdate, quantityUpdate) => {
//   // find if cartItem contains the item
//   let filteredCartItem = cartItems.find((cartItem) => {
//     return cartItem.id === productToUpdate.id;
//   });
//   //if present -> increment the quantity
//   if (filteredCartItem) {
//     // filteredCartItem.quantity += 1;

//     // NOTE : Should be a new array , else components depending on the context does not refresh.
//     // inorder to refresh , the props should be a new object.
//     return cartItems.map((cartItem) => {
//       if (cartItem.id === productToUpdate.id) {
//         let updatedQuantity = cartItem.quantity + quantityUpdate;
//         if (updatedQuantity > 0) {
//           return { ...cartItem, quantity: updatedQuantity };
//         } else {
//           return undefined;
//         }
//       } else {
//         return cartItem;
//       }
//     });
//   }
//   // if not present -> add to cartItems array.
//   // cartItems.push({ ...productToAdd, quantity: 1 });
//   // NOTE : Should be a new array , else context does not refresh.
//   return [...cartItems, { ...productToUpdate, quantity: 1 }];
// };

// export const CartContext = createContext({
//   cartDisplay: false,
//   setCartDisplay: () => null,
//   cartItems: [],
//   addToCartItem: () => {},
//   totalItemsInCart: 0,
// });

// export const CartDisplayProvider = ({ children }) => {
//   const [cartDisplay, setCartDisplay] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalItemsInCart, setTotalItemsInCart] = useState(0);

//   // runs the effect whenever there is a change in cartItems state.i rmebe
//   useEffect(() => {
//     const newTotalItemInCart = cartItems.reduce((total, cartItem) => {
//       return total + cartItem.quantity;
//     }, 0);
//     setTotalItemsInCart(newTotalItemInCart);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     let updatedCartItems = updateCartItem(cartItems, productToAdd, 1);
//     console.log("cartItems from context", updatedCartItems);
//     setCartItems(updatedCartItems);
//     // better way is to use effect
//     // setTotalItemsInCart(totalItemsInCart + 1);
//   };

//   const removeItemFromCart = (productToRemove) => {
//     let updatedCartItems = updateCartItem(cartItems, productToRemove, -1);
//     let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
//     console.log("cartItems from context after removal", filteredCartItems);
//     setCartItems(filteredCartItems);
//   };

//   const removeProductFromCart = (productToRemove) => {
//     let updatedCartItems = updateCartItem(
//       cartItems,
//       productToRemove,
//       -productToRemove.quantity
//     );
//     let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
//     console.log(
//       "cartItems from context after product removal",
//       filteredCartItems
//     );
//     setCartItems(filteredCartItems);
//   };

//   const value = {
//     cartDisplay,
//     setCartDisplay,
//     addItemToCart,
//     cartItems,
//     totalItemsInCart,
//     removeItemFromCart,
//     removeProductFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

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

export const CartContext = createContext({
  cartDisplay: false,
  setCartDisplay: () => null,
  cartItems: [],
  addToCartItem: () => {},
  totalItemsInCart: 0,
});

const CART_CONTEXT_CONSTANTS = {
  SET_CART_ITEM: "SET_CART_ITEM",
  TOGGLE_CART_DISPLAY: "TOGGLE_CART_DISPLAY",
};

const INITIAL_STATE = {
  cartDisplay: false,
  cartItems: [],
  totalItemsInCart: 0,
};

const cartItemReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_CONTEXT_CONSTANTS.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_CONTEXT_CONSTANTS.TOGGLE_CART_DISPLAY: {
      return {
        ...state,
        cartDisplay: payload,
      };
    }
    default:
      throw new Error(`Invalid action type ${type} in cartItemReducer`);
  }
};

export const CartDisplayProvider = ({ children }) => {
  // const [cartDisplay, setCartDisplay] = useState(null);

  // const [cartItems, setCartItems] = useState([]);

  // const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const [state, dispatch] = useReducer(cartItemReducer, INITIAL_STATE);
  const { cartDisplay, cartItems, totalItemsInCart } = state;

  const updateCartItemReducer = (newCartItems) => {
    const newTotalItemInCart = newCartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    // console.log("newTotalItemInCart : " + newTotalItemInCart);
    dispatch({
      type: CART_CONTEXT_CONSTANTS.SET_CART_ITEM,
      payload: {
        cartItems: newCartItems,
        totalItemsInCart: newTotalItemInCart,
      },
    });
  };

  const setCartDisplay = (newCartDisplay) => {
    dispatch({
      type: CART_CONTEXT_CONSTANTS.TOGGLE_CART_DISPLAY,
      payload: newCartDisplay,
    });
  };

  // runs the effect whenever there is a change in cartItems state.i rmebe
  // useEffect(() => {
  //   const newTotalItemInCart = cartItems.reduce((total, cartItem) => {
  //     return total + cartItem.quantity;
  //   }, 0);
  //   setTotalItemsInCart(newTotalItemInCart);
  // }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    let updatedCartItems = updateCartItem(cartItems, productToAdd, 1);
    updateCartItemReducer(updatedCartItems);
    // better way is to use effect
    // setTotalItemsInCart(totalItemsInCart + 1);
  };

  const removeItemFromCart = (productToRemove) => {
    let updatedCartItems = updateCartItem(cartItems, productToRemove, -1);
    let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
    updateCartItemReducer(filteredCartItems);
  };

  const removeProductFromCart = (productToRemove) => {
    let updatedCartItems = updateCartItem(
      cartItems,
      productToRemove,
      -productToRemove.quantity
    );
    let filteredCartItems = updatedCartItems.filter((cartItem) => cartItem);
    console.log("filteredCartItems " + filteredCartItems.length);
    updateCartItemReducer(filteredCartItems);
  };

  const value = {
    cartDisplay,
    setCartDisplay,
    addItemToCart,
    cartItems,
    totalItemsInCart,
    removeItemFromCart,
    removeProductFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
