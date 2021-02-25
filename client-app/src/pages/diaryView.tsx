import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";

export default function DiaryView(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		//margin-right: 4rem;
		border: 0.15rem solid black;
		flex-direction: column;
		flex-grow: 1;

		max-width: 50rem;
		max-height: 53.5rem;
	`;

	const Button = styled.button`
		width: 4.8em;
		height: 1.8em;
		border: 1px solid black;
		margin-left: 46.7em;
		border-radius: 8%;
	`;
	const Comments = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	`;

	return (
		<Main>
			<DiaryContent />
			<Button>수정하기</Button>
			<Comments>
				<Comment />
				<Comment />
			</Comments>
		</Main>
	);
}
