// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { CartContext } from "../../contexts/cart.context";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  // let { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {/* <div className="total">
        Total: ${" "}
        {cartItems.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)}
      </div> */}
      <div className="total">Total: $ {cartTotal}</div>
    </div>
  );
};

export default Checkout;
