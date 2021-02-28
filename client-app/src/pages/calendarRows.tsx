import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryRows from "../components/diaryRows";

export default function CalendarRows(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		border: 0.15rem solid black;
		display: flex;
		flex-direction: row;
		//flex-grow: 1;
		width: 50%;
		height: 100%;
		box-sizing: border-box;
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
