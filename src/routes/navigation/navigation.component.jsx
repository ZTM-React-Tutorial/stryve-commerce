import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as StryveLogo } from "../../assets/StryveLogo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-ccontainer" to="/">
          <StryveLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN-IN
          </Link>
        </div>
      </div>
      {/* Outlet indicates nested components based on the Route definition */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
