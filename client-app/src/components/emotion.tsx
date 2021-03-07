import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import happy from "../assets/images/emotions/1.png";
import smile from "../assets/images/emotions/2.png";
import soso from "../assets/images/emotions/3.png";
import annoyed from "../assets/images/emotions/4.png";
import sad from "../assets/images/emotions/5.png";

interface diaryProps {
	saveDiary: any;
}

export default function Emotion(props: diaryProps): ReactElement {
	const { saveDiary } = props;

	const handleEmotion = (event: any) => {
		saveDiary(event);
	};

	return (
		<Main>
			<Title>오늘의 기분</Title>
			<Emotions>
				<EmotionImg id="happy" src={happy} onClick={handleEmotion} />
				<EmotionImg id="smile" src={smile} onClick={handleEmotion} />
				<EmotionImg id="soso" src={soso} onClick={handleEmotion} />
				<EmotionImg id="annoyed" src={annoyed} onClick={handleEmotion} />
				<EmotionImg id="sad" src={sad} onClick={handleEmotion} />
			</Emotions>
		</Main>
	);
}
const Main = styled.div`
	/* border: 5px solid black; */
	flex-grow: 0.3;
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
	margin-top: 1rem;
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
	@media only screen and (max-width: 480px) {
		margin-left: 0.5rem;
	}
`;
