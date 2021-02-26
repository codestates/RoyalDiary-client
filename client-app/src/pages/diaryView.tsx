import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";

export default function DiaryView(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		width: 50%;
		max-height: 54rem;
		box-sizing: border-box;
		//margin-right: 4rem;
		border: 0.15rem solid black;
		flex-direction: column;
		flex-grow: 1;
		@media only screen and (max-width: 1200px) {
			width: 80%;
		}
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
