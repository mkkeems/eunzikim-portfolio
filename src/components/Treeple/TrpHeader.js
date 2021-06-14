import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";
import treepleMock from "../../assets/images/treeple.svg";
import trpHeaderImg from "../../assets/images/treeple-page/trp-header1.png";

const Wrap = styled.div`
  display: flex;
  height: ${getvw(733)};
  padding: ${getvw(130)} ${getvw(396)} ${getvw(70)} ${getvw(306)};
  position: relative;
  background-color: #f2f2f2;
  background-image: url(${trpHeaderImg});
  background-size: ${getvw(648)} auto;
  background-position: 115%;
  background-repeat: no-repeat;

  .header-text {
    width: ${getvw(920)};
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
  .treeple-mock {
    height: 100%;
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

const TrpHeader = () => {
  return (
    <Wrap>
      <div className="header-text">
        <h1>
          Supplement App <br /> Product 'Treeple'
        </h1>
        <h2>
          A personalized supplement subscription-based on lifestyle
          questionnaire. Treeple helps subscribers to take supplements regularly
          by providing an alarm and reward program.
        </h2>

        <table className="header-table">
          <tr>
            <td className="td-bolded">DURATION</td>
            <td className="td-text">3 Months</td>
          </tr>
          <tr>
            <td className="td-bolded">MY ROLE</td>
            <td className="td-text">
              3 Months User Research, Interaction Design, Visual Design
            </td>
          </tr>
          <tr>
            <td className="td-bolded">TEAM</td>
            <td className="td-text">5 UX Designers</td>
          </tr>
          <tr>
            <td className="td-bolded">PROGRAM</td>
            <td className="td-text">Adobe XD, Illustrator</td>
          </tr>
        </table>
      </div>
      <img src={treepleMock} alt="treeple-mock" className="treeple-mock" />
    </Wrap>
  );
};

export default TrpHeader;
