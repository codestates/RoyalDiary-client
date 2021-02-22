import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Cmanual(): ReactElement {
	const Main = styled.div`
		// border: 10px solid black;
		position: relative;
		left: -2rem;
		bottom: 1rem;
		margin: auto;
		display: flex;
		height: 25%;
		width: 80%;
	`;

	return <Main />;
}
