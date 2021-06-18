import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import GdPersonaImg from "../../assets/images/goodoc-page/gd-persona.png";
import GdSynthesizeImg from "../../assets/images/goodoc-page/gd-synthesize.png";

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
    text-align: center;
    color: #2f2f2f;
    text-transform: uppercase;
    margin: ${getvw(90)} 0px;
    font-size: ${getvw(30)};
    line-height: ${getvw(35)};
  }

  img {
    width: 100%;
    margin-bottom: ${getvw(40)};

    &.synthesize-img {
      width: ${getvw(926)};
    }
  }
`;

const GdPersonas = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Persona</p>
      </div>
      <img src={GdPersonaImg} alt="" />
      <div className="title">
        <p>Synthesize</p>
      </div>
      <img src={GdSynthesizeImg} className="synthesize-img" />
    </Wrap>
  );
};

export default GdPersonas;
