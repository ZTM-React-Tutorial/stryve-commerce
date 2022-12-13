import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import "./categories.styles.scss";
import Checkout from "./components/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { setCurrentUser } from "./store/user/user.action";

// can include as a cpmpponent like <Navigation/>
// const Navigation = () => {
//   return <h1>This is the navigation bar</h1>;
// };

// const Shop = () => {
//   return <h1>Shopping</h1>;
// };

// const App = () => {

//   return (
//     <Routes>
//       <Route path="/" element={<Navigation />}>
//         {/* index indicates that the <Home/> should be displayed when the / path is used */}
//         <Route index element={<Home />}></Route>
//         {/* Match parent path "/" and then "shop" */}
//         {/* * to match any path param */}
//         <Route path="shop/*" element={<Shop />}></Route>
//         <Route path="sign-in" element={<Authentication />}></Route>
//         <Route path="checkout" element={<Checkout />}></Route>
//       </Route>
//     </Routes>
//   );
// };

// With Redux implementation

// As the UserProvider component is now removed from within index.js , UserProvider will not be invoked..
// We will now need to move the code from userProvider to App.js as the userProvider wrapped App.js earlier.
const App = () => {
  // react hook for redux that gives an handle to the dispatch function that inturn dispatches an action.
  const dispatch = useDispatch();
  // Run only when the component mounts , hence [].
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      // IMP:::: when auth changes , onAuthChanged listener invoks this call back which inturn setscurrentuser
      // resulting in the dispatch function to be invoked
      // causing the userReducer function defined within useReducer to be invoked , which inturn returns a new state , causing the components to be rerendered.

      // CHANGE as a part of Redux --> there is only single instance dispatch function in redux that is associated with the rootReducer..
      // setCurrentUser is an action generator that returns an action which is dispatch byu the "dispatch" handle created earlier.
      dispatch(setCurrentUser(user));
    });

    // return method called when unMounted
    return unSubscribe;
  }, []);

  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index indicates that the <Home/> should be displayed when the / path is used */}
        <Route index element={<Home />}></Route>
        {/* Match parent path "/" and then "shop" */}
        {/* * to match any path param */}
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="sign-in" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
