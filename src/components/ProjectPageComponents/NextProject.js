import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Arrow from "./images/Arrow.svg";

const SectionNextProject = styled.div`
  width: 1024px;
  height: 100%;
  @media (max-width: 420px) {
    width: 300px;
    height: 100%;
    margin-bottom: 80px;
  }

  @media only screen and (device-width: 768px) {
    width: 659px;
    height: 100%;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  align-items: center;
  @media (max-width: 420px) {
    grid-template-columns: 20% 1fr;
  }
  @media only screen and (device-width: 768px) {
    grid-template-columns: 20% 1fr;
  }
`;

const ViewCaseStudyLink = styled(Link)`
  font-family: SanFranciscoText-Medium;
  font-size: 14px;
  color: #433d3d;
  letter-spacing: 1.63px;
  text-decoration: none;
`;
const Img = styled.img`
  justify-self: end;
`;
const Next = styled.p`
  /* VOGUEPAY: */
  font-family: Futura-Bold;
  font-size: 92px;
  color: #433d3d;
  letter-spacing: 0;
  line-height: 87px;
  @media (max-width: 420px) {
    font-size: 26px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 50px;
  }
`;

const NextProject = () => (
  <SectionNextProject>
    <Next> VOGUEPAY</Next>
    <div>
      <Grid>
        <Img src={Arrow} />
        <ViewCaseStudyLink to="/voguepay">VIEW NEXT PROJECT</ViewCaseStudyLink>
      </Grid>
    </div>
  </SectionNextProject>
);

export default NextProject;
