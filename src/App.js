import { Route, Routes } from "react-router-dom";
import "./categories.styles.scss";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

// can include as a cpmpponent like <Navigation/>
// const Navigation = () => {
//   return <h1>This is the navigation bar</h1>;
// };

const Shop = () => {
  return <h1>Shopping</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index indicates that the <Home/> should be displayed when the / path is used */}
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
