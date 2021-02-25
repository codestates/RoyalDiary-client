import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import Calendar from "../components/calendar";

export default function CalendarRows(): ReactElement {
	const Main = styled.div`
		//background: ${({ theme }) => theme.black};
		background: #e3e3d1;
		border: 0.15rem solid black;
		//margin-left: 4rem;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		max-width: 50rem;
		@media only screen and (max-width: 768px) {
			margin: 0px;
		}
	`;

	return (
		<Main>
			<Calendar />
		</Main>
	);
}
