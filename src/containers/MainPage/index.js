import React, { Component } from "react";
import styled from "styled-components";
import LandingPageNavigation from "../../components/Header";
import SectionTop from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import SectionFour from "../SectionFour";
import SectionFive from "../SectionFive";
import SectionSix from "../SectionSix";
import Footer from "../Footer";

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
					<SectionTwo />
					<SectionThree />
					<SectionFour />
					<SectionFive />
					<SectionSix />
					<Footer />
				</Section>
			</Wrapper>
		);
	}
}

export default MainPage;
