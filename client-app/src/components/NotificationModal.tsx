import React, { ReactElement } from "react";

import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: (e: boolean) => void;
	message: string;
}

export default function NotificationModal(props: Props): ReactElement {
	const { modalIsOpen, setIsOpen, message } = props;

	function closeModal() {
		if (message === "모든 입력사항은 필수 입니다") {
			setIsOpen(false);
		} else if (message === "회원가입 되었습니다:)") {
			window.location.href = "/";
			setIsOpen(false);
		} else if (message === "오늘은 어떤 일이 있었나요?:)") {
			setIsOpen(false);
			window.location.reload(); // 모달창 제거
		} else if (message === "그림일기가 등록되었습니다") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/diaryview"; // 일기 수정으로 남아있던 데이터 삭제
			setIsOpen(false);
		} else if (message === "그림일기가 수정되었습니다") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/diaryview";
			setIsOpen(false);
		}
	}

	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<Title>{message}</Title>
				<BackBtn>
					<button onClick={closeModal} type="button">
						확인
					</button>
				</BackBtn>
			</ModalBox>
		</Modal>
	);
}
const ModalBox = styled.div`
	/* border: 10px solid yellow; */
	margin: auto;
	/* padding-left: 4rem; */
	width: 30rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	z-index: 1;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
`;
const BackBtn = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: flex-end;
	padding-right: 3rem;
	button {
		border: 1px solid black;
		background-color: white;
		width: 5rem;
		height: 3rem;
		font-size: 1rem;
		:hover {
			cursor: pointer;
			background-color: black;
			color: white;
		}
	}
`;
const ModalStyles = {
	content: {
		margin: "auto",
		width: "22rem",
		height: "18rem",
		background: "#f3f3e9",
		display: "flex",
		alignItems: "center",
	},
};
