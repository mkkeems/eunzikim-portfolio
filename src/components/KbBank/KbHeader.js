import React from "react";
import ContentPageHeader from "../ContentPageHeader";
import kbBankMock from "../../assets/images/kbbank.svg";

const KbHeader = () => {
  return (
    <ContentPageHeader>
      <div className="header-text">
        <h1>
          Banking App <br />
          Redesign ‘KB Bank’
        </h1>
        <h2>
          Redesign Korean banking app ‘KB’
          <br /> Decrease wiring money at 12 steps to 6 steps and <br />
          make users feel safer to make signature
        </h2>

        <table className="header-table">
          <tr>
            <td className="td-bolded">DURATION</td>
            <td className="td-text">1 Month</td>
          </tr>
          <tr>
            <td className="td-bolded">MY ROLE</td>
            <td className="td-text">User Research, Design Strategy</td>
          </tr>
          <tr>
            <td className="td-bolded">CONTRIBUTION</td>
            <td className="td-text">70%</td>
          </tr>
          <tr>
            <td className="td-bolded">PROGRAM</td>
            <td className="td-text">Adobe XD, Illustrator, Photoshop</td>
          </tr>
        </table>
      </div>
      <img src={kbBankMock} alt="kb-bank-mock" />
    </ContentPageHeader>
  );
};

export default KbHeader;
