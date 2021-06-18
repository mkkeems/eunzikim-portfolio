import React from "react";
import goodocMock from "../../assets/images/goodoc.svg";
import ContentPageHeader from "../ContentPageHeader";

const GdHeader = () => {
  return (
    <ContentPageHeader>
      <div className="header-text">
        <h1>
          Medical App <br /> Redesign 'Goodoc'
        </h1>
        <h2>
          Redesign Korean medical app ‘Goodoc’
          <br />
          Designed simpler on confusing features and
          <br />
          create characters to bridge people and medical help.
        </h2>

        <table className="header-table">
          <tr>
            <td className="td-bolded">DURATION</td>
            <td className="td-text">2 Months</td>
          </tr>
          <tr>
            <td className="td-bolded">MY ROLE</td>
            <td className="td-text">
              User Research, Design Strategy, Interaction Design, Visual Design
            </td>
          </tr>
          <tr>
            <td className="td-bolded">CONTRIBUTION</td>
            <td className="td-text">100%</td>
          </tr>
          <tr>
            <td className="td-bolded">PROGRAM</td>
            <td className="td-text">Adobe XD, Illustrator, Photoshop</td>
          </tr>
        </table>
      </div>
      <img src={goodocMock} alt="goodoc-mock" className="product-mock-long" />
    </ContentPageHeader>
  );
};

export default GdHeader;
