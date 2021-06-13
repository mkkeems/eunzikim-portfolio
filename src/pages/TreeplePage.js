import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import TrpHeader from "../components/Treeple/TrpHeader";
import TrpProjectBackground from "../components/Treeple/TrpProjectBackground";
import TrpDeskResearch from "../components/Treeple/TrpDeskResearch";
import TrpPerceptualMapping from "../components/Treeple/TrpPerceptualMapping";
import TrpSurveyInterviews from "../components/Treeple/TrpSurveyInterviews";

const TreeplePage = () => {
  return (
    <>
      <TrpHeader />
      <TrpProjectBackground />
      <TrpDeskResearch />
      <TrpPerceptualMapping />
      <TrpSurveyInterviews />
    </>
  );
};

export default TreeplePage;
