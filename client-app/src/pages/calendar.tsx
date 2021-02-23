import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function CalendarRows(): ReactElement {
	const Main = styled.div`
		background: pink;
		width: 50%;
	`;

	const A = styled.div`
		border: 1px solid black;
	`;

	return (
		<Main>
			<A>dd</A>
		</Main>
	);
}
