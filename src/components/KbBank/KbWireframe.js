import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbWireframImg from "../../assets/images/kbbank-page/kb-wireframe.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #313131;
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

  img {
    width: 100%;
  }
`;

const KbWireframe = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Wireframe</p>
      </div>
      <div className="img-wrap">
        <img src={KbWireframImg} alt="kbbank wireframe image" />
      </div>
    </Wrap>
  );
};

export default KbWireframe;
