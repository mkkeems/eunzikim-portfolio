import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import mailIcon from "../assets/images/mail-icon.png";

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
    font-size: 18px;
    font-weight: 500;
    padding: ${getvw(36)} 0;
    margin: 0 ${getvw(306)};
    border-right: 1px solid ${colors.darkGrey};
    border-left: 1px solid ${colors.darkGrey};

    .footer-icons {
      display: flex;
      align-items: center;
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

  @media only screen and (max-width: 768px) {
    .footer-content {
      margin: 0 30px;

      .footer-icons {
        margin-bottom: 6px;
        width: 50px;
        justify-content: space-between;

        .linkedin-icon {
          height: 16px;
        }
        .mail-icon {
          width: 16px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrap>
      <div className="footer-content">
        <div className="footer-icons">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/eunji-kim-449686b8/" }}
            target="_blank"
          >
            <img
              src={linkedinIcon}
              alt="linkedin icon"
              className="linkedin-icon"
            />
          </Link>

          <a href={`mailto:eunzoaz@gmail.com`}>
            <img src={mailIcon} alt="mail icon" className="mail-icon" />
          </a>
        </div>
        <p>
          {new Date().toLocaleString("en-US", { month: "long" })}{" "}
          {new Date().getFullYear()} © Eunji Kim
        </p>
      </div>
    </Wrap>
  );
};

export default Footer;
