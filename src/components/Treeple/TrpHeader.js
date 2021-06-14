import React from "react";
import treepleMock from "../../assets/images/treeple.svg";
import trpHeaderImg from "../../assets/images/treeple-page/trp-header1.png";
import ContentPageHeader from "../ContentPageHeader";

const TrpHeader = () => {
  return (
    <ContentPageHeader bgimg={trpHeaderImg}>
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
      <img src={treepleMock} alt="treeple-mock" className="product-mock-long" />
    </ContentPageHeader>
  );
};

export default TrpHeader;
