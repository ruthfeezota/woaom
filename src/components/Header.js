import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {  
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i.ibb.co/P655TxT/Woaom-Logo-2.png"
        />
      </Link>

      <Link to="/">
      </Link>
      
{/* 
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
  */}

   
    <div className="header__nav">
      <div className="header__option">
            <span className="header__optionLineTwo">MANUFACTURERS</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">OPERATIONS</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">AfCFTA</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">BLOG</span>
      </div>

    </div>


      <div className="header__nav_1">
        
          <div className="header__option">
            <span className="header__optionLineTwo">Sign In</span>
          </div>

        
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;