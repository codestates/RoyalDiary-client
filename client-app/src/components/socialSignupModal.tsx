import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import axios from "axios";
import { isEmailForm } from "../common/validation";
import NotificationModal from "./NotificationModal";

Modal.setAppElement("#root");
interface Props {
	isOpenSocial: boolean;
	socialData: any;
	setSocialOpen: (e: boolean) => void;
}

export default function SocialInfoModal(props: Props): ReactElement {
	const { isOpenSocial, socialData, setSocialOpen } = props;
	// input 상태 관리
	const [uemail, setEmail] = useState("");
	const [nickName, setNickName] = useState("");
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
	const [socialType, setSocialType] = useState("");
	// 서버 중복 여부 확인
	const [isUsableEmail, setIsUsableEmail] = useState(false);
	const [isUsableNick, setIsUsableNick] = useState(false);
	// 유효성 검사
	const [validEmail, setValidEmail] = useState(false);
	// modal 상태 관리
	const [modalMessage, setModalMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

	function closeModal() {
		setSocialOpen(false);
		setNickName("");
		setEmail("");
		// 카카오 연결끊기 => 소셜로그인 할때 정보제공에 다시 동의해야함.
		if (socialType === "kakao") {
			window.Kakao.API.request({
				url: "/v1/user/unlink",
				success(res: any) {
					console.log("카카오와 접속이 끊어졌습니다");
				},
				fail(err: any) {
					alert(`fail: ${JSON.stringify(err)}`);
				},
			});
		}
	}
	const setTime = () => {
		setTimeout(() => {
			setMsgVisible(false);
		}, 2000);
	};
	const handleEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		// 이메일 형식에 맞으면 validEmail: true
		if (isEmailForm(uemail)) {
			setValidEmail(true);
			await axios
				.post(
					"https://royal-diary.ml/users/matchinfo",
					{ email: event.target.value },
					{
						headers: { "Content-Type": "application/json" },
						withCredentials: true,
					}
				)
				.then((res) => {
					if (res.data.message === "email is usable") {
						setIsUsableEmail(true);
						setMessage("사용가능한 이메일입니다.");
						setMsgVisible(true);
					} else if (res.data.message === "email already exists") {
						setIsUsableEmail(false);
						setMessage("동일한 이메일이 존재합니다");
						setMsgVisible(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setMessage("이메일 형식을 확인해주세요");
			setMsgVisible(true);
		}
	};
	const handleNickName = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const newNickName = event.target.value;
		setNickName(newNickName);
		// 서버에 중복 확인 요청
		await axios
			.post(
				"https://royal-diary.ml/users/matchinfo",
				{ nickname: newNickName },
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			)
			.then((res) => {
				if (res.data.message === "nickname is usable") {
					setIsUsableNick(true);
					setMessage("사용가능한 별명입니다");
					setMsgVisible(true);
				} else if (res.data.message === "nickname already exists") {
					setIsUsableNick(false);
					setMessage("동일한 별명이 존재합니다");
					setMsgVisible(true);
				}
			})
			.catch((err) => {
				console.log("Internal Server Error occured");
			});
	};
	const handleSignup = async () => {
		if (uemail.length > 0 && nickName.length > 0) {
			if (!validEmail) {
				setMessage("이메일 형식을 확인해주세요");
				setMsgVisible(true);
				return;
			}
			if (!isUsableNick) {
				setMessage("동일한 별명이 존재합니다");
				setMsgVisible(true);
				return;
			}
			if (!isUsableEmail) {
				setMessage("동일한 이메일이 존재합니다");
				setMsgVisible(true);
				return;
			}
			if (socialType === "kakao" && socialData.data.email !== undefined) {
				if (uemail !== socialData.data.email) {
					setMessage("카카오 서비스에 등록된 이메일을 사용하세요");
					setMsgVisible(true);
					setTime();
					return;
				}
			}
			if (socialType === "google" && uemail !== socialData.data) {
				setMessage("구글 서비스에 등록된 이메일을 사용하세요");
				setMsgVisible(true);
				setTime();
				return;
			}
			await axios
				.post(
					"https://royal-diary.ml/users/auth",
					{ auth: socialType || socialData.type, nickname: nickName, email: uemail },
					{
						headers: { "Content-Type": "application/json" },
						withCredentials: true,
					}
				)
				.then((res) => {
					sessionStorage.setItem("accessToken", res.data.data.accessToken);
					sessionStorage.setItem("isLogin", JSON.stringify(true));
					sessionStorage.setItem("nickName", nickName);
					setModalMessage("회원가입 되었습니다:)");
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
					setTime();
				});
		} else {
			setMessage("이메일과 비밀번호를 입력해주세요");
			setMsgVisible(true);
		}
	};
	useEffect(() => {
		if (socialData !== "" && socialData.type === "google") {
			const oauthType = socialData.type;
			const socialEmail = socialData.data;
			setSocialType(oauthType);
			setEmail(socialEmail);
			if (socialEmail !== "") {
				setValidEmail(true);
				setIsUsableEmail(true);
			}
		}
		if (socialData !== "" && socialData.data.email !== undefined) {
			const oauthType = socialData.type;
			const socialEmail = socialData.data.email;
			setSocialType(oauthType);
			setEmail(socialEmail);
			if (socialEmail !== "") {
				setValidEmail(true);
				setIsUsableEmail(true);
			}
		}
	}, [socialData]);
	return (
		<Modal isOpen={isOpenSocial} style={ModalStyles}>
			<ModalBox>
				<Title> 소셜 로그인 추가 정보 기입</Title>
				<InputInfo>
					<Linesolo>
						<Item>전자우편</Item>
						<Input name="email" type="text" value={uemail} placeholder="abc@gmail.com" onChange={handleEmail} />
					</Linesolo>
					<Linesolo style={FirstLine}>
						<Item>별명</Item>
						<Input
							name="nickname"
							type="text"
							value={nickName}
							maxLength={12}
							placeholder="아기공룡 둘리"
							onChange={handleNickName}
						/>
					</Linesolo>
				</InputInfo>
				<ValidWrapper id="wrap">
					<ValidityBox theme={msgVisible}>{message}</ValidityBox>
				</ValidWrapper>
				<Buttons>
					<Caution>*소셜서비스에 등록된 이메일을 사용해주세요</Caution>
					<SubmitBtn onClick={handleSignup}>제출하기</SubmitBtn>
					<BackBtn onClick={closeModal} type="button">
						뒤로가기
					</BackBtn>
				</Buttons>
			</ModalBox>
			<NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} />
		</Modal>
	);
}
const ModalBox = styled.div`
	/* border: 10px solid yellow; */
	margin-left: 1rem;
	width: 30rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
const Title = styled.div`
	/* border: 1px solid red; */
	width: 90%;
	font-size: 1.7rem;
	font-weight: bold;
	text-align: center;
`;
const InputInfo = styled.div`
	/* border: 3px solid red; */
	width: 90%;
	margin-top: 2rem;
	margin-left: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex-wrap: nowrap;
`;
const Linesolo = styled.div`
	/* border: 1px solid black; */
	flex-grow: 4;
	margin-top: -0.1rem;
	margin-bottom: -0.1rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;
const FirstLine = {
	borderTop: "none",
};
const Item = styled.div`
	margin-top: -0.2rem;
	padding-left: 0.2rem;
	height: 2.5rem;
	width: 4rem;
	display: flex;
	align-items: center;
`;
const Input = styled.input`
	/* border: 1px solid white; */
	width: 70%;
	height: 55%;
	margin-top: -0.2rem;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.5rem;
	:focus {
		outline: none;
	}
	@media only screen and (max-width: 480px) {
		width: 70%;
	}
`;
const ValidWrapper = styled.div`
	/* border: 3px solid blue; */
	height: 2.5rem;
	margin-top: 0.5rem;
	padding-right: 2rem;
	display: flex;
	justify-content: flex-end;
`;
const ValidityBox = styled.div`
	/* border: 3px solid red; */
	height: 30px;
	padding: 0.1rem 0rem 0.2rem 1rem;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: flex-start;
	align-items: center;
	::after {
		border-top: 0px solid transparent;
		border-bottom: 10px solid #f08080;
		content: "";
		position: absolute;
		top: -10px;
		left: 100px;
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
const Buttons = styled.div`
	/* border: 1px solid red; */
	display: flex;
	width: 19rem;
	padding-right: 0rem;
	justify-content: flex-end;
	align-items: center;
`;
const Caution = styled.div`
	/* border: 3px solid purple; */
	width: 15rem;
	margin-right: 3rem;
	font-size: 0.8rem;
`;
const SubmitBtn = styled.button`
	border: 1px solid black;
	background-color: white;
	width: 8rem;
	height: 2rem;
	font-size: 0.8rem;
	:hover {
		cursor: pointer;
		background-color: black;
		color: white;
	}
`;
const BackBtn = styled.button`
	border: 1px solid black;
	background-color: white;
	width: 8rem;
	height: 2rem;
	font-size: 0.8rem;
	margin-left: 0.5rem;
	:hover {
		cursor: pointer;
		background-color: black;
		color: white;
	}
`;
