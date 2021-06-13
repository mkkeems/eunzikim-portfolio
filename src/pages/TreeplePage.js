import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";
import TrpHeader from "../components/Treeple/TrpHeader";
import TrpProjectBackground from "../components/Treeple/TrpProjectBackground";
import TrpDeskResearch from "../components/Treeple/TrpDeskResearch";

const TreeplePage = () => {
  return (
    <>
      <TrpHeader />
      <TrpProjectBackground />
      <TrpDeskResearch />
    </>
  );
};

export default TreeplePage;
