import axios from "axios";
import React, { ReactElement, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CDiary from "../components/diary";
import Emotion from "../components/emotion";
import NotificationModal from "../components/NotificationModal";

interface paintDataProps {
	weatherData: string;
	imageUrl: string;
	imageData: string;
	contentInfo: any;
}

export default function Diary(props: paintDataProps): ReactElement {
	const { weatherData, imageUrl, imageData, contentInfo } = props;
	const history = useHistory();
	const [isPublicDiary, setIsPublic] = useState(false);
	const [diaryTitle, setTitle] = useState("");
	const [diaryContent, setContent] = useState("");
	const [diaryEmotion, setEmotion] = useState("");
	// 메세지
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
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
			setMessage("공개 설정되었습니다");
			setMsgVisible(true);
			setTime();
		} else {
			setIsPublic(false);
			setMessage("비공개 설정되었습니다");
			setMsgVisible(true);
			setTime();
		}
	};

	const setTime = () => {
		setTimeout(() => {
			setMsgVisible(false);
		}, 1500);
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
		// 새로 일기 작성할 경우
		if (contentInfo === 0) {
			if (weatherData === "") {
				setMessage("날씨를 선택해주세요");
				setMsgVisible(true);
				setTime();
				return;
			}
			if (imageUrl === "" || imageData === "") {
				setMessage("그림완료버튼을 누르세요🚫");
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
		} else if (contentInfo !== 0) {
			if (imageUrl === "" || imageData === "") {
				setMessage("그림완료버튼을 누르세요🚫");
				setMsgVisible(true);
				setTime();
				return;
			}
			if (diaryTitle === "") {
				setMessage("제목을 수정해주세요");
				setMsgVisible(true);
				setTime();
				return;
			}
			if (diaryContent === "") {
				setMessage("내용을 수정해주세요");
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
		}

		if (contentInfo !== 0) {
			const theDayWeather = contentInfo.weather;
			await axios
				.patch(
					"https://royal-diary.ml/contents/ucontent",
					{
						// 여기서부터 시작하기. api body parameter 서버에 변경 요청
						weather: theDayWeather,
						imgUrl: imageUrl,
						imgMain: imageData,
						title: diaryTitle,
						content: diaryContent,
						emotion: diaryEmotion,
						isPublic: isPublicDiary,
						contentId: contentInfo.id,
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
					if (res.data.message === "successfully revised") {
						setMessage("그림일기가 수정되었습니다✌");
						setMsgVisible(true);
						sessionStorage.setItem("loadingImg", "visible");
						setTimeout(() => {
							window.location.href = "/diaryview"; // 일기 수정으로 남아있던 데이터 삭제
						}, 1500);
					}
				})
				.catch((err) => {
					console.log("Internal Server Error occured");
				});
		} else {
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
					if (res.data.message === "ok") {
						setMessage("그림일기가 등록되었습니다✌");
						setMsgVisible(true);
						sessionStorage.setItem("loadingImg", "visible");
						setTimeout(() => {
							window.location.href = "/diaryview"; // 일기 수정으로 남아있던 데이터 삭제
						}, 1500);
					}
				})
				.catch((err) => {
					console.log("Internal Server Error occured");
				});
		}

		// Storage.removeItem() 세션 스토리지에서 데이터 삭제. 로그인 여부, 토큰 제외...
	};

	useEffect(() => {
		if (diaryEmotion !== "") {
			if (diaryEmotion === "happy") {
				setMessage("정말 행복해요");
				setMsgVisible(true);
			} else if (diaryEmotion === "smile") {
				setMessage("기분이 좋아요");
				setMsgVisible(true);
			} else if (diaryEmotion === "soso") {
				setMessage("...그저 그래요");
				setMsgVisible(true);
			} else if (diaryEmotion === "annoyed") {
				setMessage("으! 짜증나요");
				setMsgVisible(true);
			} else if (diaryEmotion === "sad") {
				setMessage("슬퍼요...");
				setMsgVisible(true);
			}
			setTime();
		}
	}, [diaryEmotion]);

	const handleBackBtn = () => {
		history.push("/");
	};

	return (
		<Main>
			<CDiary saveDiary={saveDiary} contentInfo={contentInfo} />
			<Emotion saveDiary={saveDiary} contentInfo={contentInfo} />
			<DivValid>
				<ValidityBox theme={msgVisible}>{message}</ValidityBox>
			</DivValid>
			<Buttons>
				<Button onClick={handleBackBtn}>뒤로가기버튼</Button>
				<PButton>
					<PublicBtn theme={isPublicDiary} onClick={setPublic}>
						공개버튼
					</PublicBtn>
					<PrivateBtn theme={isPublicDiary} onClick={setPublic}>
						비공개버튼
					</PrivateBtn>
				</PButton>
				<Button onClick={handleSubmit}>등록버튼</Button>
			</Buttons>
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
	margin-right: 2.8rem;
	/* background: #f08080; */
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
			/* border-bottom: 10px solid #f08080; */
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
	padding-right: 3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;
const Button = styled.button`
	border: 2px solid black;
	background: #f6f6ee;
	margin-right: 1rem;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	:hover {
		cursor: pointer;
		background: black;
		color: white;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.8rem;
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
	@media only screen and (max-width: 480px) {
		margin-right: 0rem;
	}
`;
const PublicBtn = styled.button`
	border: 2px solid black;
	background: #f6f6ee;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	:hover {
		cursor: pointer;
		background: black;
		color: white;
	}
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
const PrivateBtn = styled.button`
	border: 2px solid black;
	background: #f6f6ee;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	:hover {
		cursor: pointer;
		background: black;
		color: white;
	}
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
		height: 1.5rem;
	}
`;
