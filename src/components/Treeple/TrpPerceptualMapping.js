import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";
import trpmapping from "../../assets/images/treeple-page/perceptual-mapping.png";

const Wrap = styled.div`
  padding: 0 ${getvw(126)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  .map-wrap {
    background-color: #e3e3e3;
    border-radius: 35px;
    padding: 100px 140px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .trpmap {
    width: 80%;
    margin-top: 60px;
  }
  .trpmap-description {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 60px;
    background-color: ${colors.aqua};
    border-radius: 25px;
    padding: 28px 60px;
  }

  @media only screen and (max-width: 768px) {
    .map-wrap {
      padding: 30px;
    }
    .trpmap {
      width: 100%;
      margin-top: 30px;
    }

    .trpmap-description {
      padding: 20px;
      margin-top: 30px;
    }
  }
`;

const TrpPerceptualMapping = () => {
  return (
    <Wrap>
      <div className="map-wrap">
        <h1>Perceptual Mapping</h1>
        <img src={trpmapping} alt="trp perceptual mapping" className="trpmap" />
        <div className="trpmap-description">
          Most Korean services provide ready-made products instead of
          personalized products.
          <br />
          Constant intake management and personalized product are high-demand
          services.
        </div>
      </div>
    </Wrap>
  );
};

export default TrpPerceptualMapping;
