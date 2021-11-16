import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import eunzilogo from "../assets/images/eunzilogo.svg";

const Wrap = styled.div`
  &.work-nav {
    background-color: white;
  }

  border-bottom: 1px solid black;
  padding: ${getvw(24)} ${getvw(260)};
  min-height: 45px;

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-logo {
      height: 28px;
      transform: translateY(3px);
    }

    .nav-right {
      display: flex;
      align-items: center;
    }

    .scroll-nav-link {
      cursor: pointer;
    }

    .nav-link {
      margin-left: ${getvw(100)};
      text-decoration: none;
      color: ${colors.black};
    }
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    background-color: #f2f2f2;
    width: 100%;
    z-index: 9999;
    padding: 10px 30px;

    .nav-content {
      .nav-link {
        font-size: 14px;
      }
      .nav-logo {
        height: 18px;
      }
    }
  }
`;

// TODO: Fix Font Type
// const scrollToWork = () => {
//   const element = document.getElementById("work-section");
//   element.scrollIntoView({ behavior: "smooth" });
// };

const Navbar = () => {
  return (
    <Wrap>
      <div className="nav-content">
        <NavLink to="/" exact>
          <img src={eunzilogo} alt="EunziLogo" className="nav-logo" />
        </NavLink>
        <div className="nav-right">
          <NavHashLink
            activeClass="active"
            to="/#work-section"
            // onClick={scrollToWork(location)}
            smooth={true}
            // className="scroll-nav-link"
            className="nav-link"
          >
            Projects
          </NavHashLink>
          <NavLink
            to="/about"
            exact
            // activeClassName="active-link"
            className="nav-link"
          >
            About
          </NavLink>
          <a href={`mailto:eunzoaz@gmail.com`} className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </Wrap>
  );
};

export default Navbar;
