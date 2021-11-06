import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import ScrollToTopOnMount from "../utility/ScrollToTop";
import GdHeader from "../components/Goodoc/GdHeader";
import GdIntroImg from "../assets/images/goodoc-page/gd-intro.png";
import GdCurrentBtnImg from "../assets/images/goodoc-page/gd-currentbtn.png";
import GdCurrentVrImg from "../assets/images/goodoc-page/gd-currentvr.png";
import GdPersonas from "../components/Goodoc/GdPersonas";
import GdNewBtnImg from "../assets/images/goodoc-page/gd-newbtn.png";
import GdGoalImg from "../assets/images/goodoc-page/gd-goal.png";
import GdWorkflow from "../components/Goodoc/GdWorkflow";
import GdDesignElement from "../components/Goodoc/GdDesignElement";
import GdGreetingImg from "../assets/images/goodoc-page/gd-greeting.png";
import GdNavigateImg from "../assets/images/goodoc-page/gd-navigate.png";
import GdBrandIdImg from "../assets/images/goodoc-page/gd-brandid.png";
import GdExtraImg from "../assets/images/goodoc-page/gd-extrapgs.png";
import GdFooterImg from "../assets/images/goodoc-page/gd-footerimg.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  &.blue-bg {
    background-color: #e8ecfa;
  }

  .newbtn {
    width: ${getvw(1310)};
    margin-bottom: ${getvw(100)};
  }

  .page-img {
    width: 100%;
  }

  .center-img {
    width: ${getvw(1330)};
    margin-top: ${getvw(120)};
  }

  .center-img2 {
    width: ${getvw(1280)};
    margin-top: ${getvw(60)};
    margin-bottom: ${getvw(160)};
  }

  .center-btn-img {
    width: ${getvw(956)};
    padding: ${getvw(290)} 0px ${getvw(80)} 0px;
  }

  .margin-top {
    margin-top: ${getvw(144)};
  }
`;

const GoodocPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <GdHeader />
      <Wrap>
        <img src={GdIntroImg} alt="goodoc intro img" className="page-img" />
        <img
          src={GdCurrentBtnImg}
          alt="goodoc intro img"
          className="center-btn-img"
        />
        <img src={GdCurrentVrImg} alt="goodoc intro img" className="page-img" />
      </Wrap>
      <GdPersonas />
      <Wrap>
        <img src={GdNewBtnImg} alt="" className="newbtn" />
        <img src={GdGoalImg} className="page-img" alt="GD Goal" />
      </Wrap>
      <GdWorkflow />
      <GdDesignElement />
      <Wrap className="blue-bg">
        <img src={GdGreetingImg} className="page-img" alt="GD Greeting" />
        <img src={GdNavigateImg} className="center-img" alt="GD Navigate" />
        <img src={GdBrandIdImg} className="center-img2" alt="GD Brand ID" />
        <img src={GdExtraImg} className="page-img" alt="GD extra" />
        <img src={GdFooterImg} className="page-img" alt="GD footer" />
      </Wrap>
    </>
  );
};

export default GoodocPage;
