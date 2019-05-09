import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink as BstNavLink,
} from "reactstrap";
import "./AppNavbar.css"

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <div>
        <div>
          <Navbar color="primary" dark expand="md" className="mb-5">
            <NavbarBrand tag={NavLink} to="/">
              Payment App
					</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink exact to="/" className="nav-link">
                    Home
                          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to="/payments" className="nav-link">
                    View Payments
                  </NavLink>
                </NavItem>
                  <NavItem>
                    <NavLink to="/add" className="nav-link">
                      IMAGE
                        </NavLink>
                  </NavItem>
                {/* <NavItem> */}
                {/* </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default AppNavbar;
