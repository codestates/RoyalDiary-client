import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SocialModal from "../components/socialSigninModal";

interface isLoginProps {
	// signInStatus: boolean;
	conveySignin: any;
	isSignin: boolean;
}

export default function Signin(props: isLoginProps): ReactElement {
	const { isSignin, conveySignin } = props;
	const history = useHistory();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [uemail, setEmail] = useState("");
	const [upassword, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
	const [mainVisible, setMainVisible] = useState(false);
	const [nickName, setNickName] = useState("");

	function openModal() {
		setIsOpen(true);
	}
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const typedEmail = event.target.value;
		setEmail(typedEmail);
		// setMsgVisible(false);
	};
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const typedPwd = event.target.value;
		setPassword(typedPwd);
		// setMsgVisible(false);
	};
	const handleSigninProp = (isLogin: boolean) => {
		conveySignin(isLogin);
	};
	const handleSignin = async () => {
		if (uemail.length > 0 && upassword.length > 0) {
			setMsgVisible(false);
			await axios
				.post(
					"https://royal-diary.ml/users/login",
					{ email: uemail, password: upassword },
					{
						headers: { "Content-Type": "application/json" },
						withCredentials: true,
					}
				)
				.then((res) => {
					const { nickname, accessToken } = res.data.data;
					sessionStorage.setItem("accessToken", accessToken);
					sessionStorage.setItem("isLogin", JSON.stringify(true));
					sessionStorage.setItem("nickName", nickname);
					handleSigninProp(true);
				})
				.catch((error) => {
					const errResponse = error.response.data.message;
					if (errResponse === "email not found") {
						setMessage("이메일을 찾을 수 없습니다.");
						setMsgVisible(true);
					} else if (errResponse === "wrong password") {
						setMessage("잘못된 비밀번호 입니다.");
						setMsgVisible(true);
					} else {
						console.log("server error occured");
					}
				});
		} else {
			setMessage("이메일과 비밀번호를 입력해주세요.");
			setMsgVisible(true);
		}
	};
	const handleSignout = async () => {
		const getAccessToken = sessionStorage.getItem("accessToken");
		// console.log(getAccessToken);
		await axios
			.post(
				"https://royal-diary.ml/users/logout",
				{},
				{
					headers: { Authorization: `Bearer ${getAccessToken}`, "Content-Type": "application/json" },
					withCredentials: true,
				}
			)
			.then((res) => {
				const resMessage = res.data.message;
				if (resMessage === "successfully signed out!") {
					sessionStorage.setItem("accessToken", "");
					sessionStorage.setItem("isLogin", JSON.stringify(false));
					sessionStorage.setItem("signUpIn", JSON.stringify(false));
					sessionStorage.setItem("nickName", "");
					handleSigninProp(false);
					setMainVisible(false);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		const isLoginSession = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		// const isSignUpIn = JSON.parse(sessionStorage.getItem("signUpIn") || "{}");
		const nickname = sessionStorage.getItem("nickName") as string;
		if (isLoginSession === true) {
			setMainVisible(isLoginSession); // session 에 저장되어 있으므로, 새로고침 해도 상태유지.
			setNickName(nickname);
		} else {
			setMainVisible(isSignin);
			setNickName("");
		}
		if (uemail.length > 0 && upassword.length > 0) {
			setMsgVisible(false);
		}
	}, [uemail.length, upassword.length, mainVisible, isSignin]);

	return (
		<Main>
			{/* <form method="" style={formStyle}> */}
			<Input theme={mainVisible}>
				<InputBox>
					<div style={fontstyle}>이름 쓰는곳</div>
					<div>
						<InputInfo
							name="type name"
							className="inputInfo"
							type="text"
							id="useremail"
							placeholder="이메일 입력"
							onChange={handleEmail}
						/>
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
							onChange={handlePassword}
						/>
					</div>
				</InputBox>
				<div id="wrap">
					<ValidityBox theme={msgVisible}>{message}</ValidityBox>
				</div>
			</Input>
			<UserNick theme={mainVisible}>
				<InputNick>{nickName} 의 그림일기장</InputNick>
			</UserNick>
			<Button theme={mainVisible}>
				<ClickButton>
					<ButtonSole name="login btn" type="submit" style={{ alignItems: "center" }} onClick={handleSignin}>
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
			<LogoutBox theme={mainVisible}>
				<LogoutBtn name="logout btn" type="submit" onClick={handleSignout}>
					로그 아웃
				</LogoutBtn>
			</LogoutBox>
			{/* </form> */}
		</Main>
	);
}
const Main = styled.div`
	/* border: 10px solid yellow; */
	flex-grow: 1;
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`;
const Input = styled.div`
	border: 3px solid black;
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	div#wrap {
		border: 3px solid red;
		width: 100%;
		height: 2rem;
		margin-top: 0.5rem;
	}
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
const ValidityBox = styled.div`
	border: 3px solid red;
	position: relative;
	width: 70%;
	height: 30px;
	margin-right: 1.1rem;
	padding-left: 0.6rem;
	background: #f08080;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: flex-start;
	align-items: center;
	::after {
		border-top: 0px solid transparent;
		border-left: none;
		border-right: none;
		border-bottom: 10px solid #f08080;
		content: "";
		position: absolute;
		top: -10px;
		left: 120px;
	}
	animation: a 2s;
	@keyframes a {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 480px) {
		::after {
			border-top: 0px solid transparent;
			border-left: none;
			border-right: none;
			border-bottom: 10px solid #f08080;
			content: "";
			position: absolute;
			top: -10px;
			left: 120px;
		}
	}
`;
const InputBox = styled.label`
	border: 1px solid blue;
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
	border: 4px solid green;
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
// const formStyle = {
// 	display: "flex",
// 	width: "100%",
// 	justifyContent: "center",
// 	alignItems: "center",
// };
const btnStyle = {
	border: "1px solid black",
	width: "100%",
	fontSize: "0.8rem",
	lineHeight: "1.3rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
