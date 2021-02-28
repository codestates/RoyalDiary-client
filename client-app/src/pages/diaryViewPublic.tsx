import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";

export default function DiaryViewPublic(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		margin-right: 8rem;
		max-width: 50rem;
		box-sizing: border-box;
		flex-direction: column;
		flex-grow: 1;
	`;

	const Button = styled.button`
		width: 5em;
		height: 2em;
		border: 1px solid black;
		margin-left: 76%;
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
				<Comment />
			</Comments>
		</Main>
	);
}
