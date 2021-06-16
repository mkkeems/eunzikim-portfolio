import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import ScrollToTopOnMount from "../utility/ScrollToTop";
import TrpHeader from "../components/Treeple/TrpHeader";
import TrpProjectBackground from "../components/Treeple/TrpProjectBackground";
import TrpDeskResearch from "../components/Treeple/TrpDeskResearch";
import TrpPerceptualMapping from "../components/Treeple/TrpPerceptualMapping";
import TrpSurveyInterviews from "../components/Treeple/TrpSurveyInterviews";
import TrpNeeds from "../components/Treeple/TrpNeeds";
import TrpPainSolution from "../components/Treeple/TrpPainSolution";
import TrpFlowchart from "../components/Treeple/TrpFlowchart";
import TrpWireframe from "../components/Treeple/TrpWireframe";
import TrpServiceConcept from "../components/Treeple/TrpServiceConcept";
import TrpVisualElement from "../components/Treeple/TrpVisualElement";
import RunningManImg from "../assets/images/treeple-page/runningman.png";
import TrpMotion1 from "../assets/images/treeple-page/trp-motion1.png";
import TrpMotion3 from "../assets/images/treeple-page/trp-motion3.png";
import TrpMotion4 from "../assets/images/treeple-page/trp-motion4.png";
import TrpMotion5 from "../assets/images/treeple-page/trp-motion5.png";
import TrpfooterImg from "../assets/images/treeple-page/trp-keephealthy.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .page-img {
    width: 100%;
  }
  .margin-top {
    margin-top: ${getvw(144)};
  }
`;

const TreeplePage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <TrpHeader />
      <TrpProjectBackground />
      <TrpDeskResearch />
      <TrpPerceptualMapping />
      <TrpSurveyInterviews />
      <TrpNeeds />
      <TrpPainSolution />
      <TrpFlowchart />
      <TrpWireframe />
      <TrpServiceConcept />
      <TrpVisualElement />
      <Wrap>
        <img src={RunningManImg} alt="running man" className="page-img" />
        <img
          src={TrpMotion1}
          alt="TrpMotion1"
          className="page-img margin-top"
        />
        <img src={TrpMotion3} alt="TrpMotion3" className="page-img" />
        <img src={TrpMotion4} alt="TrpMotion4" className="page-img" />
        <img src={TrpMotion5} alt="TrpMotion5" className="page-img" />
        <img src={TrpfooterImg} alt="Trp footer img" className="page-img" />
      </Wrap>
    </>
  );
};

export default TreeplePage;
