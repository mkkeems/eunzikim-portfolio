import React from "react";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #008521;
  padding: ${getvw(117)} ${getvw(490)};
  color: white;
  text-align: center;

  h3 {
    font-size: ${getvw(20)};
    margin-bottom: ${getvw(40)};
    text-transform: uppercase;
  }
  h1 {
    font-size: ${getvw(30)};
    line-height: ${getvw(35)};
  }
  p {
    margin-top: ${getvw(20)};
    font-size: ${getvw(18)};
    line-height: ${getvw(20)};
  }
`;

const FrshProblem = () => {
  return (
    <Wrap>
      <h3>Problem statement</h3>
      <h1>
        “How can I improve introducing ‘Freshly’ to <br />
        new customers and reduce its bounce rate?”
      </h1>
      <p>
        Introduce possible buyers and deliver Freshly brand. How can we do it
        effectively? We need to see who is our main target. Once we catch
        possible buyers’ eyes, they would stay on the website to know our menu
        and service.{" "}
      </p>
    </Wrap>
  );
};

export default FrshProblem;