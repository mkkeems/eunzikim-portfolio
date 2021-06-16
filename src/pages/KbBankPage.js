import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import ScrollToTopOnMount from "../utility/ScrollToTop";
import KbHeader from "../components/KbBank/KbHeader";
import KbBackground from "../components/KbBank/KbBackground";
import KbIntroImg from "../assets/images/kbbank-page/kb-intro.png";
import KbMarketResearch from "../components/KbBank/KbMarketResearch";
import KbNeeds from "../components/KbBank/KbNeeds";
import KbDevelop from "../components/KbBank/KbDevelop";
import KbNewDirection from "../components/KbBank/KbNewDirection";
import KbMentalModeling from "../components/KbBank/KbMentalModeling";
import KbPersona from "../components/KbBank/KbPersona";
import KbDevelop2 from "../components/KbBank/KbDevelop2";
import KbDevelop3 from "../components/KbBank/KbDevelop3";
import KbUserJourney from "../components/KbBank/KbUserJourney";
import KbNewDesignConcept from "../components/KbBank/KbNewDesignConcept";
import KbWireframe from "../components/KbBank/KbWireframe";

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

const KbBankPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <KbHeader />
      <Wrap>
        <img src={KbIntroImg} alt="kbbank intro img" className="page-img" />
      </Wrap>
      <KbBackground />
      <KbMarketResearch />
      <KbNeeds />
      <KbDevelop />
      <KbNewDirection />
      <KbMentalModeling />
      <KbPersona />
      <KbDevelop2 />
      <KbDevelop3 />
      <KbUserJourney />
      <KbNewDesignConcept />
      <KbWireframe />
    </>
  );
};

export default KbBankPage;
