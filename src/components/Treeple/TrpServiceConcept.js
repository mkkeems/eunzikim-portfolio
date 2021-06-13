import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import trpServiceConceptImg from "../../assets/images/treeple-page/trp-serviceconcept.png";
import trpVisualelementImg from "../../assets/images/treeple-page/trp-visualelement.png";

const Wrap = styled.div`
  padding: ${getvw(186)} ${getvw(359)};
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
    margin-bottom: ${getvw(120)};
  }

  img {
    width: 100%;
  }

  .text-box {
    margin-top: ${getvw(125)};
    padding: ${getvw(36)} ${getvw(50)};
    border-radius: ${getvw(18)};
    background-color: white;
    box-shadow: -1px 3px 0px rgba(135, 135, 135, 0.2);
    line-height: ${getvw(36)};
    color: #41444e;
  }
`;

const TrpServiceConcept = () => {
  return (
    <Wrap>
      <h1>Service Concept</h1>
      <img src={trpServiceConceptImg} alt="trp service Concept" />
      <div className="text-box">
        Treeple requires to answer twelve basic lifestyle questionnaires to make
        supplement formula for each user. <br /> Daily packages and monthly
        subscriptions make supplements are easy to take. Reward, alert, and
        process UI on the app encourages users to take supplements consistently.
      </div>
    </Wrap>
  );
};

export default TrpServiceConcept;
