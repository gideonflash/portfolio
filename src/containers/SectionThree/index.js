import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
	background-color: pink;
	width: 1000px;
`;

class SectionThree extends Component {
	render() {
		return <Section>SectionThree</Section>;
	}
}

export default SectionThree;
