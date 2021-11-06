import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpPainSolution from "../../assets/images/treeple-page/trp-painpoint-solution.png";

const Wrap = styled.div`
  padding: ${getvw(186)} ${getvw(435)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bdd7df;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  img {
    width: 100%;
  }
`;

const TrpPainSolution = () => {
  return (
    <Wrap>
      <img src={trpPainSolution} alt="painpoint solution chart" />
    </Wrap>
  );
};

export default TrpPainSolution;
