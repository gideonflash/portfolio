import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const Wrapper = styled.div`
	background-color: blue;
`;

class MainPage extends Component {
	render() {
		return (
			<Wrapper>
				<Header />
				MainPage
			</Wrapper>
		);
	}
}

export default MainPage;
