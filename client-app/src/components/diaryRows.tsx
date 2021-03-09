import React, { ReactElement } from "react";
import styled from "styled-components";
import DiaryCard from "./diaryCard";

export default function DiaryRows(): ReactElement {
	return (
		<DiaryBox>
			<DateBox>
				<DayOfWeek>FRI</DayOfWeek>
				<Date>15</Date>
			</DateBox>
			<Content>오늘은 엄마랑 돈까스를 먹으러갔다. 매우 맛있었다. 치과도 갔는데 의사선생님이 충치가 있다고했다.</Content>
		</DiaryBox>
	);
}
const DiaryBox = styled.div`
	display: flex;
	flex-direction: row;
	background: #f3f3e9;
	width: 90%;
	height: 30%;
	max-width: 100%;
	max-height: 100%;
	border: 0.15em solid black;
	box-sizing: border-box;
	margin: 5% 5%;
	@media only screen and (max-width: 1200px) {
		margin: auto;
		margin-top: 3%;
	}
`;

const DateBox = styled.div`
	width: 15%;
	height: 100%;
	flex-direction: row;
`;

const DayOfWeek = styled.div`
	width: 100%;
	justify-content: center;
	background: #d4d0c5;
	align-items: center;
	display: flex;
	border-bottom: 0.01em solid black;
	border-right: 0.01em solid black;
	height: 40%;
	font-size: 130%;
`;

const Date = styled.div`
	width: 100%;
	height: 60%;
	justify-content: center;
	align-items: center;
	display: flex;
	border-right: 0.01em solid black;
	font-size: 220%;
`;

const Content = styled.span`
	width: 90%;
	align-items: center;
	display: flex;
	margin-left: 1em;
	word-break: break-all;
`;
