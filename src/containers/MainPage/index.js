import React, { Component } from "react";
import styled from "styled-components";
import LandingPageNavigation from "../../components/Header";
import SectionTop from "../SectionOne";

const Wrapper = styled.div`
	background-color: black;
`;
const Section = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
`;
class MainPage extends Component {
	render() {
		return (
			<Wrapper>
				<LandingPageNavigation />
				<Section>
					<SectionTop />
				</Section>
			</Wrapper>
		);
	}
}

export default MainPage;
