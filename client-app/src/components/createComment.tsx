import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import Comment from "../components/comment";

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: any;
}

export default function CommentlModal(props: Props): ReactElement {
	const { modalIsOpen, setIsOpen } = props;
	function closeModal() {
		setIsOpen(false);
	}
	let comments: any = sessionStorage.getItem("comments");
	comments = JSON.parse(comments);
	console.log(comments);
	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<BackBtn>
					<button onClick={closeModal} type="button" style={btnStyle}>
						X
					</button>
				</BackBtn>
				<Comments>
					{comments !== null
						? comments.map((ele: any) => {
								return <Comment comment={ele} />;
						  })
						: "댓글이 없습니다."}
				</Comments>

				<Buttons>
					<CommentBox>
						<CommentBoxTitle>한마디쓰기</CommentBoxTitle>
						<CommentInput />
						<CommentStampSend>
							<img
								className="date_weather"
								src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
								alt=""
								width="40px"
								height="40px"
							/>
							<img
								className="date_weather"
								src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
								alt=""
								width="40px"
								height="40px"
							/>
							<img
								className="date_weather"
								src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
								alt=""
								width="40px"
								height="40px"
							/>
							<CommentSendButton>등록하기</CommentSendButton>
						</CommentStampSend>
					</CommentBox>
				</Buttons>
			</ModalBox>
		</Modal>
	);
}
const CommentBox = styled.div`
	width: 71%;
	height: 100%;
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
	width: 90%;
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

const CommentSendButton = styled.button`
	width: 21%;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-left: 36%;
`;
// 댓글창

const ModalStyles = {
	content: {
		margin: "auto",
		width: "50rem",
		height: "30rem",
		background: "#f3f3e9",
		display: "flex",
		alignItems: "center",
	},
};
const ModalBox = styled.div`
	margin: 1px;
	width: 45rem;
	height: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 2rem;
	font-weight: bold;
	text-align: center;
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

const logoStyle = {
	margin: "1rem",
	width: "5rem",
};

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
	height: 100%;
	margin-left: 10%;
	margin-top: 0;
	width: 82%;
`;
