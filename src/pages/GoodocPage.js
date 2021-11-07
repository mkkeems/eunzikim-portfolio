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
import GdGif2 from "../assets/images/goodoc-page/goodoc2.gif";
import GdGif3 from "../assets/images/goodoc-page/goodoc3.gif";
import GdGif5 from "../assets/images/goodoc-page/goodoc5.gif";
import GdGif6 from "../assets/images/goodoc-page/goodoc6.gif";
import GdGif7 from "../assets/images/goodoc-page/goodoc7.gif";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  &.blue-bg {
    background-color: #eaf1fa;
  }

  .newbtn {
    width: ${getvw(1310)};
    margin-bottom: ${getvw(100)};
  }

  .page-img {
    width: 100%;
    position: relative;
    z-index: 99;
  }

  .center-img {
    width: ${getvw(1330)};
    margin-top: ${getvw(120)};
    position: relative;
    z-index: 99;
  }

  .center-img2 {
    width: ${getvw(1280)};
    margin-top: ${getvw(60)};
    margin-bottom: ${getvw(160)};
    position: relative;
    z-index: 99;
  }

  .center-btn-img {
    width: ${getvw(956)};
    padding: ${getvw(290)} 0px ${getvw(80)} 0px;
  }

  .margin-top {
    margin-top: ${getvw(144)};
  }

  .gif-bg2 {
    position: relative;
    /* background: #eafdff; */

    #gif2 {
      position: absolute;
      width: ${getvw(358)};
      right: ${getvw(414)};
      top: ${getvw(790)};
      z-index: 1;
    }
  }

  .gif-bg3 {
    position: relative;
    /* background: #eafdff; */

    #gif3 {
      position: absolute;
      width: ${getvw(348)};
      right: ${getvw(444)};
      top: ${getvw(450)};
      z-index: 1;
    }
  }

  .gif-bg5 {
    position: relative;
    /* background: #eafdff; */

    #gif5 {
      position: absolute;
      width: ${getvw(358)};
      left: ${getvw(286)};
      top: ${getvw(229)};
      z-index: 1;
    }

    #gif6 {
      position: absolute;
      width: ${getvw(358)};
      left: ${getvw(749)};
      top: ${getvw(491)};
      z-index: 1;
    }

    #gif7 {
      position: absolute;
      width: ${getvw(358)};
      right: ${getvw(340)};
      bottom: ${getvw(120)};
      z-index: 1;
    }
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
        <div className="gif-bg2">
          <img src={GdGreetingImg} className="page-img" alt="GD Greeting" />
          <img src={GdGif2} alt="GdGif2" id="gif2" className="gdgif" />
        </div>
        <div className="gif-bg3">
          <img src={GdNavigateImg} className="center-img" alt="GD Navigate" />
          <img src={GdGif3} alt="GdGif3" id="gif3" className="gdgif" />
        </div>
        <div className="gif-bg4">
          <img src={GdBrandIdImg} className="center-img2" alt="GD Brand ID" />
        </div>
        <div className="gif-bg5">
          <img src={GdExtraImg} className="page-img" alt="GD extra" />
          <img src={GdGif5} alt="GdGif5" id="gif5" className="gdgif" />
          <img src={GdGif6} alt="GdGif6" id="gif6" className="gdgif" />
          <img src={GdGif7} alt="GdGif7" id="gif7" className="gdgif" />
        </div>
        <img src={GdFooterImg} className="page-img" alt="GD footer" />
      </Wrap>
    </>
  );
};

export default GoodocPage;
