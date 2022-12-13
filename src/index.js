import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartDisplayProvider } from "./contexts/cart.context";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* React redux component that servers as a Redux Provider for sharing redux's context. */}
    <Provider store={store}>
      <BrowserRouter>
        {/* UserProvider is a userContext which allowed us to share data.. With Reduc , there one single context that is shared by all components. commenting as we are using redux for now on.  */}
        {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
        {/* <CartDisplayProvider> */}
        <App />
        {/* </CartDisplayProvider> */}
        {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
