import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";

export default function DiaryView(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		//display: flex;
		width: 50%;
		height: 101%;
		box-sizing: border-box;
		flex-direction: column;
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
		overflow: scroll;
		height: 10%;
		border: 0.15rem solid black;
		margin-left: 10%;
		margin-top: 5.8%;
		width: 82%;
	`;

	return (
		<Main>
			<DiaryContent />
			<Comments>
				<Comment />
				<Comment />
				<Comment />
			</Comments>
		</Main>
	);
}
