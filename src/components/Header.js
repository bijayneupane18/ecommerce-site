import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-bootstrap";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
          </Nav>
          <Badge
            badgeContent={2}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon
              fontSize="large"
              style={{ color: "white", cursor: "pointer" }}
            />
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "22rem", padding: 10, position: "relative" }}
          >
            <CloseIcon
              onClick={handleClose}
              fontSize="small"
              style={{
                position: "absolute",
                top: 2,
                right: 10,
                cursor: "pointer",
              }}
            />
            <p style={{ fontSize: 22 }}>Cart is empty</p>
            <img
              className="enptycart_img"
              style={{ height: 100, width: 180, padding: 10 }}
              src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif"
              alt=""
            />
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
