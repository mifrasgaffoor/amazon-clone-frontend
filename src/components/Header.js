import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
          className="header__logo"
          alt=""
        />
      </Link>
      {/* searchBox */}

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">{user?.email} </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo  header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* bascut icon */}
    </nav>
  );
};

export default Header;
