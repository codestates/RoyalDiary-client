import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Emotion(): ReactElement {
	const Main = styled.div`
		border: 10px solid black;
		flex-grow: 0.8;
	`;
	return <Main>이모션 스티커들</Main>;
}
