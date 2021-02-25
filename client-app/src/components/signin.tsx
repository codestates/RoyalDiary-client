import { findByLabelText } from "@testing-library/react";
import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import SocialModal from "../components/socialSignin";

export default function Signin(): ReactElement {
	// let subtitle: any;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}
	const Main = styled.div`
		/* border: 10px solid yellow; */
		flex-grow: 0.1;
		display: flex;
		justify-content: space-around;
		margin-bottom: 2rem;
	`;
	const Input = styled.div`
		/* border: 3px solid black; */
		margin-right: 4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`;
	const InputBox = styled.label`
		// border: 1px solid blue;
		font-size: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 0.5rem;
	`;
	const InputInfo = styled.input`
		// color: palevioletred;
		font-size: 1.2rem;
		border: 2px solid palevioletred;
		width: 100%;
		/* margin-top: 5rem; */
		background-color: #dcdcdc;
	`;
	const Button = styled.div`
		/* border: 4px solid green; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 9rem;
	`;
	const ClickButton = styled.div`
		// border: 1px solid black;
		width: 8rem;
		height: 4rem;
		display: flex;
		align-items: center;
	`;
	const ButtonSole = styled.button`
		// border: 1px solid black;
		width: 5rem;
		height: 3rem;
		margin: 0.3rem;
		overflow: hidden;
		text-overflow: ellipsis;
	`;
	const fontstyle = {
		fontSize: "1rem",
		marginRight: "0.2rem",
	};

	const formStyle = {
		display: "flex",
		width: "35rem",
	};

	return (
		<Main>
			<form action="" method="" style={formStyle}>
				<Input>
					<InputBox>
						<div style={fontstyle}>이름 쓰는곳</div>
						<div>
							<InputInfo className="inputInfo" type="text" id="useremail" placeholder="전자우편을 입력하세요" />
						</div>
					</InputBox>
					<InputBox>
						<div style={fontstyle}>암호 쓰는곳</div>
						<div>
							<InputInfo className="inputInfo" type="text" id="password" placeholder="암호를 입력하세요" />
						</div>
					</InputBox>
				</Input>
				<Button>
					<ClickButton>
						<ButtonSole type="submit">입장 하기</ButtonSole>
						<ButtonSole type="button">입학 하기</ButtonSole>
					</ClickButton>
					<ClickButton>
						<ButtonSole type="submit">로그 아웃</ButtonSole>
						<ButtonSole type="button" onClick={openModal}>
							소샬 로그인
						</ButtonSole>
					</ClickButton>
					<SocialModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
				</Button>
			</form>
		</Main>
	);
}
