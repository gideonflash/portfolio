import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-family: SanFranciscoText-Regular;
  font-size: 14px;
  color: #443d3d;
  letter-spacing: 0;
  margin-top: 4px;
  @media (max-width: 420px) {
    font-size: 13px;
  }
  @media only screen and (device-width: 768px) {
    font-size: 16px;
    margin-left: 160px;
    margin-right: 68px;
  }
`;

const ProjectText = () => (
  <div>
    <Text>
      Subject as I can. I have been driven by the need to understand, testing my
      learning and trying as hard as I can to disprove evidence that I think is
      true as a way of discovering. Adopting the mental models Subject as I can.
      I have been driven by the need to understand, testing my learning and
      trying as hard as I can to disprove evidence that I think is true as a way
      of discovering. Adopting the mental models
    </Text>
  </div>
);

export default ProjectText;
