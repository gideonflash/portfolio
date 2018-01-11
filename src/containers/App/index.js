import React, { Component } from "react";
import styled from "styled-components";
import MainPage from "../MainPage";

const Line = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  height: 300px;
  left: 10%;
  border: 1px solid #5499b8;
`;
const Line2 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 20%;
  border: 1px solid #5499b8;
`;
const Line3 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 30%;
  border: 1px solid #5499b8;
`;
const Line4 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 40%;
  border: 1px solid #5499b8;
`;
const Line5 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 50%;
  border: 1px solid #5499b8;
`;
const Line6 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 60%;
  border: 1px solid #5499b8;
`;
const Line7 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 70%;
  border: 1px solid #5499b8;
`;
const Line8 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 80%;
  border: 1px solid #5499b8;
`;
const Line9 = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  background-color: red;
  height: 300px;
  left: 90%;
  border: 1px solid #5499b8;
`;

class Main extends Component {
  render() {
    return (
      <div>
        <Line />
        <Line2 />
        <Line3 />
        <Line4 />
        <Line5 />
        <Line6 />
        <Line7 />
        <Line8 />
        <Line9 />
        <MainPage />
      </div>
    );
  }
}

export default Main;
