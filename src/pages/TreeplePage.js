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
import TrpGif1 from "../assets/images/treeple-page/trpgif1.gif";
import TrpGif2 from "../assets/images/treeple-page/trpgif2.gif";
import TrpGif3 from "../assets/images/treeple-page/trpgif3.gif";
import TrpGif5 from "../assets/images/treeple-page/trpgif5.gif";
import TrpGif6 from "../assets/images/treeple-page/trpgif6.gif";
import TrpGif7 from "../assets/images/treeple-page/trpgif7.gif";
import TrpGif8 from "../assets/images/treeple-page/trpgif8.gif";
import TrpGif9 from "../assets/images/treeple-page/trpgif9.gif";
import TrpGif10 from "../assets/images/treeple-page/trpgif10.gif";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .page-img {
    width: 100%;
    position: relative;
    z-index: 99;
  }

  /* .margin-top {
    margin-top: ${getvw(144)};
  } */

  .gif-bg1 {
    position: relative;
    background: #eafdff;

    #gif1 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(183)};
      top: ${getvw(178)};
      z-index: 1;
    }

    #gif2 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(655)};
      top: ${getvw(365)};
      z-index: 1;
    }

    #gif3 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(1122)};
      top: ${getvw(178)};
      z-index: 1;
    }
  }
  .gif-bg2 {
    position: relative;
  }
  .gif-bg3 {
    position: relative;

    #gif5 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(500)};
      top: ${getvw(670)};
      z-index: 1;
    }

    #gif6 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(927)};
      top: ${getvw(760)};
      z-index: 1;
    }
  }
  .gif-bg4 {
    position: relative;
    #gif7 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(434)};
      top: ${getvw(144)};
      z-index: 1;
    }

    #gif8 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(1012)};
      top: ${getvw(785)};
      z-index: 1;
    }
    #gif9 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(400)};
      bottom: ${getvw(1706)};
      z-index: 1;
    }

    #gif10 {
      position: absolute;
      width: ${getvw(332)};
      left: ${getvw(308)};
      bottom: ${getvw(237)};
      z-index: 1;
    }
  }
`;

const Container = styled.div`
  h1 {
    font-size: 28px;
  }
`;

const TreeplePage = () => {
  return (
    <Container>
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
        <div className="gif-bg1">
          <img
            src={TrpMotion1}
            alt="TrpMotion1"
            className="page-img margin-top img1"
          />
          <img src={TrpGif1} alt="TrpGif1" id="gif1" className="trpgif" />
          <img src={TrpGif2} alt="TrpGif2" id="gif2" className="trpgif" />
          <img src={TrpGif3} alt="TrpGif3" id="gif3" className="trpgif" />
        </div>
        <div className="gif-bg2">
          <img src={TrpMotion3} alt="TrpMotion3" className="page-img img2" />
        </div>
        <div className="gif-bg3">
          <img src={TrpMotion4} alt="TrpMotion4" className="page-img img3" />
          <img src={TrpGif5} alt="TrpGif5" id="gif5" className="trpgif" />
          <img src={TrpGif6} alt="TrpGif6" id="gif6" className="trpgif" />
        </div>
        <div className="gif-bg4">
          <img src={TrpMotion5} alt="TrpMotion5" className="page-img img4" />
          <img src={TrpGif7} alt="TrpGif7" id="gif7" className="trpgif" />
          <img src={TrpGif8} alt="TrpGif8" id="gif8" className="trpgif" />
          <img src={TrpGif9} alt="TrpGif9" id="gif9" className="trpgif" />
          <img src={TrpGif10} alt="TrpGif10" id="gif10" className="trpgif" />
        </div>
        <img src={TrpfooterImg} alt="Trp footer img" className="page-img" />
      </Wrap>
    </Container>
  );
};

export default TreeplePage;
