import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import KbBg1 from "../../assets/images/kbbank-page/kb-background1.png";
import KbBg2 from "../../assets/images/kbbank-page/kb-background2.png";
import KbBg3 from "../../assets/images/kbbank-page/kb-background3.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #f8f7f3;
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
    margin-bottom: ${getvw(40)};
  }
`;

const KbBackground = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Background</p>
      </div>
      <img src={KbBg1} alt="kb background1" />
      <img src={KbBg2} alt="kb background2" />
      <img src={KbBg3} alt="kb background3" />
    </Wrap>
  );
};

export default KbBackground;
