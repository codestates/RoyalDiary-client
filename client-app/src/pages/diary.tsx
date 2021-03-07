import React, { ReactElement, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import CDiary from "../components/diary";
import Emotion from "../components/emotion";

interface paintDataProps {
	weatherData: string;
	imgUrl: string;
	imgData: string;
}

export default function Diary(props: paintDataProps): ReactElement {
	const { weatherData, imgUrl, imgData } = props;
	const history = useHistory();
	const [isPublic, setIsPublic] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [emotion, setEmotion] = useState("");

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
		if (isPublic === false) {
			setIsPublic(true);
		} else {
			setIsPublic(false);
		}
		console.log(isPublic);
	};

	const handleSubmit = () => {
		console.log(weatherData);
		console.log(imgUrl);
		console.log(imgData);
		console.log(title);
		console.log(content);
		console.log(emotion);
		sessionStorage.removeItem("weather");
		// sessionStorage.removeItem("completeDraw");

		if (weatherData === "") {
			console.log("날씨를 선택해주세요");
		} else if (imgUrl === "" || imgData === "") {
			console.log("그림 완료 버튼을 누르세요");
		} else if (title === "") {
			console.log("제목을 써주세요");
		} else if (content === "") {
			console.log("내용을 써주세요");
		} else if (emotion === "") {
			console.log("기분을 선택해주세요");
		}
	};

	useEffect(() => {
		// console.log("refresh");
	});

	return (
		<Main>
			<CDiary saveDiary={saveDiary} />
			<Emotion saveDiary={saveDiary} />
			<Buttons>
				<Button onClick={() => history.push("/")}>뒤로가기버튼</Button>
				<Button>장소등록버튼</Button>
				<Button onClick={setPublic}>공개버튼</Button>
				<Button onClick={handleSubmit}>완료버튼</Button>
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
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.7rem;
		/* width: 5rem; */
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
