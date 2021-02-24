import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import Calendar from "../components/calendar";

export default function CalendarRows(): ReactElement {
	const Main = styled.div`
		background: pink;
		width: 50%;
	`;

	return (
		<Main>
			<Calendar />
		</Main>
	);
}
