import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbDevelop2Img from "../../assets/images/kbbank-page/kb-develop2.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  padding: 0px ${getvw(304)} ${getvw(115)} ${getvw(304)};
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

  .img-wrap {
    padding: 0px ${getvw(81)};
  }

  img {
    width: 100%;
  }
`;

const KbDevelop2 = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Develop</p>
      </div>
      <div className="img-wrap">
        <img src={KbDevelop2Img} alt="" />
      </div>
    </Wrap>
  );
};

export default KbDevelop2;
