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
    font-size: ${getvw(35)};
    font-weight: 600;
    text-align: center;
  }

  .map-wrap {
    background-color: #e3e3e3;
    border-radius: ${getvw(35)};
    padding: ${getvw(126)} ${getvw(176)};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .trpmap {
    width: 80%;
    margin-top: ${getvw(77)};
  }
  .trpmap-description {
    margin-top: ${getvw(77)};
    background-color: ${colors.aqua};
    border-radius: ${getvw(25)};
    padding: ${getvw(36)} ${getvw(72)};
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
