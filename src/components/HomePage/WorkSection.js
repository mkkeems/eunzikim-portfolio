import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";
import freshlyMockup from "../../assets/images/freshly-mockup.png";
import goodocMockup from "../../assets/images/goodoc-mockup.png";
import treepleMockup from "../../assets/images/treeple-mockup.png";
import kbMockup from "../../assets/images/kb-bank-mockup.png";

const Wrap = styled.div`
  border-top: 1px solid ${colors.darkGrey};
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  padding: 0 ${getvw(306)};
  justify-content: space-around;
  flex-shrink: 0;
`;

const MockupBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.darkGrey};
  width: 50%;
  padding: ${getvw(80)} ${getvw(100)} ${getvw(50)};

  .product-img {
  }

  &.treeple-block {
    border-top: 0;
    border-right: 0;
  }

  &.goodoc-block {
    border-top: 0;
  }

  &.kb-block {
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
  }

  &.freshly-block {
    border-top: 0;
    border-bottom: 0;
  }
`;

const WorkSection = () => {
  return (
    <Wrap>
      <MockupBlock className="treeple-block">
        <div className="mockup-textbox"></div>
        <img src={treepleMockup} alt="EunziLogo" className="product-img" />
      </MockupBlock>
      <MockupBlock className="goodoc-block">
        <div className="mockup-textbox"></div>
        <img src={goodocMockup} alt="EunziLogo" className="product-img" />
      </MockupBlock>
      <MockupBlock className="kb-block">
        <div className="mockup-textbox"></div>
        <img src={kbMockup} alt="EunziLogo" className="product-img" />
      </MockupBlock>
      <MockupBlock className="freshly-block">
        <div className="mockup-textbox"></div>
        <img src={freshlyMockup} alt="EunziLogo" className="product-img" />
      </MockupBlock>
    </Wrap>
  );
};

export default WorkSection;
