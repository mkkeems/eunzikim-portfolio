import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbNeedsImg from "../../assets/images/kbbank-page/kb-needs.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  padding: ${getvw(100)} ${getvw(304)};
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
    width: ${getvw(750)};
  }
`;

const KbNeeds = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Needs</p>
      </div>
      <img src={KbNeedsImg} alt="" />
    </Wrap>
  );
};

export default KbNeeds;
