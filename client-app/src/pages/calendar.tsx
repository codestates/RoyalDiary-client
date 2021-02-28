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
		width: 50%;
		box-sizing: border-box;

		@media only screen and (max-width: 1200px) {
			width: 80%;
			height: 100%;
		}
	`;

	return (
		<Main>
			<Calendar />
		</Main>
	);
}
