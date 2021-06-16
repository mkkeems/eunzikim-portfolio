import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbUserJourneyImg from "../../assets/images/kbbank-page/kb-userjourney.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  padding: ${getvw(115)} ${getvw(304)};
  color: #898989;

  .title {
    width: 100%;
  }

  p {
    text-align: left;
    color: #898989;
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

const KbUserJourney = () => {
  return (
    <Wrap>
      <div className="title">
        <p>User Journey</p>
      </div>
      <div className="img-wrap">
        <img src={KbUserJourneyImg} alt="kb bank user journey image" />
      </div>
    </Wrap>
  );
};

export default KbUserJourney;
