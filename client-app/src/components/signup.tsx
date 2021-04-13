import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import logoImg from "../assets/images/royalschool.png";
import { isPhoneNumber, isEmailForm, IsPasswordForm } from "../common/validation";
import NotificationModal from "./NotificationModal";

interface signinProps {
	changeSignin: (e: boolean) => void;
}

export default function Agreement(props: signinProps): ReactElement {
	const { changeSignin } = props;
	const history = useHistory();
	// input 값 상태 관리
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [nickName, setNickName] = useState("");
	const [mobile, setMobile] = useState("");
	const [firstPassword, setFirstPassword] = useState("");
	const [lastPassword, setLastPassword] = useState("");
	const [message, setMessage] = useState("");
	const [isSamePassword, setIsSamePassword] = useState(false);
	const [msgVisible, setMsgVisible] = useState(false);
	// 서버에 중복여부 확인
	const [isUsableEmail, setIsUsableEmail] = useState(false);
	const [isUsableNick, setIsUsableNick] = useState(false);
	const [isUsableMobile, setIsUsableMobile] = useState(false);
	// modal 상태 관리
	const [modalMessage, setModalMessage] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	// 유효성 검사(형식에 맞는지)
	const [validation, setValidation] = useState({
		validEmail: false,
		validPassword: false,
		validMobile: false,
		validAgreement: false,
	});

	// 입력한 이름 상태 저장
	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	// 입력한 이메일 상태 저장
	const handleEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		// 이메일 형식에 맞으면 validEmail: true
		if (isEmailForm(email)) {
			setValidation({
				...validation,
				validEmail: isEmailForm(event.target.value),
			});
			setMsgVisible(false);
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
						setMessage("사용가능한 이메일입니다");
						setMsgVisible(true);
					} else if (res.data.message === "email already exists") {
						setIsUsableEmail(false);
						setMessage("동일한 이메일이 존재합니다");
						setMsgVisible(true);
					}
				})
				.catch((err) => {
					console.log("Internal Server Error occured");
				});
		} else {
			setMessage("이메일 형식을 확인해주세요");
			setMsgVisible(true);
		}
	};
	// 입력한 닉네임 상태 저장.
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
	// 입력한 모바일 상태 저장. 전화번호 형식에 맞으면 validMobile: true
	const handleMobile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		setMobile(event.target.value);
		if (isPhoneNumber(mobile)) {
			setValidation({
				...validation,
				validMobile: isPhoneNumber(event.target.value),
			});
			setMsgVisible(false);
			await axios
				.post(
					"https://royal-diary.ml/users/matchinfo",
					{ mobile: event.target.value },
					{
						headers: { "Content-Type": "application/json" },
						withCredentials: true,
					}
				)
				.then((res) => {
					if (res.data.message === "mobile is usable") {
						setIsUsableMobile(true);
						setMessage("사용가능한 휴대폰 번호입니다");
						setMsgVisible(true);
					} else if (res.data.message === "mobile already exists") {
						setIsUsableMobile(false);
						setMessage("동일한 번호가 존재합니다");
						setMsgVisible(true);
					}
				})
				.catch((err) => {
					console.log("Internal Server Error occured");
				});
		} else {
			setMessage("전화번호는 010으로 시작, (-)없이 작성");
			setMsgVisible(true);
		}
	};

	//! 비밀번호 , 비밀번호 확인 input 태그에 똑같은 조건이 모두 있어야 함.
	// 첫번째 비밀번호칸. 비밀번호 상태저장 및 비밀번호 일치 여부 상태 저장
	const handleFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFirstPassword(value);

		if (IsPasswordForm(value)) {
			setValidation({
				...validation,
				validPassword: IsPasswordForm(value), // 비밀번호 형식 점검
			});
			setMsgVisible(false);
			if (lastPassword.length > 0) {
				if (value !== lastPassword) {
					setMessage("비밀번호가 불일치합니다");
					setMsgVisible(true);
					setIsSamePassword(false);
				} else if (lastPassword === "") {
					setMessage("");
				} else if (value === lastPassword) {
					setMessage("비밀번호가 일치합니다");
					setMsgVisible(true);
					setIsSamePassword(true);
				}
			}
		} else {
			setMessage("비밀번호 형식을 확인해주세요");
			setMsgVisible(true);
		}
	};
	const handleLastPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setLastPassword(value);

		if (value !== firstPassword) {
			setMessage("비밀번호가 불일치합니다");
			setMsgVisible(true);
			setIsSamePassword(false); // 비밀번호 불일치 점검
		} else if (firstPassword === " ") {
			setMessage("");
		} else if (value === firstPassword) {
			setMessage("비밀번호가 일치합니다");
			setMsgVisible(true);
			setIsSamePassword(true);
		}
	};
	const handleCheckbox = () => {
		const chkbox = document.getElementsByName("agreement") as any;
		const chkbox1 = chkbox[0].checked;
		const chkbox2 = chkbox[1].checked;
		const chkbox3 = chkbox[2].checked;

		if (chkbox1 && chkbox2 && chkbox3) {
			setValidation({
				...validation,
				validAgreement: true,
			});
			setMessage("동의가 완료되었습니다");
			setMsgVisible(true);
		} else {
			setValidation({
				...validation,
				validAgreement: false,
			});
			setMessage("모든약관에 동의해주세요");
			setMsgVisible(true);
		}
	};

	const handleSignin = () => {
		changeSignin(true);
	};
	const handleRequestSignUp = async () => {
		const nameLength = name.length;
		const pwdLength = lastPassword.length;
		const nickNameLength = nickName.length;
		const mobileLength = mobile.length;
		const { validEmail, validPassword, validMobile, validAgreement } = validation;
		if (nameLength > 0 && pwdLength > 0 && nickNameLength > 0 && mobileLength > 0) {
			if (!isUsableNick) {
				setMessage("동일한 별명이 존재합니다");
				setMsgVisible(true);
				return;
			}
			if (!validEmail) {
				setMessage("이메일 형식을 확인해주세요");
				setMsgVisible(true);
				return;
			}
			if (!isUsableEmail) {
				setMessage("동일한 이메일이 존재합니다");
				setMsgVisible(true);
				return;
			}
			if (!isUsableMobile) {
				setMessage("동일한 번호가 존재합니다");
				setMsgVisible(true);
				return;
			}
			if (!validMobile) {
				setMessage("전화번호 형식을 확인해주세요");
				setMsgVisible(true);
				return;
			}
			if (!validPassword) {
				setMessage("비밀번호 형식을 확인해주세요");
				setMsgVisible(true);
				return;
			}
			if (!isSamePassword) {
				setMessage("비밀번호가 불일치합니다");
				setMsgVisible(true);
				return;
			}
			if (!validAgreement) {
				setMessage("모든약관에 동의해주세요");
				setMsgVisible(true);
				return;
			}

			await axios
				.post(
					"https://royal-diary.ml/users/signup",
					{
						name,
						email,
						password: lastPassword,
						nickname: nickName,
						mobile,
					},
					{
						headers: { "Content-Type": "application/json" },
						withCredentials: true,
					}
				)
				.then((res) => {
					sessionStorage.setItem("accessToken", res.data.data.accessToken);
					sessionStorage.setItem("isLogin", JSON.stringify(true));
					sessionStorage.setItem("nickName", nickName);
					sessionStorage.setItem("signUpIn", JSON.stringify(true)); // 회원가입 하자마자 로그인
					handleSignin();
					setModalMessage("회원가입 되었습니다:)");
					setModalVisible(true);
				})
				.catch((error) => {
					console.log("Internal Server Error occured");
				});
		} else {
			setModalMessage("모든 입력사항은 필수 입니다");
			setModalVisible(true);
		}
	};

	return (
		<Main>
			<div id="wrap">
				<ValidityBox theme={msgVisible}>{message}</ValidityBox>
			</div>
			<InfoBox>
				<Title>지원자</Title>
				<InputInfo>
					<Linesolo style={FirstLine}>
						<Item>이름</Item>
						<Input name="name" type="text" maxLength={12} placeholder="홍길동" onChange={handleName} />
						<Item>별명</Item>
						<Input name="nickname" type="text" maxLength={12} placeholder="아기공룡 둘리" onChange={handleNickName} />
					</Linesolo>
					<Linesolo>
						<Item>전자우편</Item>
						<Input name="email" type="text" placeholder="abc@gmail.com" onChange={handleEmail} />
						<Item>전화번호</Item>
						<Input name="mobile" type="text" placeholder="01012345678" onChange={handleMobile} />
					</Linesolo>
					<Linesolo>
						<Item>암호</Item>
						<Inputpwd
							name="password"
							type="password"
							placeholder="영문+숫자+특수문자 조합 8자이상"
							onChange={handleFirstPassword}
						/>
					</Linesolo>
					<Linesolo>
						<Item>암호확인</Item>
						<Inputpwd
							name="password confirm"
							type="password"
							placeholder="암호 일치여부를 확인합니다"
							onChange={handleLastPassword}
						/>
					</Linesolo>
				</InputInfo>
			</InfoBox>
			<Checkagreement>
				<div>나의 다짐</div>
				<div>
					<input type="checkbox" name="agreement" value="" onClick={handleCheckbox} />
					친구에게 나쁜말을 하지 않겠습니다.
				</div>
				<div>
					<input type="checkbox" name="agreement" value="" onClick={handleCheckbox} />
					친구와 사이좋게 지내겠습니다.
				</div>
				<div>
					<input type="checkbox" name="agreement" value="" onClick={handleCheckbox} />
					그림일기를 꾸준하게 작성하겠습니다.
				</div>
			</Checkagreement>
			<Footer>
				<Logo>
					<img src={logoImg} alt="" />
				</Logo>
				<Buttons>
					<Button type="button" name="signup" onClick={handleRequestSignUp}>
						입학하기
					</Button>
					<Button type="button" name="back button" onClick={() => history.push("/")}>
						뒤로가기
					</Button>
				</Buttons>
				<NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} />
			</Footer>
		</Main>
	);
}
const Main = styled.div`
	/* border: 3px solid red; */
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* flex-grow: 1; */
	div#wrap {
		/* border: 3px solid green; */
		width: 100%;
		height: 2rem;
		margin-top: 0.2rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;
const ValidityBox = styled.div`
	/* border: 1px solid black; */
	position: relative;
	/* width: 12rem; */
	height: 30px;
	margin-right: 2rem;
	padding: 0rem 1rem 0rem 1rem;
	background: black;
	color: white;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: flex-start;
	align-items: center;
	::after {
		border-top: 0px solid transparent;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid black;
		content: "";
		position: absolute;
		top: -10px;
		left: 110px;
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
const InfoBox = styled.div`
	border: 3px solid black;
	margin-top: 0.5rem;
	/* height: 10rem; */
	width: 80%;
	display: flex;
	border-radius: 2rem;
	background: white;
	@media only screen and (max-width: 600px) {
		width: 24rem;
	}
	@media only screen and (max-width: 480px) {
		width: 90%;
	}
`;
const Title = styled.div`
	// border: 3px solid #313030;
	flex-grow: 0.5;
	writing-mode: tb-rl;
	padding: 1rem;
	padding-top: 1.2rem;
	font-size: 1.5rem;
	letter-spacing: 1rem;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;
const InputInfo = styled.div`
	/* border: 3px solid red; */
	width: 100%;
	margin-bottom: -0.1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex-wrap: nowrap;
`;
const Linesolo = styled.div`
	/* border-right: 1px solid black; */
	border-top: 1px solid rgb(0, 0, 0);
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
	border-left: 1px solid black;
	border-right: 1px solid black;
	/* border: 1px solid red; */
	margin-top: -0.2rem;
	padding-left: 0.2rem;
	height: 2.5rem;
	width: 4rem;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 480px) {
		margin-top: -0.1rem;
		height: 2.1rem;
	}
`;
const Input = styled.input`
	border: 1px solid white;
	width: 23%;
	height: 70%;
	margin-top: -0.2rem;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.5rem;
	:focus {
		outline: none;
	}
	@media only screen and (max-width: 480px) {
		width: 20%;
	}
`;
const Inputpwd = styled.input`
	border: 1px solid white;
	width: 50%;
	height: 70%;
	margin-top: -0.2rem;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.5rem;
	letter-spacing: -0.1rem;
	:focus {
		outline: none;
	}
`;
const Checkagreement = styled.div`
	border: 3px solid black;
	width: 77%;
	height: 7rem;
	margin: 1rem 0rem 1rem 0rem;
	padding-left: 2rem;
	padding-bottom: 1rem;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 1.2rem;
	background: white;
	input {
		zoom: 1.3;
	}
	@media only screen and (max-width: 600px) {
		width: 22rem;
	}
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		width: 82%;
	}
	@media only screen and (max-width: 380px) {
		font-size: 1rem;
		width: 82%;
		margin: 1rem 0rem 0rem 0rem;
	}
`;
const Footer = styled.div`
	/* border: 3px solid red; */
	width: 77%;
	margin-top: 1.5rem;
	display: flex;
`;
const Logo = styled.div`
	/* border: 5px solid red; */
	flex-grow: 4;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 5rem;
	img {
		width: 7rem;
		alt: "";
		@media only screen and (max-width: 480px) {
			display: none;
		}
	}
	@media only screen and (max-width: 480px) {
		padding-left: 0rem;
	}
`;
const Buttons = styled.div`
	/* height: 3rem; */
	/* border: 5px solid black; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 380px) {
		flex-direction: row;
	}
`;
const Button = styled.button`
	border: 2px solid black;
	width: 7rem;
	height: 2.3rem;
	margin: 0.3rem;
	font-size: 0.9rem;
	color: white;
	background: black;
	border-radius: 1rem;
	outline: none;
	:hover {
		cursor: pointer;
		background: white;
		color: black;
		transition: all 1s;
	}
	@media only screen and (max-width: 380px) {
		width: 5rem;
		height: 1.5rem;
		font-size: 0.8rem;
	}
`;
