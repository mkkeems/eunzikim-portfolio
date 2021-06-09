import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";

const Wrap = styled.div`
  border-top: 1px solid ${colors.darkGrey};
  display: flex;
  /* padding: ${getvw(20)} 0; */
  justify-content: space-around;
  flex-shrink: 0;

  .footer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: ${getvw(18)};
    font-weight: 500;
    padding-top: ${getvw(36)};
    padding-bottom: ${getvw(24)};
    margin: 0 ${getvw(306)};
    border-right: 1px solid ${colors.darkGrey};
    border-left: 1px solid ${colors.darkGrey};
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <div className="footer-content">July 2021 © Eunji Kim</div>
    </Wrap>
  );
};

export default Footer;
