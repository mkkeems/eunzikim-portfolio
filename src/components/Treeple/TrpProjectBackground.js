import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";
import bgicons from "../../assets/images/trp-icons1.png";

const Wrap = styled.div`
  padding: ${getvw(112)} ${getvw(333)};
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: ${colors.darkGrey2};
    font-size: ${getvw(30)};
    font-weight: 500;
    padding-bottom: 2px;
    border-bottom: 3px solid #36d0d0;
  }

  .icons {
    margin-top: ${getvw(24)};
    height: ${getvw(54)};
  }
`;

const TrpProjectBackground = () => {
  return (
    <Wrap>
      <h1>Project background</h1>
      <img src={bgicons} alt="project background icons" className="icons" />
    </Wrap>
  );
};

export default TrpProjectBackground;
