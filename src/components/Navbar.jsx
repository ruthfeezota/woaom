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
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">AfCFTA</a>
        <a href="">Manufacturers</a>
        <a href="">How It Works</a>
        <a href="">Contact</a>
        <a href="">
          {/* <BsCart2 className="navbar-cart-icon" /> */}
        </a>
        <Authentication />

      </div>
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
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
{/* import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

function newNavbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
        <img width="260px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>


   //*comment here
      <Navbar bg="black" variant="dark" fixed="top" className='py-4 h5'>
        <Container>
        <Navbar.Brand >
        <Link to="/">
        <img width="260px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </Link>
        </Navbar.Brand>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">MANUFATURES</Nav.Link>
            <Nav.Link href="/">REGIONS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" className="text-primary">SIGNIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    //
    </>



  );
}

export default newNavbar; */}