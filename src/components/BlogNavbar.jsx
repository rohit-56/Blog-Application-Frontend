import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { NavLink as ReactNavLink } from "react-router-dom";
import { doLogOut, isLoggedIn } from "./services/loggedIn";

const BlogNavbar = () => {
  //create state to handle dropdown for content for navbar when screen size is small
  const [isOpen, setIsOpen] = useState(false);

  //function to handle the navbar toggler when screen size is small
  const toggle = () => setIsOpen(!isOpen);

  //create state to check user is logged in or not
  const [userIn, setUserIn] = useState(false);

  const handleLogout = () => {
    doLogOut(() => {
      console.log("User is Logout");
    });
    setUserIn(false);
  };

  //When we use useEffect and pass empty array that means the function will only execute every time when page loads
  useEffect(() => {
    setUserIn(isLoggedIn());
  }, [userIn]);

  return (
    <div>
      <Navbar color="info" dark expand="md">
        <NavbarBrand tag={ReactNavLink} to="/">
          MyBlog
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {userIn && (
            <>
              <Nav className="mx-2" navbar>
                <NavItem>
                  <NavLink tag={ReactNavLink} to="/user/home">
                    Home
                  </NavLink>
                </NavItem>
              </Nav>
            </>
          )}
          <Nav className="me-auto mx-2" navbar>
            <NavItem>
              <NavLink tag={ReactNavLink} to="/">
                Feeds
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Services</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem>Linkedln</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {userIn && (
            <>
              <Nav className="mx-2" navbar>
                <NavLink
                  tag={ReactNavLink}
                  to="/user/addpost"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  Write
                </NavLink>
                <NavLink
                  tag={ReactNavLink}
                  to="/login"
                  onClick={handleLogout}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  Logout
                </NavLink>
              </Nav>
            </>
          )}

          {!userIn && (
            <>
              <Nav navbar>
                <NavLink tag={ReactNavLink} to="/login">
                  Login
                </NavLink>

                <NavLink tag={ReactNavLink} to="/signup">
                  Signup
                </NavLink>
              </Nav>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default BlogNavbar;
