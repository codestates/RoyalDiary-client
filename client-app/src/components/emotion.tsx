import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import happy from "../assets/images/emotions/1.png";
import smile from "../assets/images/emotions/2.png";
import soso from "../assets/images/emotions/3.png";
import annoyed from "../assets/images/emotions/4.png";
import sad from "../assets/images/emotions/5.png";

export default function Emotion(): ReactElement {
	const Main = styled.div`
		// border: 5px solid black;
		flex-grow: 0.3;
		width: 35rem;
		margin-left: 3rem;
		display: flex;
	`;
	const Title = styled.div`
		// border: 5px solid black;
		flex-grow: 0.5;
		display: flex;
		align-text: center;
		align-items: center;
		font-size: 1.2rem;
	`;
	const Emotions = styled.div`
		// border: 5px solid black;
		flex-grow: 4;
		display: flex;
		align-text: center;
		align-items: center;
	`;

	return (
		<Main>
			<Title>오늘의 기분</Title>
			<Emotions>
				<img src={happy} alt="" width="80rem" />
				<img src={smile} alt="" width="80rem" />
				<img src={soso} alt="" width="80rem" />
				<img src={annoyed} alt="" width="80rem" />
				<img src={sad} alt="" width="80rem" />
			</Emotions>
		</Main>
	);
}
