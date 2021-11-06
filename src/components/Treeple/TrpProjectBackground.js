import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";
import bgicons from "../../assets/images/treeple-page/trp-icons1.png";

const Wrap = styled.div`
  padding: ${getvw(112)} ${getvw(333)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(white, #f2f2f2);

  h1 {
    text-transform: uppercase;
    color: ${colors.darkGrey2};
    font-size: 24px;
    padding-bottom: 2px;
    border-bottom: 3px solid ${colors.aqua};
  }

  .icons {
    margin-top: ${getvw(24)};
    height: ${getvw(54)};
    margin-bottom: ${getvw(100)};
  }

  .text-box-wrap {
    display: flex;
    justify-content: space-between;
    width: ${getvw(1254)};
    margin-bottom: ${getvw(42)};

    .text-box {
      width: ${getvw(606)};
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .text-box-header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 30px 30px 0 0;
        font-weight: 600;
        font-size: 18px;
        text-align: center;
        padding: 22px;
        height: 100%;

        &#trpbg-one {
          background-color: #87b0d9;
        }
        &#trpbg-two {
          background-color: #bdd7df;
        }
        &#trpbg-three {
          background-color: #e3e3e3;
        }
        &#trpbg-four {
          background-color: #f7f2dd;
        }
      }
      .text-box-content {
        font-size: 14px;
        line-height: 2;
        border-radius: 0 0 30px 30px;
        background-color: white;
        padding: 22px;

        .text-box-content-text {
          margin: auto;
          width: 80%;
        }
      }
    }
  }
`;

const TrpProjectBackground = () => {
  return (
    <Wrap>
      <h1>Project background</h1>
      <img src={bgicons} alt="project background icons" className="icons" />
      <div className="text-box-wrap">
        <div className="text-box">
          <div className="text-box-header" id="trpbg-one">
            More Interest on Wellness
          </div>
          <div className="text-box-content">
            <div className="text-box-content-text">
              Especially all age group shows high interest in wellness and
              health
            </div>
          </div>
        </div>
        <div className="text-box">
          <div className="text-box-header" id="trpbg-two">
            More Interest on Wellness
          </div>
          <div className="text-box-content">
            <div className="text-box-content-text">
              Especially all age group shows high interest in wellness and
              health
            </div>
          </div>
        </div>
      </div>
      <div className="text-box-wrap">
        <div className="text-box">
          <div className="text-box-header" id="trpbg-three">
            More Intake of Supplements
          </div>
          <div className="text-box-content">
            <div className="text-box-content-text">
              High interest in health leads to high demand for supplements
            </div>
          </div>
        </div>
        <div className="text-box">
          <div className="text-box-header" id="trpbg-four">
            Needs on Motivation to Take Supplements Regularly
          </div>
          <div className="text-box-content">
            <div className="text-box-content-text">
              Existing personalized supplement services are not offering intake
              management
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default TrpProjectBackground;
