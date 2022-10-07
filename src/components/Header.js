import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-bootstrap";

const Header = () => {
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
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon
              fontSize="large"
              style={{ color: "white", cursor: "pointer" }}
            />
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
