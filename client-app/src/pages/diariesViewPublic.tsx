import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryCard from "../components/diaryCard";

export default function DiariesViewPublic(): ReactElement {
	return (
		<Main>
			<Content>
				<Title>일기보기</Title>
				<Buttons>
					<SortButton>좋아요 순</SortButton>
					<SortButton>최근 순</SortButton>
				</Buttons>
			</Content>
			<Cards>
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
				<DiaryCard />
			</Cards>
		</Main>
	);
}

const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	flex-direction: column;
	flex-grow: 0.68;
	//margin-left: 6rem;
	width: 50%;
	height: 89vh;
	box-sizing: border-box;
	border-right: 5px solid black;
	@media only screen and (max-width: 1200px) {
		/* margin-left: 1rem; */
		width: 70%;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		width: 100%;
		height: 90%;
		margin: 0px;
	}
`;
const Content = styled.div`
	margin-top: 5%;
	margin-left: 5%;
	display: flex;
	width: 100%;
	height: 2.5rem;
	justify-content: space-between;
`;
const Cards = styled.div`
	width: 88%;
	height: 75%;
	border: 1px solid black;
	margin: 2% auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: white;
	@media only screen and (max-width: 480px) {
		margin-top: 15%;
		height: 50%;
	}
`;

const Title = styled.span`
	font-size: 2rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

const Buttons = styled.div`
	flex-direction: row;
	margin-right: 11%;
`;

const SortButton = styled.button`
	width: 5rem;
	height: 2rem;
	border: 0.1rem solid black;
	background: white;
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
		width: 4rem;
		height: 1.6rem;
	}
`;
