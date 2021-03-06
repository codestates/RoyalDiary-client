import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SocialModal from "../components/socialSigninModal";

export default function Signin(): ReactElement {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [loginMain, setLoginMain] = useState(false);
	const [nickName, setNickName] = useState("");

	const history = useHistory();
	function openModal() {
		setIsOpen(true);
	}
	useEffect(() => {
		// sessionStorage.setItem("isLogin", JSON.stringify(true));
		const isLogin = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		// const isLogin = false;
		console.log(isLogin);
		if (isLogin === true) {
			const nickname = sessionStorage.getItem("nickName") as string;
			setNickName(nickname);
			setLoginMain(true);
		} else {
			console.log(isLogin);
			setLoginMain(false);
			console.log("not logined!");
		}
	}, [nickName]);

	return (
		<Main>
			<form method="" style={formStyle}>
				<Input theme={loginMain}>
					<InputBox>
						<div style={fontstyle}>이름 쓰는곳</div>
						<div>
							<InputInfo name="type name" className="inputInfo" type="text" id="useremail" placeholder="이메일 입력" />
						</div>
					</InputBox>
					<InputBox>
						<div style={fontstyle}>암호 쓰는곳</div>
						<div>
							<InputInfo
								name="type password"
								className="inputInfo"
								type="password"
								id="password"
								placeholder="암호 입력"
							/>
						</div>
					</InputBox>
				</Input>
				<UserNick theme={loginMain}>
					<InputNick>{nickName} 의 그림일기장</InputNick>
				</UserNick>
				<Button theme={loginMain}>
					<ClickButton>
						<ButtonSole
							name="login btn"
							type="submit"
							style={{ alignItems: "center" }}
							onClick={() => history.push("/diaryview")}
						>
							로그인
						</ButtonSole>
						<ButtonSole name="signup btn" type="button" onClick={() => history.push("/signup")}>
							회원 가입
						</ButtonSole>
					</ClickButton>
					<ClickButton>
						<ButtonSole name="social login btn" type="button" style={btnStyle} onClick={openModal}>
							소샬 로그인
						</ButtonSole>
					</ClickButton>
					<SocialModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
				</Button>
				<LogoutBox theme={loginMain}>
					<LogoutBtn name="logout btn" type="submit">
						로그 아웃
					</LogoutBtn>
				</LogoutBox>
			</form>
		</Main>
	);
}
const Main = styled.div`
	/* border: 10px solid yellow; */
	flex-grow: 1;
	display: flex;
	/* padding-left: 1rem; */
	justify-content: center;
	margin-bottom: 2rem;
`;
const Input = styled.div`
	/* border: 3px solid black; */
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 1200px) {
		width: 40%;
	}
	@media only screen and (max-width: 770px) {
		/* min-width: 14rem; */
	}
	@media only screen and (max-width: 480px) {
		width: 40%;
	}
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
const UserNick = styled.div`
	/* border: 10px solid red; */
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	margin-left: 3rem;
	width: 65%;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		width: 70%;
		margin-left: 0rem;
	}
`;
const InputNick = styled.div`
	/* border: 3px solid blue; */
	width: 100%;
	height: 50%;
	font-size: 1.7rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
	}
`;
const InputInfo = styled.input`
	// color: palevioletred;
	font-size: 1.2rem;
	border: 2px solid palevioletred;
	width: 80%;
	/* margin-top: 5rem; */
	background-color: #dcdcdc;
	@media only screen and (max-width: 480px) {
		width: 100%;
		font-size: 0.9rem;
		margin-top: 0.2rem;
	}
`;
const Button = styled.div`
	/* border: 4px solid green; */
	width: 7rem;
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 1200px) {
		margin-left: 2rem;
	}
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
	/* border: 1px solid black; */
	width: 5rem;
	height: 2.8rem;
	margin: 0.3rem;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
`;
const LogoutBox = styled.div`
	/* border: 4px solid green; */
	width: 20%;
	margin-right: 2.5rem;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const LogoutBtn = styled.button`
	border: 1px solid black;
	width: 4.8rem;
	height: 2.5rem;
	font-size: 0.9rem;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		width: 3rem;
		height: 2.5rem;
		font-size: 0.8rem;
	}
`;
const fontstyle = {
	fontSize: "1rem",
	marginRight: "0.2rem",
};
const formStyle = {
	display: "flex",
	width: "100%",
	justifyContent: "center",
	alignItems: "center",
};
const btnStyle = {
	border: "1px solid black",
	width: "100%",
	fontSize: "0.8rem",
	lineHeight: "1.3rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
