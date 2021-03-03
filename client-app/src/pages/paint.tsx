import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Diaryinfo from "../components/diaryInfo";
import CPaint from "../components/paint";

export default function Paint(): ReactElement {
	return (
		<Main>
			<Paintbox>
				<Diaryinfo />
				<Title>😍(유저)의 행복한 하루😍</Title>
				<CPaint />
			</Paintbox>
		</Main>
	);
}
const Main = styled.div`
	background: #f6f6ee;
	border-right: 5px solid black;
	box-sizing: border-box;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
		border-right: none;
		border-bottom: 5px solid black;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		height: 70%;
	}
`;
const Paintbox = styled.div`
	border: 5px solid black;
	border-radius: 2rem;
	margin: 3rem 2rem 3rem 2rem;
	height: 90%;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		margin: 2rem 1rem 2rem 1rem;
	}
`;
const Title = styled.div`
	// border: 3px solid black;
	margin-top: 0.5rem;
	padding-left: 1rem;
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 0.2rem;
`;
