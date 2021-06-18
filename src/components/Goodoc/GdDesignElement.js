import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import GdDesignElementImg from "../../assets/images/goodoc-page/gd-designelements.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  padding: ${getvw(115)} ${getvw(360)} ${getvw(160)} ${getvw(360)};
  color: #898989;

  .title {
    width: 100%;
  }

  p {
    text-align: center;
    color: #2f2f2f;
    text-transform: uppercase;
    margin-bottom: ${getvw(70)};
    font-size: ${getvw(30)};
  }

  img {
    width: 100%;
  }
`;
const GdDesignElement = () => {
  return (
    <Wrap>
      <div className="title">
        <p>Design Element</p>
      </div>
      <div className="img-wrap">
        <img src={GdDesignElementImg} alt="goodoc desgin elements" />
      </div>
    </Wrap>
  );
};

export default GdDesignElement;
