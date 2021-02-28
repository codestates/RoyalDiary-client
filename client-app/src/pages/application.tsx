import React, { ReactElement } from "react";
import { useHistory, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Agreement from "../components/agreement";
import principalImg from "../assets/images/principal.png";
import logoImg from "../assets/images/royalschool.png";
import SubNav from "../components/subNav";

export default function Application(): ReactElement {
	const history = useHistory();
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
			width: 100%;
			height: 70%;
		}
	`;
	const Header = styled.div`
		/* border: 5px solid red; */
		flex-grow: 0.5;
		display: flex;
		margin-bottom: 1rem;
		padding-left: 4rem;
		align-items: center;
		font-size: 3rem;
		letter-spacing: 0.5rem;
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
		/* padding-top: 2rem; */
		line-height: 2.5rem;
		width: 90%;
		display: flex;
		flex-direction: column;
	`;
	const Text = styled.div`
		/* border: 3px solid red; */
		padding-left: 3rem;
		font-size: 1.3rem;
		@media only screen and (max-width: 1400px) {
			font-size: 1rem;
		}
	`;
	const Todaydate = styled.div`
		/* border: 5px solid red; */
		margin-top: 1.5rem;
		padding-right: 2rem;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: right;
		letter-spacing: 0.3rem;
		@media only screen and (max-width: 1400px) {
			font-size: 1.3rem;
		}
		@media only screen and (max-width: 770px) {
			font-size: 1.1rem;
		}
	`;
	const Principal = styled.div`
		/* border: 5px solid red; */
		margin-top: 1rem;
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
	const Footer = styled.div`
		/* border: 3px solid black; */
		text-align: center;
		flex-grow: 1;
		display: flex;
		margin-right: -0.2rem;
		/* margin-top: 3rem; */
	`;
	const Logo = styled.div`
		/* border: 5px solid red; */
		flex-grow: 4;
		padding-left: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		@media only screen and (max-width: 480px) {
			padding-left: 0rem;
		}
	`;
	const Button = styled.div`
		/* border-left: 5px solid black; */
		flex-grow: 1;
		display: flex;
		margin-right: 3.5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`;
	const LogoImg = styled.img`
		width: 35%;
		alt: "";
		@media only screen and (max-width: 480px) {
			width: 50%;
		}
	`;

	const pstyle1 = { letterSpacing: "0.5rem" };
	const pstyle2 = { padding: "0rem 0rem 0rem 5rem", fontSize: "1rem" };
	const imgstyle = { width: "80%" };
	const btnstyle = {
		width: "6rem",
		height: "2.5rem",
		margin: "0.3rem",
		background: "#c4c4c4",
		borderRadius: "1rem",
	};

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
			<Agreement />
			<Footer>
				<Logo>
					<LogoImg src={logoImg} />
				</Logo>
				<Button>
					<button type="submit" style={btnstyle}>
						입학하기
					</button>
					<button type="button" style={btnstyle} onClick={() => history.push("/")}>
						뒤로가기
					</button>
				</Button>
			</Footer>
		</Main>
	);
}
