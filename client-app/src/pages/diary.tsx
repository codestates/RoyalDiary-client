import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import CDiary from "../components/diary";
import Emotion from "../components/emotion";

export default function Diary(): ReactElement {
	const Main = styled.div`
		background: #f6f6ee;
		// border: 5px solid black;
		margin-right: 8rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		max-width: 50rem;
	`;

	const Buttons = styled.div`
		// border: 5px solid black;
		// margin-bottom: 2rem;
		padding-right: 2rem;
		flex-grow: 0.5;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	`;
	const Button = styled.button`
		// border: 1px solid black;
		background: #f6f6ee;
		margin-right: 1rem;
		font-size: 1rem;
		font-weight: bold;
		height: 50%;
	`;

	return (
		<Main>
			<CDiary />
			<Emotion />
			<Buttons>
				<Button>뒤로가기버튼</Button>
				<Button>장소등록버튼</Button>
				<Button>공개버튼</Button>
				<Button>일기다썼다버튼</Button>
			</Buttons>
		</Main>
	);
}
