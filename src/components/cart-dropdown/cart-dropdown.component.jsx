import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
// import "./cart-dropdown.styles.scss";

// const CartIconDropdown = () => {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();

//   const goToCheckoutHandler = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div className="cart-dropdown-container">
//       <div className="cart-items">
//         {cartItems.length ? (
//           cartItems.map((cartItem) => (
//             <CartItem key={cartItem.id} item={cartItem} />
//           ))
//         ) : (
//           <span>Your cart is empty</span>
//         )}
//       </div>
//       <Button onClick={goToCheckoutHandler}> checkout </Button>
//     </div>
//   );
// };

// Styled component implements
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
const CartIconDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}> checkout </Button>
    </CartDropDownContainer>
  );
};

export default CartIconDropdown;
