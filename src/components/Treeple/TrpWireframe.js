import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpWireframeImg from "../../assets/images/treeple-page/trp-wireframe.png";

const Wrap = styled.div`
  padding: ${getvw(186)} ${getvw(303)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efeee9;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: ${getvw(35)};
    font-weight: 600;
    text-align: center;
    margin-bottom: ${getvw(120)};
  }

  img {
    width: 100%;
  }
`;

const TrpWireframe = () => {
  return (
    <Wrap>
      <h1>Flow chart</h1>
      <img src={trpWireframeImg} alt="trp wireframe" />
    </Wrap>
  );
};

export default TrpWireframe;
