import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import survey1 from "../../assets/images/treeple-page/trp-survey1.png";
import survey2 from "../../assets/images/treeple-page/trp-survey2.png";
import survey3 from "../../assets/images/treeple-page/trp-survey3.png";
import survey4 from "../../assets/images/treeple-page/trp-survey4.png";

const Wrap = styled.div`
  padding: ${getvw(253)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: ${getvw(35)};
    font-weight: 600;
    text-align: center;
  }

  .flex-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${getvw(170)};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .survey-wrap {
    width: ${getvw(610)};

    table {
      margin-top: ${getvw(65)};
      background-color: #efeee9;
      border-radius: ${getvw(15)};
      width: 100%;
      border-collapse: collapse;
      border-style: hidden;

      td {
        padding: ${getvw(32)} ${getvw(22)};
      }

      tr {
        td:first-child {
          width: 22%;
          font-size: ${getvw(20)};
          vertical-align: middle;
        }
      }
    }
    .survey-table-main {
      background-color: #efeee9;
      td {
        border: 1px solid #dcdcdc;
      }
    }
    .interview-table-main {
      background-color: #d5beb0;
      td {
        border: 1px solid #dcdcdc;
      }
    }

    li {
      margin-bottom: ${getvw(18)};
      display: flex;
      align-items: center;

      &.wider {
        margin-bottom: ${getvw(20)};
        margin-top: ${getvw(18)};
      }
    }
    .num-circle {
      margin-right: ${getvw(14)};
      width: ${getvw(28)};
      height: ${getvw(28)};
      border-radius: 50%;
      background: #bdd7df;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &#wide {
        width: ${getvw(32)};
      }
    }
    .interview-wrap {
      background-color: #d5beb0;
      border-radius: ${getvw(35)};
      width: ${getvw(610)};
    }
  }
  .surveyimg {
    width: ${getvw(610)};
  }
`;

const TrpSurveyInterviews = () => {
  return (
    <Wrap>
      <div className="flex-wrap">
        <div className="survey-wrap">
          <h1>Online survey</h1>
          <table className="survey-table-main">
            <tr>
              <td>Objectives</td>
              <td>The overall perception of supplements</td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>53 people in their 20s and 30s</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>
                <ul>
                  <li>
                    <div className="num-circle">1</div>Status of taking
                    supplements for health
                  </li>
                  <li>
                    <div className="num-circle">2</div>Understand the
                    precautions
                  </li>
                  <li>
                    <div className="num-circle">3</div>Needs and perception of
                    supplements
                  </li>
                  <li>
                    <div className="num-circle">4</div>Information of supplement
                    shopping
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div className="survey-wrap">
          <h1>In-Depth Interview</h1>
          <table className="interview-table-main">
            <tr>
              <td>Objectives</td>
              <td>User experience of supplements</td>
            </tr>
            <tr>
              <td>Subject</td>
              <td>10 supplement intaker in their 20s and 30s</td>
            </tr>
            <tr>
              <td>Content</td>
              <td>
                <ul>
                  <li className="wider">
                    <div className="num-circle" id="wide">
                      1
                    </div>
                    Identification of behavior patterns on health care
                  </li>
                  <li className="wider">
                    <div className="num-circle">2</div>Problems related to
                    supplements
                  </li>
                  <li className="wider">
                    <div className="num-circle">3</div>Needs and service idea of
                    supplements
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="flex-wrap">
        <img src={survey1} alt="survey1" className="surveyimg" />
        <img src={survey2} alt="survey2" className="surveyimg" />
      </div>
      <div className="flex-wrap">
        <img src={survey3} alt="survey3" className="surveyimg" />
        <img src={survey4} alt="survey4" className="surveyimg" />
      </div>
    </Wrap>
  );
};

export default TrpSurveyInterviews;