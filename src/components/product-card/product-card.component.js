// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  let { name, imageUrl, price } = product;
  // let { addItemToCart } = useContext(CartContext);
  let dispatch = useDispatch();
  let cartItems = useSelector(selectCartItems);

  const onAddToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={onAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
