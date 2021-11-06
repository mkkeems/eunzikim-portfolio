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
      font-size: 14px;
      margin-top: 65px;
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
          font-size: 16px;
          width: 22%;
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
    }
    .num-circle {
      margin-right: 14px;
      padding: 12px;
      border-radius: 45px;
      background: #bdd7df;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;

      .num-num {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .interview-wrap {
      background-color: #d5beb0;
      border-radius: 35px;
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
                    <div className="num-circle">
                      <p className="num-num">1</p>
                    </div>
                    Status of taking supplements for health
                  </li>
                  <li>
                    <div className="num-circle">
                      <p className="num-num">2</p>
                    </div>
                    Understand the precautions
                  </li>
                  <li>
                    <div className="num-circle">
                      <p className="num-num">3</p>
                    </div>
                    Needs and perception of supplements
                  </li>
                  <li>
                    <div className="num-circle">
                      <p className="num-num">4</p>
                    </div>
                    Information of supplement shopping
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
                    <div className="num-circle">
                      <p className="num-num">1</p>
                    </div>
                    Identification of behavior patterns on health care
                  </li>
                  <li className="wider">
                    <div className="num-circle">
                      <p className="num-num">2</p>
                    </div>
                    Problems related to supplements
                  </li>
                  <li className="wider">
                    <div className="num-circle">
                      <p className="num-num">3</p>
                    </div>
                    Needs and service idea of supplements
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
