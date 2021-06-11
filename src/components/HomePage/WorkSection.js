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
  align-items: center;
  border: 1px solid ${colors.darkGrey};
  width: 50%;
  padding: ${getvw(80)} ${getvw(100)} ${getvw(50)};

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

  .product-img-long {
    height: ${getvw(400)};
    width: inherit;
  }

  .product-img-wide {
    width: ${getvw(492)};
    height: inherit;
    margin: auto;
  }

  .mockup-textbox {
    display: flex;
    width: 100%;

    h2 {
      margin: 0;
    }

    .num {
      width: 8%;
    }

    .text-body {
      width: 92%;
    }
  }
`;

const WorkSection = () => {
  return (
    <Wrap>
      <MockupBlock className="treeple-block">
        <div className="mockup-textbox">
          <div className="num">01</div>
          <div className="text-body">
            <h2>
              Supplement App <br />
              Product ‘Treeple’
            </h2>
            <p>
              User Research, Design Strategy, Interaction Design, Visual Design
            </p>
            <p>
              Created ‘Make your supplement pack’ service app in collaboration
              with a team into research existing supplement service and market.
            </p>
          </div>
        </div>
        <img src={treepleMockup} alt="EunziLogo" className="product-img-long" />
      </MockupBlock>
      <MockupBlock className="goodoc-block">
        <div className="mockup-textbox">
          <div className="num">02</div>
          <div className="text-body">
            <h2>
              Medical App <br /> Redesign ‘Goodoc’
            </h2>
            <p>
              User Research, Design Strategy, Interaction Design, Visual Design
            </p>
            <p>
              Redesign the Korean medical app ‘Goodoc’. Designed simpler on
              confusing features and made characters to bridge people and
              hospitals.
            </p>
          </div>
        </div>
        <img src={goodocMockup} alt="EunziLogo" className="product-img-long" />
      </MockupBlock>
      <MockupBlock className="kb-block">
        <div className="mockup-textbox">
          <div className="num">03</div>
          <div className="text-body">
            <h2>
              Bank App <br />
              Redesign ‘KB Bank’
            </h2>
            <p>Design Strategy, Interaction Design, Visual Design</p>
            <p>
              Redesign the KB bank app to provide an easy but safe experience
              while wiring money on the app. In collaboration with team into
              research competitors.
            </p>
          </div>
        </div>
        <img src={kbMockup} alt="EunziLogo" className="product-img-long" />
      </MockupBlock>
      <MockupBlock className="freshly-block">
        <div className="mockup-textbox">
          <div className="num">04</div>
          <div className="text-body">
            <h2>
              Prepared Meal Website <br />
              Redesign ‘Freshly’
            </h2>
            <p>Design Strategy, Interaction Design, Visual Design</p>
            <p>
              Redesign the Freshly website to deliver what Freshly offers to
              customers and how the service works to new targets.
            </p>
          </div>
        </div>
        <img src={freshlyMockup} alt="EunziLogo" className="product-img-wide" />
      </MockupBlock>
    </Wrap>
  );
};

export default WorkSection;