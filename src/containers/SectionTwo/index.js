import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
	background-color: red;
	width: 1000px;
`;

class SectionTwo extends Component {
	render() {
		return <Section>SectionTwo</Section>;
	}
}

export default SectionTwo;
