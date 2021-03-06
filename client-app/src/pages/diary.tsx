import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import CDiary from "../components/diary";
import Emotion from "../components/emotion";

export default function Diary(): ReactElement {
	const history = useHistory();

	return (
		<Main>
			<CDiary />
			<Emotion />
			<Buttons>
				<Button onClick={() => history.push("/")}>뒤로가기버튼</Button>
				<Button>장소등록버튼</Button>
				<Button>공개버튼</Button>
				<Button>완료버튼</Button>
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
