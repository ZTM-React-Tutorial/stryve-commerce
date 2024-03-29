import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// import { ReactComponent as StryveLogo } from "../../assets/StryveLogo.svg";
import CartIconDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
// import { CartContext } from "../../contexts/cart.context";
// import { UserContext } from "../../contexts/user.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// commented css in lieu of using styled components
// import "./navigation.styles.scss";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  Logo,
  LogoContainer,
} from "./navigation.styles";
import { isCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  // read UserContext from context. -- commented in lieu of redux implementation
  // const { currentUser } = useContext(UserContext);

  // Redux implmentation - useSelector hook to read currentUser from redux state.
  // As the state updates the component also updates.
  // console.log("Re-rendering Navingation component");
  const currentUser = useSelector(selectCurrentUser);
  const cartDisplay = useSelector(isCartOpen);

  // console.log("Current User : ", currentUser);

  // const { cartDisplay } = useContext(CartContext);

  // const signOutHandler = async () => {
  //   const response = await signOutUser();
  //   console.log(response);
  //   // setCurrentUser(null);
  // };

  return (
    //  react by default needs to return a single parent element.. Fragment is a react component that return no html element.
    // <Fragment>
    //   <div className="navigation">
    //     <Link className="logo-container" to="/">
    //       <StryveLogo className="logo" />
    //     </Link>
    //     <div className="nav-links-container">
    //       <Link className="nav-link" to="/shop">
    //         SHOP
    //       </Link>
    //       {currentUser ? (
    //         <span className="nav-link" onClick={signOutUser}>
    //           SIGN OUT
    //         </span>
    //       ) : (
    //         <Link className="nav-link" to="/sign-in">
    //           SIGN IN
    //         </Link>
    //       )}
    //       <CartIcon />
    //     </div>
    //     {cartDisplay && <CartIconDropdown />}
    //   </div>
    //   {/* Outlet indicates nested components based on the Route definition */}
    //   <Outlet />
    // </Fragment>

    // Using styled-components --> CSS is defined as a component using JS.
    <Fragment>
      {/* NavigationContainer is styled component ,, the defination indcates its a div (checknavigation.styles.jsx),
      styled components create a wrapper on top of default JSX/HTML element with styles defination. */}
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {/* Navlink below is a tyled component which in the definition wraps a dic, use 'as' to define a different HTML/JSX element */}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/sign-in">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {cartDisplay && <CartIconDropdown />}
      </NavigationContainer>
      {/* Outlet indicates nested components based on the Route definition */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
