import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Good from "../assets/images/stamp/good.png";
import Cheer from "../assets/images/stamp/cheer.png";
import Fail from "../assets/images/stamp/fail.png";

const nickname = sessionStorage.getItem("nickName");
const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

function Comment(props: any): any {
	const { comment, updateHandler, updateId } = props;
	const [updateItem, setUpdateItem] = useState(0);
	const [stampGood, setGoodStamp] = useState(false);
	const [stampCheer, setCheerStamp] = useState(false);
	const [stampFail, setFailStamp] = useState(false);
	const [changedtext, setText] = useState("");
	if (comment) {
		comment.createdAt = comment.createdAt.slice(0, 10);
	}
	const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const textValue = event.target.value;
		setText(textValue);
	};
	function checkStamp() {
		if (stampGood === true) {
			return 1;
		}
		if (stampCheer === true) {
			return 2;
		}
		if (stampFail === true) {
			return 3;
		}
		return 0;
	}
	const checkedStamp = checkStamp();

	function stampPicker(stampId: number) {
		if (stampId === 1) {
			if (stampGood === false) {
				setGoodStamp(true);
				setCheerStamp(false);
				setFailStamp(false);
			} else {
				setGoodStamp(false);
			}
		} else if (stampId === 2) {
			if (!stampCheer) {
				setCheerStamp(true);
				setGoodStamp(false);
				setFailStamp(false);
			} else {
				setCheerStamp(false);
			}
		} else if (stampId === 3) {
			if (!stampFail) {
				setFailStamp(true);
				setGoodStamp(false);
				setCheerStamp(false);
			} else {
				setFailStamp(false);
			}
		}
	}

	async function updateComment() {
		await axios
			.patch(
				"contents/ucomment",
				{ stampId: checkedStamp, text: changedtext, commentId: comment.commentId },
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then(() => {
				updateHandler(0);
				window.location.reload();
			});
	}
	async function deleteComment(id: number) {
		const data = await axios
			.delete("contents/dcomment", {
				headers: { Authorization: `Bearer ${token}` },
				data: { commentId: id },
			})
			.catch((err) => {
				alert("본인이 작성한 댓글만 삭제 가능합니다.");
			});
		if (data) {
			window.location.reload();
		}
	}

	const stamp1 = comment.stampId === 1;
	const stamp2 = comment.stampId === 2;
	const stamp3 = comment.stampId === 3;

	return (
		<CommentStyle theme={updateId}>
			<CommentUser>
				<CommentContents>{comment.nickname}님의 한마디 </CommentContents>
				<CommentCreated theme={updateId}>{comment.createdAt}</CommentCreated>
			</CommentUser>
			<Commentbox>
				{updateId !== comment.commentId ? (
					<CommentText> {comment.text}</CommentText>
				) : (
					<UpdateInput onChange={handleText} />
				)}
				{updateId !== comment.commentId ? (
					/* eslint-disable-next-line */
					<img src={stamp1 ? Good : stamp2 ? Cheer : stamp3 ? Fail : ""} width="20%" height="20%" alt="" />
				) : (
					""
				)}
			</Commentbox>
			{updateId === comment.commentId ? (
				<div className="stamp" style={{ width: "50%" }}>
					<GoodStamp style={{ width: "25%" }} theme={stampGood} onClick={() => stampPicker(1)} />
					<CheerStamp style={{ width: "25%" }} theme={stampCheer} onClick={() => stampPicker(2)} />
					<FailStamp style={{ width: "25%" }} theme={stampFail} onClick={() => stampPicker(3)} />
				</div>
			) : (
				""
			)}
			<ButtonBox>
				{nickname === comment.nickname ? (
					<UpdateBtn theme={updateId} onClick={() => updateHandler(comment.commentId)}>
						댓글 수정
					</UpdateBtn>
				) : (
					""
				)}
				{nickname === comment.nickname ? (
					<DeleteBtn
						onClick={() => {
							deleteComment(comment.commentId);
						}}
						theme={updateId}
					>
						댓글삭제
					</DeleteBtn>
				) : (
					""
				)}
				{!comment.text ? (
					/* eslint-disable-next-line */
					<Stamps>
						<GoodStamp />
						<CheerStamp />
						<FailStamp />
					</Stamps>
				) : (
					""
				)}

				<div>
					{updateId === comment.commentId ? <GoBackBtn onClick={() => updateHandler(0)}>뒤로가기</GoBackBtn> : ""}
					{updateId === comment.commentId ? (
						<SendUpdateBtn onClick={() => updateComment()}>수정하기</SendUpdateBtn>
					) : (
						""
					)}
				</div>
			</ButtonBox>
		</CommentStyle>
	);
}

const CommentStyle = styled.div`
	background: #edede9;
	width: 90%;
	height: ${(props) => (props.theme > 0 ? "73%" : "55%")};
	margin: 0.5%;
	border: 1px solid black;
	margin-top: 2%;
`;

const CommentUser = styled.div`
	justify-content: space-between;
	display: flex;
	text-align: center;
	width: 95%;
`;
const CommentContents = styled.span`
	font-size: 1.2rem;
	background: #bbb8b8;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		background: grey;
	}
`;
const CommentCreated = styled.span`
	font-size: 1.5rem;
	display: ${(props) => (props.theme > 0 ? "none" : null)};
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Commentbox = styled.span`
	display: flex;
`;
const CommentText = styled.span`
	align-items: center;
	display: flex;
	font-size: 1.2em;
	margin: 0px;

	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const ButtonBox = styled.div`
	width: 98%;
	display: flex;
	justify-content: flex-end;
`;

const UpdateBtn = styled.button`
	border: 0;
	display: ${(props) => (props.theme > 0 ? "none" : "")};
	&:hover {
		background: black;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}
`;
const DeleteBtn = styled.button`
	border: 0;
	display: ${(props) => (props.theme > 0 ? "none" : "")};
	&:hover {
		background: black;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}
`;
const UpdateInput = styled.input.attrs({
	type: "text",
	placeholder: "20자 이내로 입력하세요",
	maxLength: 20,
})`
	width: 70%;
	height: 3rem;
	background: white;
	margin-top: 2%;
	margin-left: 1%;
	resize: none;
	font-size: 1em;
`;
const GoodStamp: any = styled.img.attrs({
	src: Good,
})`
	transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
	animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
	width: 8%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const CheerStamp: any = styled.img.attrs({
	src: Cheer,
})`
	transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
	animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
	width: 8%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const FailStamp: any = styled.img.attrs({
	src: Fail,
})`
	transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
	animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
	width: 8%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const GoBackBtn = styled.button`
	border: 0;
	margin-top: 10%;
	&:hover {
		background: black;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}
`;
const SendUpdateBtn = styled.button`
	border: 0;
	margin-top: 10%;
	&:hover {
		background: black;
		color: white;
		font-size: 1rem;
		cursor: pointer;
	}
`;

const Stamps = styled.div`
	width: 60%;
	height: 130%;
	margin: 0;
`;

export default Comment;
