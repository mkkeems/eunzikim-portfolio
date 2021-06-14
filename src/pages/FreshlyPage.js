import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import FrshHeader from "../components/Freshly/FrshHeader";
import FrshProblem from "../components/Freshly/FrshProblem";
import FrshNewVersion from "../components/Freshly/FrshNewVersion";
import FrshCurrentVersion from "../assets/images/freshly-page/frsh-current-version.png";
import FrshConcept from "../components/Freshly/FrshConcept";
import FrshStyleGuide from "../components/Freshly/FrshStyleGuide";
import FrshOverview from "../assets/images/freshly-page/frsh-overview.png";
import FrshMainPage from "../assets/images/freshly-page/frsh-mainpage.png";
import FrshSubpage from "../assets/images/freshly-page/frsh-subpage.png";
import FrshFaq from "../assets/images/freshly-page/frsh-subpage2.png";
import FrshIcons from "../components/Freshly/FrshIcons";
import FrshFooter from "../assets/images/freshly-page/frsh-footer.png";

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

const FreshlyPage = () => {
  return (
    <>
      <FrshHeader />
      <FrshProblem />
      <Wrap>
        <img
          src={FrshCurrentVersion}
          alt="freshly current version"
          className="page-img"
        />
      </Wrap>
      <FrshNewVersion />
      <FrshConcept />
      <FrshStyleGuide />
      <Wrap>
        <img src={FrshOverview} alt="freshly overview" className="page-img" />
        <img src={FrshMainPage} alt="freshly main page" className="page-img" />
        <img src={FrshSubpage} alt="freshly subpage" className="page-img" />
        <img src={FrshFaq} alt="freshly faq" className="page-img" />
      </Wrap>
      <FrshIcons />
      <Wrap>
        <img src={FrshFooter} alt="freshly footer img" className="page-img" />
      </Wrap>
    </>
  );
};

export default FreshlyPage;
