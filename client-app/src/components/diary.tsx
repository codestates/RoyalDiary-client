import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import SubNav from "../components/nav";

export default function CDiary(): ReactElement {
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
		margin: 3rem 5rem 1rem 1rem;
		max-width: 53rem;
		padding-left: 1rem;
		display: flex;
		// justify-content: center;
		align-items: center;
		font-size: 1.2rem;
	`;
	const Type = styled.div`
		border: 3px solid black;
		border-radius: 1rem;
		max-width: 38rem;
		flex-grow: 10;
		margin: 0rem 0rem -20rem 1rem;
		padding-top: 1rem;
		padding-left: 1rem;
		display: flex;
	`;

	return (
		<Main>
			<Title>제목: 오늘은 맛있는 햄버거를 먹었다.</Title>
			<Type>깍두기칸</Type>
			<SubNav color="" />
		</Main>
	);
}
