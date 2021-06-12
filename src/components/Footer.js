import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import mailIcon from "../assets/images/mail-icon.svg";

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

    .footer-icons {
      display: flex;
      margin: auto;
      margin-bottom: ${getvw(36)};
      width: fit-content;

      .linkedin-icon {
        height: ${getvw(28)};
        margin-right: ${getvw(10)};
      }
      .mail-icon {
        width: ${getvw(36)};
        margin-left: ${getvw(10)};
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <div className="footer-content">
        <div className="footer-icons">
          <img
            src={linkedinIcon}
            alt="linkedin icon"
            className="linkedin-icon"
          />
          <img src={mailIcon} alt="mail icon" className="mail-icon" />
        </div>
        <p>July 2021 © Eunji Kim</p>
      </div>
    </Wrap>
  );
};

export default Footer;
