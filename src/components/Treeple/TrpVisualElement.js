import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpVisualelementImg from "../../assets/images/treeple-page/trp-visualelement.png";

const Wrap = styled.div`
  padding: 0 ${getvw(440)} ${getvw(103)} ${getvw(440)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f6fa;

  h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: ${getvw(120)};
  }

  img {
    width: 100%;
  }
`;

const TrpVisualElement = () => {
  return (
    <Wrap>
      <h1>Visual Element</h1>
      <img
        src={trpVisualelementImg}
        alt="trp visual element"
        className="trp-visual-element-img"
      />
    </Wrap>
  );
};

export default TrpVisualElement;
