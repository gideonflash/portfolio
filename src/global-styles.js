import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */

injectGlobal`
@font-face {
  font-family:"Futura-Bold";
  src:url("./fonts/futura bold font.ttf") format("truetype");

}
  html,
  body {
    margin: 0px;
    padding: 0px;
    font-family:'Futura-Bold', sans-serif;
    background-color: #ffffff;

  }


`;
