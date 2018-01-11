import React, { Component } from "react";
import styled from "styled-components";
import MainPage from "../MainPage";

const Line = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  left: 10%;
  border: 0.5px solid #5499b8;
`;
const Line2 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 20%;
  border: 0.5px solid #5499b8;
`;
const Line3 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 30%;
  border: 0.5px solid #5499b8;
`;
const Line4 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 40%;
  border: 0.5px solid #5499b8;
`;
const Line5 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 50%;
  border: 0.5px solid #5499b8;
`;
const Line6 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 60%;
  border: 0.5px solid #5499b8;
`;
const Line7 = styled.div`
  position: fixed;
  z-index: 0;
  top: 28px;
  bottom: 28px;
  background-color: red;
  left: 70%;
  border: 0.5px solid #5499b8;
`;
const Line8 = styled.div`
  position: fixed;
  z-index: 28px;
  top: 28px;
  bottom: 0;
  background-color: red;
  left: 80%;
  border: 0.5px solid #5499b8;
`;
const Line9 = styled.div`
  position: fixed;
  z-index: 28px;
  top: 28px;
  bottom: 0;
  background-color: red;
  left: 90%;
  border: 0.5px solid #5499b8;
`;

const AppWrapper = styled.div`
  margin: 28px;
  background-color: #60a8c8;
`;

class Main extends Component {
  render() {
    return (
      <AppWrapper>
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
      </AppWrapper>
    );
  }
}

export default Main;
