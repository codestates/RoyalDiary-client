import React from "react";
import styled from "styled-components";
import axios from "axios";
import Good from "../assets/images/stamp/good.png";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6rmA6rmA6rmAIiwibmlja25hbWUiOiLsnqDrp4zrs7QiLCJlbWFpbCI6Inp6ekBnbWFpbC5jb20iLCJtb2JpbGUiOiIwMTAxMDEwMTAxIiwiaWF0IjoxNjE1MDMwNDg1LCJleHAiOjE2MTUxMTY4ODV9.0MnDWfoOk4YeimMsXnotKJtSExgWy0IdIhlFNBBPyHA";
axios.defaults.baseURL = "https://royal-diary.ml";

function Comment(props: any) {
	const { comment } = props;
	return (
		<CommentStyle>
			<CommentUser>
				<CommentContents>{comment.nickname}님의 한마디 </CommentContents>
				<CommentCreated>{comment.createdAt}</CommentCreated>
			</CommentUser>
			<Commentbox>
				<CommentText> {comment.text}</CommentText>
				<Stamp />
			</Commentbox>
		</CommentStyle>
	);
}

const CommentStyle = styled.div`
	background: #edede9;
	width: 90%;
	height: 55%;
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

export default Comment;
