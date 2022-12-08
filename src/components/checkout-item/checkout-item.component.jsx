import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  let { imageUrl, name, quantity, price } = cartItem;
  let { addItemToCart, removeItemFromCart, removeProductFromCart } =
    useContext(CartContext);

  const incrementItemQuantity = () => {
    addItemToCart(cartItem);
  };

  const decrementItemQuantity = () => {
    removeItemFromCart(cartItem);
  };

  const removeProduct = () => {
    removeProductFromCart(cartItem);
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
