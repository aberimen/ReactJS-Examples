import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart/Cart";

const NavBar = ({ cart }) => {

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>

        <Nav className="mr-auto" navbar>
          <Nav.Item>
            <Nav.Link href="#">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar bg="dark" variant="dark">
          <Nav.Item>
            <Nav.Link href="#">
              
              <Cart cart={cart} />
            </Nav.Link>

          </Nav.Item>

          { cart.length > 0 && <Nav.Item>
           
          </Nav.Item>}

        </Navbar>
      </Navbar>
    </div>
  );
};

export default NavBar;
