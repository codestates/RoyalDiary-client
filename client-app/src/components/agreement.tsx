import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Agreement(): ReactElement {
	const Main = styled.div`
		border: 10px solid black;
		position: relative;
		left: -2rem;
		bottom: 1rem;
		margin: auto;
		display: flex;
		height: 25%;
		width: 80%;
	`;
	const Input = styled.div`
		// border: 3px solid red;
		position: relative;
		left: 0rem;
		margin: 2rem 0rem 3rem 1rem;
		padding: auto;
		width: 28rem;
		height: 10rem;
	`;
	const InputBox = styled.div`
		// border: 1px solid blue;
		font-size: 1rem;
		display: flex;
		margin: 2rem;
		width: 100%;
	`;
	const InputInfo = styled.input`
		// color: palevioletred;
		font-size: 1.2em;
		border: 2px solid palevioletred;
		// border-radius: 3px;
		margin-left: 1rem;
		maring-top: 5rem;
		background-color: #dcdcdc;
	`;
	const Button = styled.div`
		// border: 4px solid green;
		width: 10rem;
		height: 10rem;
		margin: 1rem 0rem 3rem 3rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	`;
	const ClickButton = styled.div`
		// border: 1px solid black;
		width: 8rem;
		height: 4rem;
		margin-top: -1rem;
		display: flex;
		justify-content: space-around;
	`;
	const ButtonSole = styled.button`
		white-space: normal;
		width: 3rem;
		height: 3rem;
		font-size: 1rem;
		margin: 1rem 0.5rem;
		padding: 0.5px;
	`;
	const fontSize = {
		fontSize: "18px",
	};

	return <Main>동의서</Main>;
}
