import React, { ReactElement } from "react";
import styled from "styled-components";
import Agreement from "../components/signup";
import principalImg from "../assets/images/principal.png";
import SubNav from "../components/subNav";

interface signinProps {
	changeSignin: (e: boolean) => void;
}

export default function Application(props: signinProps): ReactElement {
	const { changeSignin } = props;
	const pstyle1 = { letterSpacing: "0.5rem" };
	const pstyle2 = { padding: "0rem 0rem 0rem 3rem", fontSize: "1rem" };
	const imgstyle = { width: "80%" };

	const Today = (): string => {
		const year: number = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		return `${year}년 ${month}월 ${day}일`;
	};

	return (
		<Main>
			<SubNav />
			<Header>입학지원서 </Header>
			<Body>
				<Content>
					<Text>
						&nbsp;&nbsp;&nbsp;다음의 어린이가 귀교의 정규교육과정을 이수하기 위해 아래와 같이 귀교의 입학을 지원합니다.
					</Text>
					<Todaydate>{Today()}</Todaydate>
					<Principal>
						<span style={pstyle1}>로얄 국민학교</span>
						<span style={pstyle2}>교장귀하</span>
					</Principal>
				</Content>
				<Image>
					<img src={principalImg} style={imgstyle} alt="" />
				</Image>
			</Body>
			<Agreement changeSignin={changeSignin} />
		</Main>
	);
}
const Main = styled.div`
	background: #f3f3e9;
	/* border: 10px solid black; */
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* flex-wrap: wrap; */
	@media only screen and (max-width: 1200px) {
		width: 100%;
		height: 100%;
	}
	@media only screen and (max-width: 480px) {
		/* width: 100%; */
		min-width: 400px;
		height: 70%;
	}
`;
const Header = styled.div`
	/* border: 5px solid red; */
	margin-top: 1rem;
	display: flex;
	padding-bottom: 0.5rem;
	padding-left: 4rem;
	align-items: center;
	font-size: 3rem;
	letter-spacing: 0.5rem;
	@media only screen and (max-width: 480px) {
		padding-left: 3rem;
	}
`;
const Body = styled.div`
	/* border: 3px solid blue; */
	display: flex;
	flex-grow: 0.1;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Content = styled.div`
	/* border: 3px solid green; */
	padding-left: 1.5rem;
	line-height: 2.5rem;
	width: 90%;
	display: flex;
	flex-direction: column;
`;
const Text = styled.div`
	/* border: 3px solid red; */
	/* padding-left: 3rem; */
	font-size: 1.1rem;
	@media only screen and (max-width: 1400px) {
		font-size: 1rem;
	}
`;
const Todaydate = styled.div`
	/* border: 5px solid red; */
	padding-right: 2rem;
	font-size: 1.3rem;
	font-weight: bold;
	text-align: right;
	letter-spacing: 0.3rem;
	@media only screen and (max-width: 1400px) {
		font-size: 1.1rem;
	}
	@media only screen and (max-width: 770px) {
		font-size: 1rem;
	}
`;
const Principal = styled.div`
	/* border: 5px solid red; */
	margin-top: 0.5rem;
	padding-right: 2rem;
	font-size: 1.8rem;
	font-weight: bold;
	text-align: right;
	@media only screen and (max-width: 1400px) {
		font-size: 1.5rem;
	}
	@media only screen and (max-width: 770px) {
		font-size: 1.3rem;
	}
`;
const Image = styled.div`
	/* border: 3px solid blue; */
	display: flex;
	align-items: center;
	justify-content: center;
`;
