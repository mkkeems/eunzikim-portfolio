import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";
// import { getvw } from "../../assets/styles/mixins";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0px;
    background-color: ${colors.bgLightGrey};

    *{
      box-sizing: border-box;
    }

    h1, h2 {
      font-family: 'Poppins', sans-serif;
    }

    h1{
      font-size: 36px;
      font-weight: 600;
      line-height: 1.2;
    }

    h2{
      font-size: 24px;
      line-height: 1.2;
    }

    p{
      font-size: 16px;
      line-height: 1.2;
    }

    font-size: 18px;
    line-height: 25px;

    @media only screen and (max-width: 768px) {
      font-size: 16px;
      h1{
        font-size: 30px;
      }
      h2{
        font-size: 20px;
      }
    }
  }
`;

export default GlobalStyle;
