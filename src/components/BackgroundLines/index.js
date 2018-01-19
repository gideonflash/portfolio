import React from "react";
import styled from "styled-components";

const Line = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  bcolor: props => props.bdcolour || "red"
})`
  position: fixed;
  z-index: 0;
  top: 60px;
  bottom: 131px;
  left: 10%;
  border: 0.5px solid;
  @media (max-width: 420px) {
    left: 25%;
        top: 63px;

 }

  /* here we use the dynamically computed props */
  border-color: ${props => props.bcolor};
`;

const Line2 = Line.extend`
  left: 20%;
@media (max-width: 420px) {
  left: 50%;
    top: 63px;
}
`;
const Line3 = Line.extend`
  left: 30%;
  @media (max-width: 420px) {
    left: 75%;
        top: 63px;

 }
`;
const Line4 = Line.extend`
  left: 40%;
  @media (max-width: 420px) {
   display: none;
 }
`;
const Line5 = Line.extend`
  left: 50%;
  @media (max-width: 420px) {
   display: none;
 }
`;

const Line6 = Line.extend`
  left: 60%;
  @media (max-width: 420px) {
   display: none;
 }
`;
const Line7 = Line.extend`
  left: 70%;
  @media (max-width: 420px) {
   display: none;
 }
`;
const Line8 = Line.extend`
  left: 80%;
  @media (max-width: 420px) {
   display: none;
 }
`;
const Line9 = Line.extend`
  left: 90%;
  @media (max-width: 420px) {
   display: none;
 }
`;

const BackgroundLines = props => (
  <div>
    <Line bdcolour={props.lineColour} />
    <Line2 bdcolour={props.lineColour} />
    <Line3 bdcolour={props.lineColour} />
    <Line4 bdcolour={props.lineColour} />
    <Line5 bdcolour={props.lineColour} />
    <Line6 bdcolour={props.lineColour} />
    <Line7 bdcolour={props.lineColour} />
    <Line8 bdcolour={props.lineColour} />
    <Line9 bdcolour={props.lineColour} />
  </div>
);

export default BackgroundLines;
