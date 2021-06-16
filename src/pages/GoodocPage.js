import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import ScrollToTopOnMount from "../utility/ScrollToTop";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .page-img {
    width: 100%;
  }
  .margin-top {
    margin-top: ${getvw(144)};
  }
`;

const GoodocPage = () => {
  return (
    <>
      <ScrollToTopOnMount />
    </>
  );
};

export default GoodocPage;
