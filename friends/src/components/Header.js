import React from "react";
import { Link } from "react-router-dom";
import {
  A,
  Navbar,
  Container,
  NavbarBrand,
  Collapse,
  Nav,
  NavLink
} from "@bootstrap-styled/v4";

const Header = () => {
  return (
    <Navbar color='faded' light toggleable='lg'>
      <Container>
        <Collapse navbar>
          <Nav navbar className='mr-auto'>
            <NavbarBrand tag={A}>
              <NavLink>
                <Link to='/login'>Login</Link>
              </NavLink>
            </NavbarBrand>
            <NavbarBrand>
              <NavLink>
                <Link to='/Friends'>Friends page</Link>{" "}
              </NavLink>
            </NavbarBrand>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
