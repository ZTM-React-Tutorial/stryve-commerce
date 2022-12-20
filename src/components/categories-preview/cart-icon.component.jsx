import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartDisplay, setCartDisplay, totalItemsInCart } =
    useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        // console.log("On CLick", cartDisplay);
        const newCartDisplay = !cartDisplay;
        // console.log("newCartDisplay", newCartDisplay);
        setCartDisplay(newCartDisplay);
      }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
  );
};

export default CartIcon;
