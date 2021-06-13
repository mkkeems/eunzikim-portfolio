import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpNeeds from "../../assets/images/treeple-page/trp-needs.png";

const Wrap = styled.div`
  padding: ${getvw(165)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f6fa;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: ${getvw(35)};
    font-weight: 600;
    text-align: center;
  }
`;

const TrpNeeds = () => {
  return (
    <Wrap>
      <h1>What we need in our service</h1>
      <img src={trpNeeds} alt="" />
    </Wrap>
  );
};

export default TrpNeeds;
