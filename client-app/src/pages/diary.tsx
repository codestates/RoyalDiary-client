import axios from "axios";
import React, { ReactElement, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import CDiary from "../components/diary";
import Emotion from "../components/emotion";
import NotificationModal from "../components/NotificationModal";

interface paintDataProps {
	weatherData: string;
	imageUrl: string;
	imageData: string;
}

export default function Diary(props: paintDataProps): ReactElement {
	const { weatherData, imageUrl, imageData } = props;
	const history = useHistory();
	const [isPublicDiary, setIsPublic] = useState(false);
	const [diaryTitle, setTitle] = useState("");
	const [diaryContent, setContent] = useState("");
	const [diaryEmotion, setEmotion] = useState("");
	// 메세지
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
	// 모달 메세지
	const [modalMessage, setModalMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	const saveDiary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const Id = e.target.id as string;
		const value = e.target.value as string;

		if (Id === "typeTitle") {
			setTitle(value);
		} else if (Id === "typeContent") {
			setContent(value);
		} else {
			setEmotion(Id);
		}
	};

	const setPublic = () => {
		if (isPublicDiary === false) {
			setIsPublic(true);
		} else {
			setIsPublic(false);
		}
	};

	const setTime = () => {
		setTimeout(() => {
			setMsgVisible(false);
		}, 2000);
	};
	const handleSubmit = async () => {
		const isLoginSession = JSON.parse(sessionStorage.getItem("isLogin") || "1");
		const accessToken = sessionStorage.getItem("accessToken") as string;

		if (isLoginSession !== true) {
			setMessage("로그인을 해주세요 :)");
			setMsgVisible(true);
			setTime();
			return;
		}
		if (weatherData === "") {
			setMessage("날씨를 선택해주세요");
			setMsgVisible(true);
			setTime();
			return;
		}
		if (imageUrl === "" || imageData === "") {
			setMessage("그림 완료 버튼을 누르세요");
			setMsgVisible(true);
			setTime();
			return;
		}
		if (diaryTitle === "") {
			setMessage("제목을 써주세요");
			setMsgVisible(true);
			setTime();
			return;
		}
		if (diaryContent === "") {
			setMessage("내용을 써주세요");
			setMsgVisible(true);
			setTime();
			return;
		}
		if (diaryEmotion === "") {
			setMessage("기분을 선택해주세요");
			setMsgVisible(true);
			setTime();
			return;
		}

		await axios
			.post(
				"https://royal-diary.ml/contents/ccontent",
				{
					// 여기서부터 시작하기. api body parameter 서버에 변경 요청
					weather: weatherData,
					imgUrl: imageUrl,
					imgMain: imageData,
					title: diaryTitle,
					content: diaryContent,
					emotion: diaryEmotion,
					isPublic: isPublicDiary,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
						withCredentials: true,
					},
				}
			)
			.then((res) => {
				console.log(res);
				if (res.data.message === "ok") {
					console.log("working?");
					setModalMessage("그림일기가 등록되었습니다");
					setModalVisible(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
		// Storage.removeItem() 세션 스토리지에서 데이터 삭제. 로그인 여부, 토큰 제외...
	};

	useEffect(() => {
		if (diaryEmotion !== "") {
			if (diaryEmotion === "happy") {
				setMessage("오늘은 행복해요");
				setMsgVisible(true);
			} else if (diaryEmotion === "smile") {
				setMessage("기분이 좋아요");
				setMsgVisible(true);
			} else if (diaryEmotion === "soso") {
				setMessage("...그저 그래요");
				setMsgVisible(true);
			} else if (diaryEmotion === "annoyed") {
				setMessage("으!! 짜증나요");
				setMsgVisible(true);
			} else if (diaryEmotion === "sad") {
				setMessage("오늘은 좀 슬퍼요");
				setMsgVisible(true);
			}
			setTime();
		}
	}, [diaryEmotion]);

	return (
		<Main>
			<CDiary saveDiary={saveDiary} />
			<Emotion saveDiary={saveDiary} />
			<DivValid>
				<ValidityBox theme={msgVisible}>{message}</ValidityBox>
			</DivValid>
			<Buttons>
				<Button onClick={() => history.push("/")}>뒤로가기버튼</Button>
				<Button>장소등록버튼</Button>
				<PButton>
					<PublicBtn theme={isPublicDiary} onClick={setPublic}>
						공개버튼
					</PublicBtn>
					<PrivateBtn theme={isPublicDiary} onClick={setPublic}>
						비공개버튼
					</PrivateBtn>
				</PButton>
				<Button onClick={handleSubmit}>완료버튼</Button>
			</Buttons>
			<NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} />
		</Main>
	);
}
const Main = styled.div`
	background: #f6f6ee;
	/* border: 5px solid black; */
	box-sizing: border-box;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		min-width: 400px;
		height: 70%;
	}
`;
const DivValid = styled.div`
	/* border: 3px solid green; */
	width: 100%;
	height: 2rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const ValidityBox = styled.div`
	/* border: 3px solid red; */
	/* width: 8rem; */
	height: 1.8rem;
	padding: 0rem 1rem 0rem 1rem;
	margin-right: 2rem;
	background: #f08080;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	animation: a 2s;
	@keyframes a {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 480px) {
		::after {
			border-top: 0px solid transparent;
			border-left: none;
			border-right: none;
			border-bottom: 10px solid #f08080;
			content: "";
			position: absolute;
			top: -10px;
			left: 120px;
		}
	}
`;
const Buttons = styled.div`
	/* border: 5px solid black; */
	flex-grow: 0.5;
	padding-right: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 480px) {
		padding-right: 2rem;
	}
`;
const Button = styled.button`
	/* border: 1px solid black; */
	background: #f6f6ee;
	margin-right: 1rem;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.7rem;
		/* width: 5rem; */
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
const PButton = styled.div`
	/* border: 3px solid red; */
	display: flex;
	width: 6rem;
	margin-right: 1rem;
	justify-content: center;
`;
const PublicBtn = styled.button`
	/* border: 1px solid black; */
	background: #f6f6ee;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.7rem;
		/* width: 5rem; */
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
const PrivateBtn = styled.button`
	/* border: 1px solid black; */
	background: #f6f6ee;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.7rem;
		/* width: 5rem; */
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
