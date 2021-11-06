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
  background-color: white;
  padding: ${getvw(115)} ${getvw(407)};
  color: white;
  text-align: center;

  p {
    color: black;
    text-transform: uppercase;
    margin-bottom: ${getvw(102)};
  }

  img {
    width: 100%;
  }
`;

const FrshStyleGuide = () => {
  return (
    <Wrap>
      <img src={FrshStyleGuideImg} alt="" />
    </Wrap>
  );
};

export default FrshStyleGuide;
