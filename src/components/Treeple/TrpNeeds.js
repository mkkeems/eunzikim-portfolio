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
    margin-bottom: 30px;
  }

  .trp-needs-img {
    width: ${getvw(920)};
  }
`;

const TrpNeeds = () => {
  return (
    <Wrap>
      <h1>What we need in our service</h1>
      <img src={trpNeeds} alt="" className="trp-needs-img" />
    </Wrap>
  );
};

export default TrpNeeds;
