import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function CPaint(): ReactElement {
	const Main = styled.div`
		border: 3px solid black;
		flex-grow: 4.5;
		display: flex;
		margin: 1rem 1rem 2rem 1rem;
	`;

	return <Main />;
}
