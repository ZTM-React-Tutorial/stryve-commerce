// import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import "./cart-icon.styles.scss";
import {
  isCartOpen,
  selectTotalItemsInCart,
} from "../../store/cart/cart.selector";
import { setCartDisplay } from "../../store/cart/cart.action";

const CartIcon = () => {
  // const { cartDisplay, setCartDisplay, totalItemsInCart } =
  //   useContext(CartContext);
  const totalItemsInCart = useSelector(selectTotalItemsInCart);
  const cartDisplay = useSelector(isCartOpen);
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon-container"
      // invoke the action create to generate an action and dispatch this action to the reduc reducers to update the state.
      onClick={
        () => dispatch(setCartDisplay(!cartDisplay))
        // setCartDisplay(newCartDisplay);
      }
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
  );
};

export default CartIcon;
