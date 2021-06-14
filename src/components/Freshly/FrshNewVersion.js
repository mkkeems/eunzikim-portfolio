import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import newVersion from "../../assets/images/freshly-page/frsh-new-version.png";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
  padding: ${getvw(102)} ${getvw(300)};
  color: white;
  text-align: center;

  p {
    color: black;
    text-transform: uppercase;
    margin-bottom: ${getvw(102)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }

  img {
    width: 100%;
  }
`;

const FrshNewVersion = () => {
  return (
    <Wrap>
      <p>NEW VERSION</p>
      <img src={newVersion} alt="" />
    </Wrap>
  );
};

export default FrshNewVersion;
