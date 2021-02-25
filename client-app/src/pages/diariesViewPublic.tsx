import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryCard from "../components/diaryCard";

export default function DiariesViewPublic(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		margin-left: 4rem;
		flex-direction: column;
		flex-grow: 1;
		max-width: 50rem;
		max-height: 53.5rem;
		border: 0.15rem solid black;
	`;

	const Content = styled.div`
		margin-top: 5%;
		margin-left: 3.5%;
		display: flex;
		width: rem;
		height: 2.5rem;
		justify-content: space-between;
	`;
	const Cards = styled.div`
		width: 45rem;
		height: 45rem;
		border: 1px solid black;
		margin-left: 3.5%;
		flex-direction: row;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background: white;
	`;

	const Title = styled.span`
		font-size: 2rem;
	`;

	const Buttons = styled.div`
		margin-right: 4.9rem;
	`;

	const SortButton = styled.button`
		width: 5rem;
		height: 2rem;
		border: 0.1rem solid black;
		background: white;
		out-line: 0rem;
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
