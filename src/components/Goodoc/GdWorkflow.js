import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import GdWorkflowImg from "../../assets/images/goodoc-page/gd-workflow.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  /* background-color: white; */
  padding: ${getvw(115)} ${getvw(304)} ${getvw(80)} ${getvw(304)};
  color: #898989;

  .title {
    width: 100%;
  }

  p {
    text-align: center;
    color: #2f2f2f;
    text-transform: uppercase;
    margin-bottom: ${getvw(70)};
    font-size: ${getvw(30)};
  }

  img {
    width: 100%;
  }
`;
const GdWorkflow = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Work Flow</p>
      </div>
      <div className="img-wrap">
        <img src={GdWorkflowImg} alt="goodoc workflow" />
      </div>
    </Wrap>
  );
};

export default GdWorkflow;
