import React from "react";
import freshlyMock from "../../assets/images/freshly.svg";
import ContentPageHeader from "../ContentPageHeader";

const FrshHeader = () => {
  return (
    <ContentPageHeader wide>
      <div className="header-text">
        <h1>
          Prepared Meal Website <br /> Redesign 'Freshly'
        </h1>
        <h2>
          Fully-prepared meals offer to enjoy nutritious and delicious food
          ready to your door! <br />
          Redesigned Freshly website to introduce a broader audience.
        </h2>

        <table className="header-table">
          <tr>
            <td className="td-bolded">DURATION</td>
            <td className="td-text">2 Months</td>
          </tr>
          <tr>
            <td className="td-bolded">MY ROLE</td>
            <td className="td-text">
              Design Strategy, Interaction Design, Visual Design
            </td>
          </tr>
          <tr>
            <td className="td-bolded">CONTRIBUTION</td>
            <td className="td-text">100%</td>
          </tr>
          <tr>
            <td className="td-bolded">PROGRAM</td>
            <td className="td-text">Illustrator, Photoshop</td>
          </tr>
        </table>
      </div>
      <img src={freshlyMock} alt="freshly-mock" className="product-mock-wide" />
    </ContentPageHeader>
  );
};

export default FrshHeader;
