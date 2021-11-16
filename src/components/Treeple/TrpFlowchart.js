import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpFlowchartImg from "../../assets/images/treeple-page/trp-flowchart.png";

const Wrap = styled.div`
  padding: ${getvw(186)} ${getvw(326)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: ${getvw(120)};
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const TrpFlowchart = () => {
  return (
    <Wrap>
      <h1>Flow chart</h1>
      <img src={trpFlowchartImg} alt="trp flowchart" />
    </Wrap>
  );
};

export default TrpFlowchart;
