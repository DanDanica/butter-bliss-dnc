import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./index.css";
const Navbar = () => {
  return (
    <>
      <Nav className="NavCont">
        <Bars />

        <NavMenu className="NavStyle">
          <p className="logo">asdasd</p>

          <NavLink to="/hello" activeStyle>
            Hello
          </NavLink>
          <NavLink to="/menu" activeStyle>
            Menu
          </NavLink>
          <NavLink to="/gallery" activeStyle>
            Gallery
          </NavLink>
          <NavLink to="/connection" activeStyle>
            Connection
          </NavLink>

          {/* <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
