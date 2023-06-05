import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
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
            <span className="header__optionLineTwo">Manufacturers</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">Regions</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">AfCFTA</span>
      </div>

      <div className="header__option">
            <span className="header__optionLineTwo">Blog</span>
      </div>
    </div>


      <div className="header__nav_1">
        
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
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