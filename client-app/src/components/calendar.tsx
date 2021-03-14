import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import ReactCalendar from "react-calendar";
import "./a.css";

export default function Calendar(): ReactElement {
	return (
		<Date>
			<ReactCalendar className="main" />
		</Date>
	);
}
const Date = styled.div``;
