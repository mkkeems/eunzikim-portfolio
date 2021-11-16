import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";

const Wrap = styled.div`
  padding: ${getvw(126)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  h1 {
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
  }

  .desk-research-wrap {
    background-color: #f7f2dd;
    border-radius: 35px;
    padding: 80px 140px;
    width: 100%;
  }

  .trp-desk-research-table {
    margin-top: 100px;
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;

    display: block;
    overflow-x: auto;
    /* white-space: nowrap; */

    td,
    th {
      border: 1px solid #dedede;
    }

    th {
      background-color: #ebfbfc;
      padding: 24px;
      color: #2362e0;
      font-size: 16px;
      font-weight: 600;
    }

    tr {
      th:first-child {
        color: black;
      }
      td {
        width: 20%;
        padding: 30px;
        background-color: white;
        font-size: 14px;
        line-height: 1.8;
        vertical-align: middle;

        ul {
          list-style-position: outside;
          list-style-type: "-  ";
          li {
            margin-bottom: 28px;
          }
          li:last-child {
            margin-bottom: 0%;
          }
        }
      }
      td:first-child {
        vertical-align: middle;
        padding: auto;
        background-color: #ebfbfc;
        text-align: center;
        color: ${colors.aqua};
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .desk-research-wrap {
      padding: 30px;
    }
    .trp-desk-research-table {
      margin-top: 30px;
      th {
        font-size: 14px;
      }
      tr {
        td:first-child {
          font-size: 14px;
        }
        td {
          font-size: 12px;
          padding: 10px 20px;
        }
      }
    }
  }
`;

const TrpDeskResearch = () => {
  return (
    <Wrap>
      <div className="desk-research-wrap">
        <h1>Desk Research</h1>
        <table className="trp-desk-research-table">
          <tr>
            <th>Service</th>
            <th>Optima Made</th>
            <th>Pilly</th>
            <th>Pill Pack</th>
            <th>Care Of</th>
          </tr>
          <tr>
            <td>Online/Store</td>
            <td>Online, Store</td>
            <td>Online</td>
            <td>Online</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>Product Type</td>
            <td>Ready-made</td>
            <td>Ready-made</td>
            <td>Personalization</td>
            <td>Personalization</td>
          </tr>
          <tr>
            <td>Feature</td>
            <td>
              <ul>
                <li>Wellness chat service and recommended supplements</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Customized Supplements and subscription service</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Perscribed medicine and supplement subscription</li>
                <li>Online chat with pharmist</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Personalized supplements</li>
                <li>Subscription service</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Pro</td>
            <td>
              <ul>
                <li>Meet pharmist in person</li>
                <li>Can set up favorite pharmacy</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Neat package</li>
                <li>Intake management</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Perscribed medicine</li>
                <li>Online chat with pharmacist</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Neat package</li>
                <li>Gift feature</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Con</td>
            <td>
              <ul>
                <li>Limited pharmacies are connected to the service</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Product variation is limited</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Not available in Korea</li>
                <li>
                  Medicine cannot trade through online store because of medical
                  law
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Not available in Korea</li>
                <li>Frequent delievery error</li>
                <li>Cancellation is difficult</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </Wrap>
  );
};

export default TrpDeskResearch;
