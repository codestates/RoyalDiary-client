import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import happy from "../assets/images/emotions/1.png";
import smile from "../assets/images/emotions/2.png";
import soso from "../assets/images/emotions/3.png";
import annoyed from "../assets/images/emotions/4.png";
import sad from "../assets/images/emotions/5.png";

interface diaryProps {
	saveDiary: any;
	contentInfo: any;
}

export default function Emotion(props: diaryProps): ReactElement {
	const { saveDiary, contentInfo } = props;
	const [emotion, setEmotion] = useState("오늘");
	const [eHappy, setEHappy] = useState(false);
	const [eSmile, setESmile] = useState(false);
	const [eSoso, setESoso] = useState(false);
	const [eAnnoyed, setEAnnoyed] = useState(false);
	const [eSad, setESad] = useState(false);

	function changeEmotion(emotionId: string) {
		if (emotionId === "happy") {
			if (!eHappy) {
				setEHappy(true);
				setESmile(false);
				setESoso(false);
				setEAnnoyed(false);
				setESad(false);
			} else {
				setEHappy(false);
			}
		} else if (emotionId === "smile") {
			if (!eSmile) {
				setEHappy(false);
				setESmile(true);
				setESoso(false);
				setEAnnoyed(false);
				setESad(false);
			} else {
				setESmile(false);
			}
		} else if (emotionId === "soso") {
			if (!eSoso) {
				setEHappy(false);
				setESmile(false);
				setESoso(true);
				setEAnnoyed(false);
				setESad(false);
			} else {
				setESoso(false);
			}
		} else if (emotionId === "annoyed") {
			if (!eAnnoyed) {
				setEHappy(false);
				setESmile(false);
				setESoso(false);
				setEAnnoyed(true);
				setESad(false);
			} else {
				setEAnnoyed(false);
			}
		} else if (emotionId === "sad") {
			if (!eSad) {
				setEHappy(false);
				setESmile(false);
				setESoso(false);
				setEAnnoyed(false);
				setESad(true);
			} else {
				setESad(false);
			}
		}
	}
	const handleEmotion = (event: any) => {
		changeEmotion(event.target.id);
		saveDiary(event);
	};
	useEffect(() => {
		if (contentInfo !== 0) {
			setEmotion("그날");
		}
	}, [setEmotion, contentInfo]);
	return (
		<Main>
			<Title>{emotion}의 기분</Title>
			<Emotions>
				<EmotionImg id="happy" src={happy} theme={eHappy} onClick={handleEmotion} />
				<EmotionImg id="smile" src={smile} theme={eSmile} onClick={handleEmotion} />
				<EmotionImg id="soso" src={soso} theme={eSoso} onClick={handleEmotion} />
				<EmotionImg id="annoyed" src={annoyed} theme={eAnnoyed} onClick={handleEmotion} />
				<EmotionImg id="sad" src={sad} theme={eSad} onClick={handleEmotion} />
			</Emotions>
		</Main>
	);
}
const Main = styled.div`
	/* border: 5px solid black; */
	padding-left: 3rem;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		padding-left: 1rem;
	}
`;
const Title = styled.div`
	// border: 5px solid black;
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;
const Emotions = styled.div`
	/* border: 5px solid black; */
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;
const EmotionImg = styled.img`
	width: 3.5rem;
	alt: "";
	:hover {
		cursor: pointer;
	}
	transform-origin: ${(props) => (props.theme === true ? "50% 50%" : "")};
	animation: ${(props) => (props.theme === true ? "rotate_image 1.5s linear infinite" : "")};
	@keyframes rotate_image {
		100% {
			transform: rotate(360deg);
		}
	}
	@media only screen and (max-width: 480px) {
		margin-left: 0.5rem;
	}
`;
