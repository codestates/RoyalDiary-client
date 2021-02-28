import { findByLabelText } from "@testing-library/react";
import React, { ReactElement } from "react";
import { useHistory, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SocialModal from "../components/socialSignin";

export default function Signin(): ReactElement {
	// let subtitle: any;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const history = useHistory();
	function openModal() {
		setIsOpen(true);
	}
	const Main = styled.div`
		/* border: 10px solid yellow; */
		flex-grow: 1;
		display: flex;
		/* justify-content: space-around; */
		margin-bottom: 2rem;
	`;
	const Input = styled.div`
		/* border: 3px solid black; */
		margin-left: 3rem;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`;
	const InputBox = styled.label`
		/* border: 1px solid blue; */
		width: 100%;
		font-size: 1rem;
		display: flex;
		/* flex-direction: row; */
		flex-wrap: wrap;
		align-items: center;
		margin-top: 0.5rem;
		@media only screen and (max-width: 770px) {
			width: 90%;
			margin-left: -1rem;
		}
		@media only screen and (max-width: 480px) {
			width: 90%;
			margin-left: -2rem;
		}
	`;
	const InputInfo = styled.input`
		// color: palevioletred;
		font-size: 1.2rem;
		border: 2px solid palevioletred;
		width: 80%;
		/* margin-top: 5rem; */
		background-color: #dcdcdc;
	`;
	const Button = styled.div`
		/* border: 4px solid green; */
		width: 20%;
		margin-right: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 770px) {
			margin-right: 4rem;
		}
		@media only screen and (max-width: 480px) {
			width: 30%;
			margin-right: 1rem;
		}
	`;
	const ClickButton = styled.div`
		/* border: 1px solid black; */
		width: 110%;
		height: 3.4rem;
		display: flex;
		align-items: center;
	`;
	const ButtonSole = styled.button`
		border: 1px solid black;
		width: 5rem;
		height: 2.8rem;
		margin: 0.3rem;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
	`;
	const fontstyle = {
		fontSize: "1rem",
		marginRight: "0.2rem",
	};

	const formStyle = {
		display: "flex",
		width: "35rem",
	};

	const btnStyle = {
		border: "1px solid black",
		fontSize: "0.8rem",
		lineHeight: "1.3rem",
	};

	// const moveRoute = () => {
	// 	Router.push("/");
	// };

	return (
		<Main>
			<form method="" style={formStyle}>
				<Input>
					<InputBox>
						<div style={fontstyle}>이름 쓰는곳</div>
						<div>
							<InputInfo className="inputInfo" type="text" id="useremail" placeholder="이메일 입력" />
						</div>
					</InputBox>
					<InputBox>
						<div style={fontstyle}>암호 쓰는곳</div>
						<div>
							<InputInfo className="inputInfo" type="text" id="password" placeholder="암호 입력" />
						</div>
					</InputBox>
				</Input>
				<Button>
					<ClickButton>
						<ButtonSole type="submit" onClick={() => history.push("/diaryview")}>
							입장 하기
						</ButtonSole>
						<ButtonSole type="button" onClick={() => history.push("/signup")}>
							입학 하기
						</ButtonSole>
					</ClickButton>
					<ClickButton>
						<ButtonSole type="submit">로그 아웃</ButtonSole>
						<ButtonSole type="button" style={btnStyle} onClick={openModal}>
							소샬 <br />
							로그인
						</ButtonSole>
					</ClickButton>
					<SocialModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
				</Button>
			</form>
		</Main>
	);
}
