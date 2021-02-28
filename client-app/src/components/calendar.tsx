import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import "react-calendar/dist/Calendar.css";
import ReactCalendar from "react-calendar";
import "./a.css";

export default function Calendar(): ReactElement {
	const Date = styled.div`
		margin-top: 10%;
		margin-left: 10%;
		height: 35%;
		width: 80%;
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 1200px) {
			margin: 3 px auto;
		}
	`;

	const style1 = {
		fontSize: "15px",
	};

	return (
		<Date>
			<ReactCalendar className="main" />
		</Date>
	);
}
