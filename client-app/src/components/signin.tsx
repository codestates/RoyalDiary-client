import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Signin(): ReactElement {
	const Main = styled.div`
		position: relative;
		bottom: 50px;
		margin: auto;
		// border: 10px solid black;
		display: flex;
	`;
	const Input = styled.div`
		// border: 1px solid red;
		position: relative;
		left: -10px;
		margin: auto;
		padding: auto;
		width: 400px;
		height: 120px;
	`;
	const InputBox = styled.div`
		// border: 1px solid blue;
		font-size: 16px;
		display: flex;
		margin: 25px;
	`;
	const InputInfo = styled.input`
		// color: palevioletred;
		font-size: 1.2em;
		border: 2px solid palevioletred;
		// border-radius: 3px;
		margin-left: 10px;
		maring-top: 50px;
		background-color: #dcdcdc;
	`;
	const Button = styled.div`
		// border: 1px solid green;
		width: 4rem;
		padding-bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	`;
	const ClickButton = styled.div`
		// border: 1px solid black;
		width: 100px;
		height: 50px;
		margin-top: 9px;
		display: flex;
		justify-content: space-around;
	`;
	const ButtonSole = styled.button`
		width: 3rem;
		height: 3rem;
		font-size: 0.8rem;
		margin: 10px 10px
		padding: 0.5px;
  `;
	const fontSize = {
		fontSize: "18px",
	};

	return (
		<Main>
			<Input>
				<InputBox>
					<div style={fontSize}>이름 쓰는곳</div>
					<div>
						<InputInfo className="inputInfo" placeholder="전자우편을 입력하세요" />
					</div>
				</InputBox>
				<InputBox>
					<div style={fontSize}>암호 쓰는곳</div>
					<div>
						<InputInfo className="inputInfo" placeholder="암호를 입력하세요" />
					</div>
				</InputBox>
			</Input>
			<Button>
				<ClickButton>
					<ButtonSole type="submit">입장 하기</ButtonSole>
					<ButtonSole type="button">입학 하기</ButtonSole>
				</ClickButton>
				<ClickButton>
					<ButtonSole type="button">집에 가기</ButtonSole>
					<ButtonSole type="button">소샬 로그인</ButtonSole>
				</ClickButton>
			</Button>
		</Main>
	);
}
