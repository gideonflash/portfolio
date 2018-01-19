import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */

injectGlobal`
@font-face {
  font-family: "Futura-CondensedMedium";
  src: url("./fonts/futura_medium_condensed_bt-webfont.woff") format("woff"),
    url("./fonts/futura_medium_condensed_bt-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Futura-CondensedLight";
  src: url("./fonts/futura-condensedlight.otf") format("truetype");
}

@font-face {
  font-family: "Futura-Bold";
  src: url("./fonts/futura bold font.ttf") format("truetype");
}

@font-face {
  font-family: "FuturaBT-Medium";
  src: url("./fonts/futura medium bt.ttf") format("truetype");
}
  html,
  body {
    margin: 0px;
    padding: 0px;
    font-family:'Futura-Bold', sans-serif;
    background-color: #ffffff;

  }


`;
