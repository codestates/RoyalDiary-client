import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import Calendar from "../components/calendar";
import DiaryRows from "../components/diaryRows";

export default function CalendarRows(): ReactElement {
	return (
		<Main>
			<Calendar />
			<Title>다이어리 요약</Title>
			<Comments>
				<DiaryRows />
				<DiaryRows />
				<DiaryRows />
				<DiaryRows />
				<DiaryRows />
			</Comments>
		</Main>
	);
}

const Main = styled.div`
	background: #e3e3d1;
	border-right: 0.15rem solid black;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		width: 70%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
`;

const Comments = styled.div`
	width: 75%;
	height: 20%;
	border: 0.15rem solid black;
	background: white;
	margin: auto;
	overflow: scroll;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		width: 75%;
		height: 20%;
		display: flex;
		justify-content: center;
	}
`;

const Title = styled.div`
	font-size: 2rem;
	margin-left: 13%;
	margin-top: 3%;
`;
