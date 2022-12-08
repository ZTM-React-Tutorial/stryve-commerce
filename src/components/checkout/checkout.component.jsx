import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  let { cartItems } = useContext(CartContext);

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
      <div className="total">
        Total: ${" "}
        {cartItems.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)}
      </div>
    </div>
  );
};

export default Checkout;
