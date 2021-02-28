import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";
import SocialModal from "../components/socialSignin";
import CommentModal from "../components/createComment";

export default function DiaryViewPublic(): ReactElement {
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
	`;

	const CommentButton = styled.button`
		width: 5em;
		height: 1.8em;
		border: 1px solid black;
		margin-top: 2.2%;
		margin-left: 84%;
		margin-bottom: 0.3%;
		//border-radius: 0.5rem;
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
	const ButtonSole = styled.button`
		border: 1px solid black;
		width: 5rem;
		height: 2.8rem;
		margin: 0.3rem;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
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
