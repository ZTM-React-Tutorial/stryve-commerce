import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import Button from "../button/button.component";
import "./checkout-item.styles.scss";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  let dispatch = useDispatch();
  let cartItems = useSelector(selectCartItems);

  let { imageUrl, name, quantity, price } = cartItem;
  // let { addItemToCart, removeItemFromCart, removeProductFromCart } =
  //   useContext(CartContext);

  // const incrementItemQuantity = () => {
  //   addItemToCart(cartItem);
  // };

  // const decrementItemQuantity = () => {
  //   removeItemFromCart(cartItem);
  // };

  // const removeProduct = () => {
  //   removeProductFromCart(cartItem);
  // };

  const incrementItemQuantity = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const decrementItemQuantity = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const removeProduct = () => {
    dispatch(removeProductFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <img className="image-container" src={imageUrl} alt={`${name}`} />
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow" onClick={decrementItemQuantity}>
          {"<"}
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={incrementItemQuantity}>
          {">"}
        </div>
      </div>
      <div className="price">{price}</div>
      <Button className="remove" onClick={removeProduct}>
        X
      </Button>
    </div>
  );
};

export default CheckoutItem;
