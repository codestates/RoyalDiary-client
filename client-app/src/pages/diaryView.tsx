import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";

export default function DiaryView(): ReactElement {
	const Main = styled.div`
		display: flex;
		flex-direction: column;
		background: #fae6ee;
		width: 50%;
		height: 100%;
	`;

	const Button = styled.button`
		width: 3.8rem;
		height: 1.5rem;
		border: 1px solid black;
		margin-left: 46rem;
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
