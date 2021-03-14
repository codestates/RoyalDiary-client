import React, { ReactElement } from "react";
import styled from "styled-components";
import moment from "moment";
import DiaryCard from "./diaryCard";

moment().format();

export default function DiaryRows(props: any): ReactElement {
	const { comments } = props;
	comments.cratedAt = comments.cratedAt.slice(0, 10);
	comments.day = String(moment(comments.cratedAt)).slice(0, 3);
	comments.date = comments.cratedAt.slice(8, 10);
	console.log(comments);
	return (
		<DiaryBox>
			<DateBox>
				<DayOfWeek>{comments.day}</DayOfWeek>
				<Date>{comments.date}</Date>
			</DateBox>
			<Content>{comments.text}</Content>
		</DiaryBox>
	);
}
const DiaryBox = styled.div`
	display: flex;
	flex-direction: row;
	background: #f3f3e9;
	width: 90%;
	height: 4rem;
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
	width: 80%;
	align-items: center;
	display: flex;
	margin-left: 1em;
	word-break: break-all;
`;
