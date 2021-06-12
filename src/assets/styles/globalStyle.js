import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./variables";
import { getvw } from "../../assets/styles/mixins";

const GlobalStyle = createGlobalStyle`

  body {
    /* font-family: ${fonts.primary}, ${fonts.koreanBold}, sans-serif; */
    font-family: 'Poppins', sans-serif;
    margin: 0px;
    background-color: ${colors.bgLightGrey};

    *{
      box-sizing: border-box;
    }
    
    h1, h2 {
      font-family: 'Poppins', sans-serif;    
    }
  }
`;

export default GlobalStyle;
