import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Comment from "../components/comment";
import Good from "../assets/images/stamp/good.png";
import Cheer from "../assets/images/stamp/cheer.png";
import Fail from "../assets/images/stamp/fail.png";

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: any;
	content: number;
	comments: any;
}

interface CssProps {
	isTrue?: boolean;
	picture?: any;
}

axios.defaults.baseURL = "https://royal-diary.ml";
const token = sessionStorage.getItem("accessToken");
const isLogin = sessionStorage.getItem("isLogin");

export default function CommentlModal(props: Props): ReactElement {
	const history = useHistory();
	const { modalIsOpen, setIsOpen, content, comments } = props;
	const [text, setText] = useState("");
	const [stampGood, setGoodStamp]: any = useState(false);
	const [stampCheer, setCheerStamp]: any = useState(false);
	const [stampFail, setFailStamp]: any = useState(false);
	const [updateId, setUpdateId] = useState(0);

	function updateHandler(id: number) {
		setUpdateId(id);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const textValue = event.target.value;
		setText(textValue);
	};

	async function createComment(comment: string, id: number, stamp: number) {
		if (!isLogin) {
			alert("로그인 후 사용 가능합니다.");
		}

		if (comment && id && stamp) {
			await axios.post(
				"contents/comment",
				{ text: comment, contentId: id, stampId: stamp },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			window.location.reload();
		}
		if (!comment) {
			alert("댓글을 입력하세요");
		}
	}

	function changeStamp(stampId: number) {
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

	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<BackBtn>
					<button onClick={closeModal} type="button" style={btnStyle}>
						X
					</button>
				</BackBtn>
				<Title>댓글로 친구를 응원해주세요:)</Title>
				<Comments>
					{comments !== [] && comments !== undefined
						? comments.map((ele: any) => {
								return <Comment updateId={updateId} updateHandler={updateHandler} comment={ele} />;
						  })
						: "댓글이 없습니다."}
				</Comments>

				<Buttons>
					<CommentBox>
						<CommentBoxTitle>한마디쓰기</CommentBoxTitle>
						<CommentInput onChange={handleText} />
						<CreateZone>
							<CommentStampSend>
								<GoodStamp theme={stampGood} onClick={() => changeStamp(1)} />
								<CheerStamp theme={stampCheer} onClick={() => changeStamp(2)} />
								<FailStamp theme={stampFail} onClick={() => changeStamp(3)} />
								<CommentSendButton
									onClick={() => {
										createComment(text, content, checkedStamp);
									}}
								>
									등록하기
								</CommentSendButton>
							</CommentStampSend>
						</CreateZone>
					</CommentBox>
				</Buttons>
			</ModalBox>
		</Modal>
	);
}
const CommentBox = styled.div`
	width: 90%;
	height: 105%;
	border: 0.1rem solid black;
	margin: 1%;
	background: #ededed;
`;
const CommentBoxTitle = styled.h3`
	margin: 1% 4%;
`;

const CommentInput = styled.input.attrs({
	type: "text",
	placeholder: "20자 이내로 입력하세요",
	maxLength: 20,
})`
	width: 82%;
	height: 30%;
	background: white;
	margin-top: 1%;
	margin-left: 4%;
	resize: none;
	font-size: 1em;
`;

const CommentStampSend = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1.3rem;
`;

const CommentSendButton: any = styled.button`
	width: 20%;
	margin-left: 32%;
	height: 25px;
	align-items: center;
	justify-content: center;
	display: flex;
	font-size: 1rem;
	&:hover {
		color: white;
		background: grey;
		cursor: pointer;
	}
`;
// 댓글창

const ModalStyles = {
	content: {
		margin: "auto",
		width: "35rem",
		height: "33rem",
		background: "#f3f3e9",
		display: "flex",
	},
};

const ModalBox = styled.div`
	margin: 1px;
	width: 45rem;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
	margin-top: 2%;
	margin-bottom: 3%;
`;
const Buttons = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: center;
`;
const BackBtn = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: flex-end;
`;
const btnStyle = {
	border: "1px solid black",
	width: "1.5rem",
	height: "1.3rem",
	fontSize: "1rem",
};
const Comments: any = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	overflow: scroll;
	margin-left: 5%;
	width: 90%;
	height: 1000%;
	border: 2px solid black;
`;
const CreateZone = styled.div``;

const GoodStamp: any = styled.img.attrs({
	src: Good,
})`
	transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
	animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
	width: 10%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}
	&:hover {
		width: 25%;
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
	width: 10%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}
	&:hover {
		width: 25%;
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
	width: 10%;
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}

	&:hover {
		width: 25%;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
