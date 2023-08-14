import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import Badge from "react-bootstrap/Badge";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux/es/hooks/useSelector";
import AlertComponent from "./AlertComponent";
import { status } from "../utils/constants";

function Navigationbar() {
  const cartProducts = useSelector((state) => state.cart);
  const productStatus = useSelector((state) => state.products.status);

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <NavLink to="/" className="navbar">
            Shopify
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="products" className="navbar">
                Products
              </NavLink>
            </Nav>
            <NavLink to="cart" className="navbar">
              <LuShoppingCart size={25} />
              <Badge pill bg="primary ms-1">
                {cartProducts.length}
              </Badge>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {productStatus === status.FAILED && <AlertComponent />}
    </>
  );
}

export default Navigationbar;
