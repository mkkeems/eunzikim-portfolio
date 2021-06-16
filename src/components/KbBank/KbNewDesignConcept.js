import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbNewDesignImg from "../../assets/images/kbbank-page/kb-designconcept.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #ffcd2d;
  padding: ${getvw(115)} ${getvw(304)};
  color: #898989;

  .title {
    width: 100%;
  }

  p {
    text-align: left;
    color: white;
    text-transform: uppercase;
    margin-left: ${getvw(28)};
    margin-bottom: ${getvw(60)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  img {
    width: 100%;
  }
`;

const KbNewDesignConcept = () => {
  return (
    <Wrap>
      <div className="title">
        <p>New Design Concept</p>
      </div>
      <div className="img-wrap">
        <img src={KbNewDesignImg} alt="kb bank new design concept image" />
      </div>
    </Wrap>
  );
};

export default KbNewDesignConcept;
