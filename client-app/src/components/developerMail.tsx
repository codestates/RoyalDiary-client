import React, { ReactElement, useState } from "react";
import styled from "styled-components";

export default function DeveloperGithub(): ReactElement {
	const [count, countLetter] = useState(0);
	const LetterCount = (e: any) => {
		const wordLength = e.target.value.length;
		countLetter(wordLength);
	};
	return (
		<Main>
			<Header>SummerVacation 에 후원하기</Header>
			<Title>
				후원금:
				<TypeMoney maxLength={15} placeholder="10,000,000 원" id="typeTitle" />
			</Title>
			<Content>
				<TypeContent maxLength={100} placeholder="메세지를 남겨주세요" id="typeContent" onChange={LetterCount} />
			</Content>
			<Counter id="counter">({count} / 최대 100자)</Counter>
		</Main>
	);
}
const Main = styled.div`
	/* border: 5px solid black; */
	display: flex;
	flex-direction: column;
	height: 100%;
	@media only screen and (max-width: 480px) {
		margin: 0rem 1rem 0rem 1rem;
		height: 19rem;
	}
`;
const Header = styled.div`
	/* border: 5px solid black; */
	border-radius: 1rem;
	flex-grow: 1;
	margin: 1rem 3rem 0rem 3rem;
	padding-left: 1rem;
	display: flex;
	align-items: center;
	font-size: 2rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.4rem;
		margin: 0rem 1rem 0rem 1rem;
	}
`;
const Title = styled.div`
	/* border: 5px solid black; */
	border-radius: 1rem;
	margin: 1rem 3rem 1rem 3rem;
	padding-left: 1rem;
	display: flex;
	align-items: center;
	font-size: 1.7rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
		margin: 0rem 1rem 0.5rem 1rem;
	}
`;
const TypeMoney = styled.input`
	border: none;
	border-bottom: 1px solid black;
	margin-top: 0.2rem;
	margin-left: 0.8rem;
	height: 70%;
	width: 70%;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.8rem;
	background-color: rgb(246, 246, 238);
	:focus {
		outline: none;
	}
`;
const Content = styled.div`
	border: 1px solid black;
	/* border-radius: 1rem; */
	flex-grow: 6;
	margin: 0rem 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		margin: 0rem 1rem 0rem 1rem;
		height: 3rem;
	}
`;
const TypeContent = styled.textarea`
	border: none;
	width: 92%;
	height: 90%;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.9rem;
	background-color: rgb(246, 246, 238);
	outline: none;
	resize: none;
	line-height: 3rem;
	letter-spacing: 0.05rem;
	overflow: hidden;
	:focus {
		outline: none;
	}
	@media only screen and (max-width: 480px) {
		font-size: 1.3rem;
		line-height: 2rem;
	}
`;
const Counter = styled.span`
	/* border: 3px solid red; */
	margin: 0.5rem 3rem 1rem 3rem;
	padding-left: 0.3rem;
	color: "#aaa";
	font-size: 1.2rem;
	@media only screen and (max-width: 480px) {
		margin: 0.2rem 3rem 0rem 1rem;
	}
`;
