import React from "react";
import fistbump from "../../assets/images/fist-bump.png";
import styled from "styled-components/macro";
import { getvw } from "../../assets/styles/mixins";
import { colors } from "../../assets/styles/variables";

const Wrap = styled.div`
  padding: ${getvw(200)} ${getvw(306)} ${getvw(120)};
  position: relative;

  .fistbump {
    position: absolute;
    width: ${getvw(618)};
    transform: rotate(5deg);
    right: ${getvw(180)};
    top: ${getvw(108)};
  }

  .header-text {
  }

  .purple {
    color: ${colors.purple};
  }

  h1 {
    font-size: ${getvw(48)};
    font-weight: 500;
    margin: 0;
    margin-bottom: ${getvw(56)};
  }
  h2 {
    font-size: ${getvw(30)};
    font-weight: 400;
    color: ${colors.darkGrey};
    margin: 0;
  }
`;

const Header = () => {
  return (
    <Wrap>
      <img src={fistbump} alt="fist bump" className="fistbump" />
      <div className="header-text">
        <h1>
          Hi there!
          <br />
          Nice to e-meet you. I'm <span className="purple">Eunji!</span>
        </h1>
        <h2>
          A designer with a strong focus on digital products & interactive
          experiences. I get inspired from everyday life to social issues in a
          bigger category. Currently looking for new opportunities!
        </h2>
      </div>
    </Wrap>
  );
};

export default Header;
