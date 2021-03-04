import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";
import CommentModal from "../components/createComment";

export default function DiaryView(): ReactElement {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	const Main = styled.div`
		background: #f3f3e9;
		//display: flex;
		width: 50%;
		height: 101%;
		box-sizing: border-box;
		flex-direction: column;
		@media only screen and (max-width: 1200px) {
			width: 90.4%;
			border-right: 5px solid black;
		}
		@media only screen and (max-width: 480px) {
			/* margin-left: 1rem; */
			width: 100%;
			height: 100%;
		}
	`;

	const CommentButton = styled.button`
		width: 5em;
		height: 1.8em;
		border: 1px solid black;
		margin-top: 2.2%;
		margin-left: 84%;
		margin-bottom: 0.3%;

		//border-radius: 0.5rem;
		@media only screen and (max-width: 480px) {
			/* margin-left: 1rem; */

			margin-top: 5%;
			margin-left: 75%;
			margin-bottom: 3%;
		}
	`;
	const Comments = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		overflow: scroll;
		height: 10%;
		border: 0.15rem solid black;
		margin-left: 10%;
		margin-top: 0;
		width: 82%;
	`;

	const btnStyle = {
		border: "1px solid black",
		fontSize: "0.8rem",
		lineHeight: "1.3rem",
	};
	return (
		<Main>
			<DiaryContent />
			<CommentButton type="button" style={btnStyle} onClick={openModal}>
				댓글쓰기
			</CommentButton>
			<Comments>
				<Comment />
				<Comment />
				<Comment />
			</Comments>
			<CommentModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
		</Main>
	);
}
