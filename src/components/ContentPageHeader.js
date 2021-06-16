import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../assets/styles/mixins";
import { colors } from "../assets/styles/variables";

const Wrap = styled.div`
  display: flex;
  height: ${getvw(733)};
  padding: ${getvw(130)} ${getvw(396)} ${getvw(70)} ${getvw(306)};
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${(props) => props.bgimg});
  background-size: ${getvw(648)} auto;
  background-position: 115%;
  background-repeat: no-repeat;

  &.wide {
    padding: ${getvw(134)} ${getvw(200)} ${getvw(134)} ${getvw(300)};
  }

  .header-text {
    width: 100%;
    margin-right: ${getvw(30)};
  }

  .purple {
    color: ${colors.purple};
  }

  h1 {
    font-size: ${getvw(30)};
    line-height: ${getvw(40)};
    font-weight: 600;
    margin: 0;
    margin-bottom: ${getvw(56)};
  }
  h2 {
    font-size: ${getvw(25)};
    line-height: ${getvw(35)};
    font-weight: 500;
    color: ${colors.medGrey2};
    margin: 0;
  }
  .product-mock-long {
    height: 100%;
    filter: drop-shadow(0 0 10px #a1a0a0);
  }

  .product-mock-wide {
    width: ${getvw(641)};
    filter: drop-shadow(0 0 10px #a1a0a0);
  }

  .header-table {
    margin-top: ${getvw(35)};

    .td-bolded {
      font-size: ${getvw(25)};
      line-height: ${getvw(40)};
      font-weight: 500;
      padding-right: ${getvw(35)};
    }

    .td-text {
      font-size: ${getvw(18)};
      color: ${colors.medGrey2};
    }
  }
`;

const ContentPageHeader = ({ bgimg, children, wide, ...rest }) => {
  return (
    <Wrap bgimg={bgimg} className={wide ? "wide" : ""} {...rest}>
      {children}
    </Wrap>
  );
};

export default ContentPageHeader;