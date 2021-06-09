import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";

const Wrap = styled.div`
  border-top: 1px solid ${colors.darkGrey};
  display: flex;
  padding: ${getvw(20)} 0;
  justify-content: space-around;
  flex-shrink: 0;

  .footer-content {
    display: flex;
    flex-direction: column;
    font-size: ${getvw(18)};
    font-weight: 500;
    margin-top: ${getvw(36)};
    margin-bottom: ${getvw(24)};
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
