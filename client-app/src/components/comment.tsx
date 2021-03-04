import React from "react";
import styled from "styled-components";
import Good from "../assets/images/stamp/good.png";

function Comment() {
	const CommentBox = styled.div`
		margin-top: 0.5rem;
	`;
	const CommentStyle = styled.div`
		background: #edede9;
		width: 90%;
		height: 140%;
		margin: 0.5%;
		border: 1px solid black;
	`;

	const CommentUser = styled.div`
		justify-content: space-between;
		display: flex;
		text-align: center;
		width: 95%;
	`;
	const CommentContents = styled.span`
		font-size: 1.2rem;
		@media only screen and (max-width: 480px) {
			font-size: 1rem;
			background: grey;
		}
	`;
	const CommentCreated = styled.span`
		font-size: 1rem;
		@media only screen and (max-width: 480px) {
			display: none;
		}
	`;

	const Commentbox = styled.div`
		display: flex;
	`;
	const CommentText = styled.span`
		align-items: center;
		display: flex;
		font-size: 1.4em;
		@media only screen and (max-width: 480px) {
			font-size: 1rem;
		}
	`;
	const Stamp = styled.img.attrs({
		src: Good,
	})`
		width: 12%;
		@media only screen and (max-width: 480px) {
			display: none;
		}
	`;
	return (
		<CommentStyle>
			<CommentUser>
				<CommentContents>뚱이님의 한마디 </CommentContents>
				<CommentCreated>2020-02-21</CommentCreated>
			</CommentUser>
			<Commentbox>
				<CommentText> 선생님은 뚱이를 응원해요!</CommentText>
				<Stamp />
			</Commentbox>
		</CommentStyle>
	);
}

export default Comment;
