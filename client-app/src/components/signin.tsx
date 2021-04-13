import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SocialModal from "../components/socialSigninModal";
import SocialInfoModal from "../components/socialSignupModal";
import NotificationModal from "./NotificationModal";

interface isLoginProps {
	// signInStatus: boolean;
	conveySignin: (e: boolean) => void;
	isSignin: boolean;
}

export default function Signin(props: isLoginProps): ReactElement {
	const { isSignin, conveySignin } = props;
	const history = useHistory();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [isOpenSocial, socialModalOpen] = useState(false);
	const [socialData, setSocialData] = useState({ data: "", type: "" });
	const [uemail, setEmail] = useState("");
	const [upassword, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
	const [mainVisible, setMainVisible] = useState(false);
	const [nickName, setNickName] = useState("");
	// modal 상태 관리
	const [modalMessage, setModalMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	const conveySocial = (e: any, socialType: string) => {
		console.log(socialType);
		setSocialData({
			...socialData,
			data: e,
			type: socialType,
		});
	};
	const setSocialOpen = (e: boolean) => {
		socialModalOpen(e);
	};
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const typedEmail = event.target.value;
		setEmail(typedEmail);
	};
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const typedPwd = event.target.value;
		setPassword(typedPwd);
	};
	const handleSigninProp = (isLogin: boolean) => {
		conveySignin(isLogin);
	};
	const setTime = () => {
		setTimeout(() => {
			setMsgVisible(false);
		}, 2000);
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
					setModalMessage("오늘은 어떤 일이 있었나요?:)");
					setModalVisible(true);
				})
				.catch((error) => {
					const errResponse = error.response.data.message;
					if (errResponse === "email not found") {
						setMessage("이메일을 찾을 수 없습니다");
						setMsgVisible(true);
					} else if (errResponse === "wrong password") {
						setMessage("잘못된 비밀번호 입니다");
						setMsgVisible(true);
					} else {
						console.log("Internal Server Error occured");
					}
					setTimeout(() => {
						setMsgVisible(false);
					}, 3000);
				});
		} else {
			setMessage("이메일과 비밀번호를 입력해주세요😉");
			setMsgVisible(true);
			setTime();
		}
	};
	const handleSignout = async () => {
		const getAccessToken = sessionStorage.getItem("accessToken");
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
					if (window.Kakao.Auth.getAccessToken()) {
						console.log("카카오 인증 엑세스 토큰 존재");
						window.Kakao.Auth.logout(() => {
							console.log("카카오 로그아웃 완료", window.Kakao.Auth.getAccessToken());
						});
					}
					sessionStorage.removeItem("accessToken");
					sessionStorage.removeItem("nickName");
					sessionStorage.setItem("isLogin", JSON.stringify(false));
					handleSigninProp(false);
					setMainVisible(false);
				}
			})
			.catch((err) => {
				console.log("Internal Server Error occured");
			});
	};
	useEffect(() => {
		const isLoginSession = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		const nickname = sessionStorage.getItem("nickName") as string;
		if (isLoginSession === true) {
			setMainVisible(true); // session 에 저장되어 있으므로, 새로고침 해도 상태유지.
			setNickName(nickname);
		} else {
			setMainVisible(false);
			setNickName("");
		}
		if (uemail.length > 0 && upassword.length > 0) {
			setMsgVisible(false);
		}
	}, [uemail.length, upassword.length, mainVisible, isSignin]);

	return (
		<Main>
			<Input theme={mainVisible}>
				<InputBox>
					<div>이름 쓰는곳</div>
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
					<div>암호 쓰는곳</div>
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
					<MainBtn onClick={handleSignin}>
						<ButtonSole>로그인</ButtonSole>
						<ButtonSole>로그인</ButtonSole>
					</MainBtn>
					<MainBtn style={{ marginLeft: "0.3rem", letterSpacing: "0.05rem" }} onClick={() => history.push("/signup")}>
						<ButtonSole>&nbsp; 회원 &nbsp;&nbsp;가입</ButtonSole>
						<ButtonSole>&nbsp; 회원 &nbsp;&nbsp;가입</ButtonSole>
					</MainBtn>
				</ClickButton>
				<ClickButton>
					<MainBtn id="social" onClick={openModal}>
						<ButtonSole>소샬 로그인</ButtonSole>
						<ButtonSole>소샬 로그인</ButtonSole>
					</MainBtn>
				</ClickButton>
				<SocialModal
					modalIsOpen={modalIsOpen}
					setIsOpen={setIsOpen}
					setSocialOpen={setSocialOpen}
					conveySocial={conveySocial}
				/>
				<SocialInfoModal isOpenSocial={isOpenSocial} socialData={socialData} setSocialOpen={setSocialOpen} />
			</Button>
			<LogoutBox theme={mainVisible}>
				<MainBtn onClick={handleSignout}>
					<ButtonSole>&nbsp; 로그 &nbsp;&nbsp;아웃</ButtonSole>
					<ButtonSole>&nbsp; 로그 &nbsp;&nbsp;아웃</ButtonSole>
				</MainBtn>
			</LogoutBox>
			<NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} />
		</Main>
	);
}
const Main = styled.div`
	/* border: 10px solid yellow; */
	flex-grow: 1;
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
	@media only screen and (max-width: 480px) {
		height: 8rem;
		margin-bottom: 0.5rem;
	}
`;
const Input = styled.div`
	/* border: 3px solid black; */
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	width: 60%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-left: 2rem;
	padding-top: 1rem;
	div#wrap {
		height: 2rem;
		margin-top: 0.5rem;
		@media only screen and (max-width: 480px) {
			height: 3rem;
		}
	}
	@media only screen and (max-width: 1200px) {
		width: 40%;
	}
	@media only screen and (max-width: 770px) {
		/* min-width: 14rem; */
	}
	@media only screen and (max-width: 480px) {
		width: 40%;
		height: 8rem;
		padding-top: 0rem;
	}
`;
const InputBox = styled.label`
	/* border: 1px solid blue; */
	font-size: 1rem;
	display: flex;
	/* flex-direction: row; */
	flex-wrap: wrap;
	align-items: center;
	margin-top: 0.5rem;
	div:nth-child(1) {
		font-size: 1.2rem;
		margin-right: 0.2rem;
		@media only screen and (max-width: 480px) {
			font-size: 1rem;
		}
	}
	@media only screen and (max-width: 770px) {
		width: 90%;
		margin-left: -1rem;
	}
	@media only screen and (max-width: 480px) {
		width: 90%;
		margin-left: -2rem;
		height: 2.5rem;
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
	width: 80%;
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
	border: none;
	border-bottom: 2px solid black;
	outline: none;
	width: 80%;
	height: 1.6rem;
	margin-top: 0.1rem;
	margin-left: 0.3rem;
	font-size: 1.1rem;
	@media only screen and (max-width: 480px) {
		width: 100%;
		font-size: 0.9rem;
		margin-top: 0.1rem;
		height: 1.2rem;
	}
`;
const ValidityBox = styled.div`
	/* border: 3px solid #3b2b2b; */
	position: relative;
	height: 3rem;
	width: 100%;
	margin-right: 2rem;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	align-items: center;
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
		position: relative;
		font-size: 0.7rem;
		width: 10rem;
		height: 1rem;
		margin-right: 0rem;
	}
`;
const Button = styled.div`
	/* border: 4px solid green; */
	width: 7rem;
	display: ${(props) => (props.theme === true ? "none" : "flex")};
	margin-right: 1rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	:hover {
		cursor: pointer;
	}
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
	div#social {
		/* border: 3px solid red; */
		width: 6.3rem;
	}
`;
const MainBtn = styled.div`
	/* border: 3px solid blue; */
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	perspective: 500px;
	-webkit-perspective: 500px;
	-moz-perspective: 500px;
	perspective-origin: center top;
	-webkit-perspective-origin: center top;
	-moz-perspective-origin: center top;
	:hover {
		cursor: pointer;
	}
	div {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		/* padding: 10px; */
		border: #000000 solid 1px;
	}
	div:nth-child(1) {
		color: #000000;
		background-color: #ffffff;
		transition: all 0.2s ease;
		-webkit-transition: all 0.2s ease;
		-moz-transition: all 0.2s ease;
	}
	:hover div:nth-child(1) {
		transition: all 0.2s ease;
		-webkit-transition: all 0.2s ease;
		-moz-transition: all 0.2s ease;
		background-color: rgba(0, 0, 0, 0.5);
	}
	div:nth-child(2) {
		color: #ffffff;
		background-color: #000000;
		transform: rotateX(90deg);
		-webkit-transform: rotateX(90deg);
		-moz-transform: rotateX(90deg);
		transition: all 0.2s ease;
		-webkit-transition: all 0.2s ease;
		-moz-transition: all 0.2s ease;
		transform-origin: left top;
		-webkit-transform-origin: left top;
		-moz-transform-origin: left top;
	}
	:hover div:nth-child(2) {
		transition: all 0.2s ease;
		-webkit-transition: all 0.2s ease;
		-moz-transition: all 0.2s ease;
		transform: rotateX(0deg);
		-webkit-transform: rotateX(0deg);
		-moz-transform: rotateX(0deg);
	}
`;
const ButtonSole = styled.div``;
const LogoutBox = styled.div`
	/* border: 4px solid green; */
	width: 20%;
	margin-right: 2.5rem;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
