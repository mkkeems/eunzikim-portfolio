import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./variables";
import ABCChanelSemiBoldSWoff from "../fonts/ABChanelPBSemiBoldS.woff";
import ABCChanelSemiBoldSWoff2 from "../fonts/ABChanelPBSemiBoldS.woff2";
import ABCChanelRegularWoff from "../fonts/ABChanelPBRegularL.woff";
import ABCChanelRegularWoff2 from "../fonts/ABChanelPBRegularL.woff2";
import MalgunGothicBoldWoff from "../fonts/MalgunGothicBold.woff";
import MalgunGothicBoldWoff2 from "../fonts/MalgunGothicBold.woff2";
import MalgunGothicWoff from "../fonts/MalgunGothic.woff2";
import MalgunGothicWoff2 from "../fonts/MalgunGothic.woff2";

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: 'ABChanel PB SemiBold S';
  src: url(${ABCChanelSemiBoldSWoff2}) format('woff2'),
    url(${ABCChanelSemiBoldSWoff}) format('woff');
  font-style: normal;
}

@font-face {
    font-family: 'ABChanel PB Regular';
    src: url(${ABCChanelRegularWoff2}) format('woff2'),
        url(${ABCChanelRegularWoff}) format('woff');
    font-style: normal;
}

@font-face {
  font-family: 'Malgun Gothic';
  src: url(${MalgunGothicWoff2}) format('woff2'),
    url(${MalgunGothicWoff}) format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Malgun Gothic Bold';
  src: url(${MalgunGothicBoldWoff2}) format('woff2'),
    url(${MalgunGothicBoldWoff}) format('woff');
  font-style: normal;
} */



  body {
    /* font-family: ${fonts.primary}, ${fonts.koreanBold}, sans-serif; */
    font-family: 'Poppins', sans-serif;
    margin: 0px;
    background-color: ${colors.bgLightGrey};
    *{
      box-sizing: border-box;
    }
  }
`;

export default GlobalStyle;
