import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Cmanual(): ReactElement {
	return <Main />;
}
const Main = styled.div`
	// border: 10px solid black;
	flex-grow: 1;
	position: relative;
	left: -2rem;
	bottom: 1rem;
	margin: auto;
	display: flex;
`;
