// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
// import Button from "../button/button.component";
// import "./checkout-item.styles.scss";
import "./checkout-item.styles";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItemQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemQuantity}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={removeProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
