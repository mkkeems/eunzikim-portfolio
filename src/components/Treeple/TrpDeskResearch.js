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
    text-transform: uppercase;
    font-size: ${getvw(35)};
    font-weight: 600;
    text-align: center;
  }

  .desk-research-wrap {
    background-color: #f7f2dd;
    border-radius: ${getvw(35)};
    padding: ${getvw(126)} ${getvw(176)};
    width: 100%;
  }

  .trp-desk-research-table {
    margin-top: ${getvw(110)};
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;

    td,
    th {
      border: 1px solid #dedede;
    }

    th {
      background-color: #ebfbfc;
      padding: ${getvw(30)};
      color: #2362e0;
      font-size: ${getvw(20)};
      font-weight: 600;
    }

    tr {
      th:first-child {
        color: black;
      }
      td {
        width: 20%;
        padding: ${getvw(33)} ${getvw(33)} ${getvw(33)} ${getvw(40)};
        background-color: white;
        font-size: ${getvw(18)};
        line-height: ${getvw(30)};
        vertical-align: middle;

        ul {
          list-style-position: outside;
          list-style-type: "-  ";
          li {
            margin-bottom: ${getvw(33)};
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
        color: #36d0d0;
        font-size: ${getvw(20)};
        font-weight: 600;
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
