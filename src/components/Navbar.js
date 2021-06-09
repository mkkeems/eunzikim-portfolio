import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import eunzilogo from "../assets/images/eunzilogo.svg";

const Wrap = styled.div`
  border-bottom: 1px solid black;
  padding: ${getvw(24)} ${getvw(260)};

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-logo {
      height: ${getvw(27)};
    }

    .nav-right {
      display: flex;
      align-items: center;
    }

    .nav-link {
      margin-left: ${getvw(100)};
      text-decoration: none;
      color: ${colors.black};
    }
  }
`;

// TODO: Fix Font Type

const Navbar = () => {
  return (
    <Wrap>
      <div className="nav-content">
        <img src={eunzilogo} alt="EunziLogo" className="nav-logo" />
        <div className="nav-right">
          <NavLink
            to="/work"
            exact
            // activeClassName="active-link"
            className="nav-link"
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            exact
            // activeClassName="active-link"
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            exact
            // activeClassName="active-link"
            className="nav-link"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </Wrap>
  );
};

export default Navbar;
