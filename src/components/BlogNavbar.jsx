import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
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
    <Navbar
      expand="md"
      color="#ffffff"
      sticky="top"
      style={{
        backgroundColor: "#e35726",
        borderBottom: "1px solid #ffffff",
        color: "#ffffff !important",
      }}
    >
      <NavbarBrand tag={ReactNavLink} to="/" style={{ color: "#ffffff" }}>
        MyBlog
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {userIn && (
          <>
            <Nav className="mx-2" navbar>
              <NavItem>
                <NavLink
                  tag={ReactNavLink}
                  to="/user/home"
                  style={{ color: "#ffffff" }}
                >
                  Home
                </NavLink>
              </NavItem>
            </Nav>
          </>
        )}
        <Nav className="me-auto mx-2" navbar>
          <NavItem>
            <NavLink tag={ReactNavLink} to="/" style={{ color: "#ffffff" }}>
              Feeds
            </NavLink>
          </NavItem>
          <NavItem
            className="mt-1 mx-3"
            style={{ backgroundColor: "#ffffff", borderRadius: "50px" }}
          >
            <FaSearch className="search-icon mx-1" style={{ color: "grey" }} />
            <input
              className="p-1"
              type="text"
              placeholder="Search By Category"
              style={{
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "50px",
                outline: "none",
              }}
            ></input>
          </NavItem>
        </Nav>

        {userIn && (
          <>
            <Nav className="mx-2" navbar>
              <NavLink
                tag={ReactNavLink}
                to="/user/addpost"
                style={{ cursor: "pointer", color: "#ffffff" }}
              >
                Write
              </NavLink>
              <NavLink
                tag={ReactNavLink}
                to="/login"
                onClick={handleLogout}
                style={{ cursor: "pointer", color: "#ffffff" }}
              >
                Logout
              </NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: "#ffffff" }}>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReactNavLink} to="/user/user-profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Contact Us</DropdownItem>
                  <DropdownItem>Linkedln</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </>
        )}

        {!userIn && (
          <>
            <Nav navbar>
              <NavLink
                tag={ReactNavLink}
                to="/login"
                style={{ color: "#ffffff" }}
              >
                Login
              </NavLink>

              <NavLink
                tag={ReactNavLink}
                to="/signup"
                style={{ color: "#ffffff" }}
              >
                Signup
              </NavLink>
            </Nav>
          </>
        )}
      </Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
