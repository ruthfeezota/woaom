/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Authentication from "./Authentication";
import { ShoppingCart } from "phosphor-react";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  



  const menuOptions = [
    {
      text: "AfCFTA",
      icon: <HomeIcon />,
    },
    {
      text: "Manufacturers",
      icon: <InfoIcon />,
    },
    {
      text: "Our Work",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },

  ];



  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Woaom's Logo" />
      </div>
      <div className="navbar-links-container">
        <a href="/">AfCFTA</a>
        <a href="/">MANUFACTURERS</a>
        <a href="/">HOW IT WORKS</a>
        <a href="/">CONTACT</a>
        </div>
             
          <a href="/cart" classname="navbar-links-container">
          <ShoppingCart size={25}/>
        </a>
        
        <Authentication />
     
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))},
          </List>
          <Divider />
        </Box>
      </Drawer>
      
    </nav>
  );
};

export default Navbar;
