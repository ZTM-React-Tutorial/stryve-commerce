// import { useContext } from "react";
import { useSelector } from "react-redux";
// import { CartContext } from "../../contexts/cart.context";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import "./checkout.styles.scss";
import "./checkout.styles";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  // let { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // commented in lieu of styled components
  // return (
  //   <div className="checkout-container">
  //     <div className="checkout-header">
  //       <span>Product</span>
  //       <span>Description</span>
  //       <span>Quantity</span>
  //       <span>Price</span>
  //       <span>Remove</span>
  //     </div>
  //     {cartItems.map((cartItem) => (
  //       <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  //     ))}
  //     {/* <div className="total">
  //       Total: ${" "}
  //       {cartItems.reduce((total, item) => {
  //         return total + item.quantity * item.price;
  //       }, 0)}
  //     </div> */}
  //     <div className="total">Total: $ {cartTotal}</div>
  //   </div>
  // );

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {/* <div className="total">
        Total: ${" "}
        {cartItems.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0)}
      </div> */}
      <Total>Total: $ {cartTotal}</Total>

      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
