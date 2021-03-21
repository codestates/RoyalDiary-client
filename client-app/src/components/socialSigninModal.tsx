import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import dotenv from "dotenv";
import googleLogo from "../assets/images/socialsignin/google.png";
import kakaoLogo from "../assets/images/socialsignin/kakao.png";
import NotificationModal from "./NotificationModal";

dotenv.config();
const googleId = process.env.REACT_APP_GOOGLE_CLIENTID as string;
const kakaoId = process.env.REACT_APP_KAKAO_CLIENTID;
window.Kakao.init(kakaoId); // 배포시 .env 에 저장.
// SDK 초기화 여부를 판단합니다.
// console.log(window.Kakao.isInitialized());
// console.log(window.Kakao);

Modal.setAppElement("#root");
interface Props {
	modalIsOpen: boolean;
	setIsOpen: (e: boolean) => void;
	setSocialOpen: (e: boolean) => void;
	conveySocial: (e: any, s: string) => void;
}

export default function SocialModal(props: Props): ReactElement {
	const { modalIsOpen, setIsOpen, setSocialOpen, conveySocial } = props;
	// modal 상태 관리
	const [modalMessage, setModalMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}

	const setSocialModal = () => {
		setSocialOpen(true);
		setIsOpen(false);
	};
	const conveySocialData = (e: any, socialType: string) => {
		conveySocial(e, socialType);
	};
	const checkKakaoEmail = async (e: any) => {
		const emailOffered = e.email;
		await axios
			.post(
				"https://royal-diary.ml/users/isemail",
				{ email: emailOffered },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			)
			.then((res) => {
				// 기 존재하는 회원일 경우, accesstoken 을 받기 때문에 바로 로그인 상태 변경 및 session 에 토큰 저장 필요
				// 존재하지 않는 회원일 경우, 추가정보 기입 모달창을 띄운다.
				if (res.data.message === "not exists") {
					conveySocialData(e, "kakao");
					setSocialModal();
					return;
				}
				const nicknameOffered = res.data.data.nickname;
				const accessTokenOffered = res.data.data.accessToken;
				sessionStorage.setItem("accessToken", accessTokenOffered);
				sessionStorage.setItem("isLogin", JSON.stringify(true));
				sessionStorage.setItem("nickName", nicknameOffered);
				setModalMessage("오늘은 어떤 일이 있었나요?:)");
				setModalVisible(true);
				// 카카오 연결 끊기.(임시)
				// window.Kakao.API.request({
				// 	url: "/v1/user/unlink",
				// 	success(resp: any) {
				// 		alert(`success: ${JSON.stringify(resp)}`);
				// 	},
				// 	fail(err: any) {
				// 		alert(`fail: ${JSON.stringify(err)}`);
				// 	},
				// });
			})
			.catch((err) => {
				console.log("Internal Server Error occurred");
			});
	};

	const kakaoLogin = () => {
		window.Kakao.Auth.login({
			scope: "profile, account_email",
			success: (token: any) => {
				window.Kakao.API.request({
					url: "/v2/user/me",
					success: (res: any) => {
						const kakaoAccount = res.kakao_account;
						const emailNeed = kakaoAccount.email_needs_agreement;
						// 이메일이 제공되지 않은 경우. 카카오톡에만 해당.
						if (emailNeed === true) {
							conveySocialData(kakaoAccount, "kakao");
							setSocialModal();
						} else if (emailNeed === false) {
							// 이메일이 제공된 경우
							checkKakaoEmail(kakaoAccount);
						}
					},
				});
			},
			fail: (err: any) => {
				console.log(err);
			},
		});
	};

	const googleLogin = async (response: any) => {
		const emailOffered = response.Rs.At;
		await axios
			.post(
				"https://royal-diary.ml/users/isemail",
				{ email: emailOffered },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			)
			.then((res) => {
				// 기 존재하는 회원일 경우, accesstoken 을 받기 때문에 바로 로그인 상태 변경 및 session 에 토큰 저장 필요
				// 존재하지 않는 회원일 경우, 추가정보 기입 모달창을 띄운다.
				if (res.data.message === "not exists") {
					conveySocialData(emailOffered, "google");
					setSocialModal();
					return;
				}
				const nicknameOffered = res.data.data.nickname;
				const accessTokenOffered = res.data.data.accessToken;
				sessionStorage.setItem("accessToken", accessTokenOffered);
				sessionStorage.setItem("isLogin", JSON.stringify(true));
				sessionStorage.setItem("nickName", nicknameOffered);
				setModalMessage("오늘은 어떤 일이 있었나요?:)");
				setModalVisible(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Modal isOpen={modalIsOpen} style={ModalStyles}>
			<ModalBox>
				<Title>쏘샬 로그인으로 입장하기</Title>
				<Buttons>
					<ImgWrapper className="g-signin2">
						<GoogleLogin
							clientId={googleId}
							render={(renderProps) => (
								<GoogleBtn type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
									<img src={googleLogo} alt="" />
								</GoogleBtn>
							)}
							buttonText="Login"
							onSuccess={googleLogin}
							onFailure={googleLogin}
							cookiePolicy="single_host_origin"
							style={{ backgroundColor: "red" }}
						/>
					</ImgWrapper>
					<ImgWrapper onClick={kakaoLogin}>
						<img src={kakaoLogo} alt="" />
					</ImgWrapper>
				</Buttons>
				<BackBtn>
					<button onClick={closeModal} type="button">
						뒤로 가기
					</button>
				</BackBtn>
			</ModalBox>
			<NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} />
		</Modal>
	);
}
const ModalBox = styled.div`
	//border: 10px solid yellow; */
	margin: auto;
	width: 45rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const Title = styled.div`
	/* border: 1px solid red; */
	font-size: 1.7rem;
	font-weight: bold;
	text-align: center;
`;
const Buttons = styled.div`
	/* border: 1px solid red; */
	display: flex;
	justify-content: center;
`;
const ImgWrapper = styled.div`
	/* border: 3px solid rebeccapurple; */
	img {
		margin: 1rem;
		width: 4rem;
		:hover {
			cursor: pointer;
		}
	}
`;
const GoogleBtn = styled.button`
	background: none;
	border: none;
	outline: none;
`;
const BackBtn = styled.div`
	/* border: 1px solid red; */
	display: flex;
	/* width: 5rem; */
	justify-content: flex-end;
	padding-right: 2rem;
	button {
		border: 1px solid black;
		background-color: white;
		width: 4.5rem;
		height: 2rem;
		font-size: 0.9rem;
		:hover {
			cursor: pointer;
			background: black;
			color: white;
		}
	}
`;
const ModalStyles = {
	content: {
		margin: "auto",
		width: "22rem",
		height: "18rem",
		background: "#f3f3e9",
		display: "flex",
		alignItems: "center",
	},
};
