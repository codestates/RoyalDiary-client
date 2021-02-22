import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Application(): ReactElement {
	const Main = styled.div`
		flex-grow: 1;
	`;

	return <Main />;
}
