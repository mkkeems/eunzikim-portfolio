import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbPersonaImg from "../../assets/images/kbbank-page/kb-persona.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
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

const KbPersona = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Persona</p>
      </div>
      <div className="img-wrap">
        <img src={KbPersonaImg} alt="kb bank persona" />
      </div>
    </Wrap>
  );
};

export default KbPersona;
