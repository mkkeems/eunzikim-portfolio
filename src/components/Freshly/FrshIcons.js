import React from "react";
import FrshIconImg from "../../assets/images/freshly-page/frsh-icon.png";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f8f2ac;
  padding: ${getvw(115)} ${getvw(480)};
  text-align: center;

  p {
    color: black;
    text-transform: uppercase;
    margin-bottom: ${getvw(52)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  img {
    width: 100%;
    margin: ${getvw(52)} ${getvw(20)} 0 ${getvw(20)};
  }
`;

const FrshIcons = () => {
  return (
    <Wrap>
      <p>Icon</p>
      <p>
        Main page is redesigned to match brand’s logo color. Coupon can be found
        on the top box to access easily. Menu is placed to the first
        introduction box so that encourage more uesers to look on the menu and
        plan.
      </p>
      <img src={FrshIconImg} alt="" />
    </Wrap>
  );
};

export default FrshIcons;
