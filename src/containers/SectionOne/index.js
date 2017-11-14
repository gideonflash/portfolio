import React, { Component } from "react";
import styled from "styled-components";

const SectionOne = styled.div`
	background-color: blue;
	width: 1000px;
`;

class SectionTop extends Component {
	render() {
		return <SectionOne>SectionOne</SectionOne>;
	}
}

export default SectionTop;
