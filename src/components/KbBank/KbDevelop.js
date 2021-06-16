import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbDevelopImg from "../../assets/images/kbbank-page/kb-develop.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f8f7f3;
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
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  .img-wrap {
    background-color: white;
    border-radius: ${getvw(35)};
    padding: ${getvw(81)} ${getvw(200)} 0px ${getvw(200)};
  }

  img {
    width: 100%;
    margin-bottom: ${getvw(40)};
  }
`;

const KbDevelop = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Develop</p>
      </div>
      <div className="img-wrap">
        <img src={KbDevelopImg} alt="" />
      </div>
    </Wrap>
  );
};

export default KbDevelop;
