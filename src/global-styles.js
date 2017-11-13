import { injectGlobal } from "styled-components";
import WebFont from "webfontloader";

/* eslint no-unused-expressions: 0 */

WebFont.load({
	google: {
		families: ["Roboto:300,400,500", "sans-serif"]
	}
});

injectGlobal`
  html,
  body {
    margin: 0px;
    padding: 0px;
    font-family:'Roboto', sans-serif;
    background-color: #EDEEE8;
  }
`;
