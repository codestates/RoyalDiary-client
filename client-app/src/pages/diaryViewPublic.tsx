import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";
import CreateComment from "../components/createComment";

export default function DiaryViewPublic(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		margin-right: 4rem;
		border: 0.15rem solid black;
		flex-direction: column;
		flex-grow: 1;
		max-width: 50rem;
		max-height: 53.5rem;
	`;

	const Comments = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	`;

	return (
		<Main>
			<DiaryContent />

			<Comments>
				<CreateComment />
				<Comment />
			</Comments>
		</Main>
	);
}
