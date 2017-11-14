import { injectGlobal } from "styled-components";
import WebFont from "webfontloader";

/* eslint no-unused-expressions: 0 */

WebFont.load({
	google: {
		families: ["Roboto:300,400,500", "sans-serif"]
	}
});

WebFont.load({
	custom: {
		families: [
			"futura bold font",
			"futura book font",
			"futura-condensedlight",
			"futura",
			"GochiHand-Regular"
		],
		urls: [
			"./Fonts/futura bold font",
			"./Fonts/futura book font",
			"./Fonts/futura-condensedlight",
			"./Fonts/Futura",
			"./Fonts/GochiHand-Regular"
		]
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
