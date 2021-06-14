import React from "react";

import FrshStyleGuideImg from "../../assets/images/freshly-page/frsh-styleguide.png";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f7f6e9;
  padding: ${getvw(115)} ${getvw(407)};
  color: white;
  text-align: center;

  p {
    color: black;
    text-transform: uppercase;
    margin-bottom: ${getvw(102)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  img {
    width: 100%;
  }
`;
const FrshConcept = () => {
  return (
    <Wrap>
      <img src={FrshStyleGuideImg} alt="" />
    </Wrap>
  );
};

export default FrshConcept;
