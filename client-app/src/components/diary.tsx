import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function CDiary(): ReactElement {
	return (
		<Main>
			<Title>제목: 오늘은 맛있는 햄버거를 먹었다.</Title>
			<Type>깍두기칸</Type>
		</Main>
	);
}
const Main = styled.div`
	// border: 5px solid black;
	flex-grow: 6;
	display: flex;
	flex-direction: column;
`;
const Title = styled.div`
	border: 3px solid black;
	border-radius: 1rem;
	flex-grow: 0.4;
	margin: 3rem 3rem 1rem 3rem;
	padding-left: 1rem;
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		margin: 2rem 1rem 1rem 1rem;
	}
`;
const Type = styled.div`
	border: 3px solid black;
	border-radius: 1rem;
	flex-grow: 10;
	margin: 0rem 3rem 3rem 3rem;
	padding-top: 1rem;
	padding-left: 1rem;
	display: flex;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		margin: 0rem 1rem 1rem 1rem;
	}
`;
