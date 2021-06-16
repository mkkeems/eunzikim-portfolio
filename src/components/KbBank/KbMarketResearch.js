import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbBg4 from "../../assets/images/kbbank-page/kb-background4.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f8f7f3;
  padding: ${getvw(15)} ${getvw(304)} ${getvw(115)} ${getvw(304)};
  color: #898989;

  .title {
    width: 100%;
  }

  p {
    text-align: left;
    color: #898989;
    text-transform: uppercase;
    margin-left: ${getvw(28)};
    margin-bottom: ${getvw(60)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  img {
    width: 100%;
    margin-bottom: ${getvw(40)};
  }
`;

const KbMarketResearch = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Market Research</p>
      </div>
      <img src={KbBg4} alt="" />
    </Wrap>
  );
};

export default KbMarketResearch;
