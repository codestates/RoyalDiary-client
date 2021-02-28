import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryCard from "../components/diaryCard";

export default function DiariesViewPublic(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		flex-direction: column;
		flex-grow: 0.68;
		margin-left: 6rem;
		max-width: 40rem;
		height: 89vh;
		box-sizing: border-box;
		border-right: 5px solid black;
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
		//flex-direction: row;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		background: white;
	`;

	const Title = styled.span`
		font-size: 2rem;
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
		//out-line: 0rem;
	`;

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
