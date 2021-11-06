import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbDevelopImg from "../../assets/images/kbbank-page/kb-develop1.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #2e2e2e;
  padding: ${getvw(115)} ${getvw(304)};
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
  }

  img {
    width: 100%;
  }
`;

const KbDevelop3 = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Mental Modeling</p>
      </div>
      <div className="img-wrap">
        <img src={KbDevelopImg} alt="" />
      </div>
    </Wrap>
  );
};

export default KbDevelop3;
