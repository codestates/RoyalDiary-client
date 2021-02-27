import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import happy from "../assets/images/emotions/1.png";
import smile from "../assets/images/emotions/2.png";
import soso from "../assets/images/emotions/3.png";
import annoyed from "../assets/images/emotions/4.png";
import sad from "../assets/images/emotions/5.png";

export default function Emotion(): ReactElement {
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

	return (
		<Main>
			<Title>오늘의 기분</Title>
			<Emotions>
				<EmotionImg src={happy} />
				<EmotionImg src={smile} />
				<EmotionImg src={soso} />
				<EmotionImg src={annoyed} />
				<EmotionImg src={sad} />
			</Emotions>
		</Main>
	);
}
