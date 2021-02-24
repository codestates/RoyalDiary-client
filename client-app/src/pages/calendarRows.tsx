import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryRows from "../components/diaryRows";

export default function CalendarRows(): ReactElement {
	const Main = styled.div`
		display: flex;
		flex-direction: column;
		background: #f3f3e9;
		width: 50%;
	`;
	const Box = styled.div`
		//background: whitesmoke;
		width: 80%;
		height: 80%;
		margin: 10%;
		border: 0.2em solid black;
	`;

	return (
		<Main>
			<Box>
				<DiaryRows />
				<DiaryRows />
				<DiaryRows />
				<DiaryRows />
			</Box>
		</Main>
	);
}
