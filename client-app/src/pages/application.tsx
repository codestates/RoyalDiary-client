import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Agreement from "../components/agreement";
import principalImg from "../assets/images/principal.png";
import logoImg from "../assets/images/royalschool.png";

export default function Application(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		// border: 10px solid black;
		margin-right: 7rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		max-width: 47rem;
	`;

	const Header = styled.div`
		// border: 5px solid red;
		display: flex;
		height: 6rem;
		padding-left: 4rem;
		flex-grow: 0.1;
		align-items: center;
		font-size: 3rem;
		// font-weight: bold;
		letter-spacing: 0.5rem;
	`;
	const Body = styled.div`
		// border: 3px solid blue;
		display: flex;
	`;
	const Content = styled.div`
		// border: 3px solid black;
		padding-left: 3rem;
		line-height: 2.5rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	`;

	const Text = styled.div`
		// border: 3px solid red;
		padding-left: 1rem;
		width: 25rem;
		font-size: 1.3rem;
	`;

	const Todaydate = styled.div`
		// border: 5px solid red;
		width: 25rem;
		margin-bottom: 0.8rem;
		font-size: 1.5rem;
		font-weight: bold;
		text-align: right;
		letter-spacing: 0.3rem;
	`;
	const Principal = styled.div`
		// border: 5px solid red;
		width: 25rem;
		font-size: 1.8rem;
		font-weight: bold;
		text-align: right;
	`;

	const Image = styled.div`
		// border: 3px solid black;
		flex-grow: 1;
		margin-right: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10em;
		// text-align: center;
	`;

	const Footer = styled.div`
		// border: 3px solid black;
		text-align: center;
		display: flex;
		height: 2rem;
		margin-right: -0.2rem;
		margin-top: 3rem;
	`;

	const Logo = styled.div`
		// border: 5px solid red;
		flex-grow: 3;
		padding-left: 14rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: -10px;
	`;

	const Button = styled.div`
		// border-left: 5px solid black;
		flex-grow: 1;
		display: flex;
		margin-right: 3.5rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`;

	const pstyle1 = { letterSpacing: "0.5rem" };
	const pstyle2 = { padding: "0rem 0rem 0rem 5rem", fontSize: "1rem" };
	const imgstyle = { width: "90%", height: "80%" };
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
			<Header>입학지원서 </Header>
			<Body>
				<Content>
					<Text>
						&nbsp;&nbsp;&nbsp;다음의 어린이가 귀교의 정규교육과정을 <br /> 이수하기 위해 아래와 같이 귀교의 입학을{" "}
						<br />
						지원합니다.
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
					<img src={logoImg} width="130rem" height="110rem" alt="" />
				</Logo>
				<Button>
					<button type="submit" style={btnstyle}>
						입학하기
					</button>
					<button type="button" style={btnstyle}>
						뒤로가기
					</button>
				</Button>
			</Footer>
		</Main>
	);
}
