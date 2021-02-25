import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import Cmanual from "../components/manual";
import logoImg from "../assets/images/royalschool.png";

export default function Manual(): ReactElement {
	const Main = styled.div`
		background: smokewhite;
		border: 5px solid black;
		max-width: 50rem;
		//margin-left: 6rem;
		margin-right: 1rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		// width: 35rem;
		height: 89vh;
	`;

	const Header = styled.div`
		// border: 5px solid black;
		display: flex;
		flex-direction: row;
		flex-grow: 0.1;
	`;

	const Logo = styled.div`
		// border: 5px solid red;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7vw;
		padding: -10px;
	`;

	const Title = styled.div`
		// border: 5px solid black;
		flex-grow: 7;
		justify-content: center;
		margin: auto;
		font-size: 2rem;
		font-weight: bold;
		letter-spacing: 2rem;
		display: flex;
	`;

	const Contactinfo = styled.div`
		border-left: 3px solid black;
		flex-grow: 0.3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 0.7rem;
	`;

	const Notification = styled.div`
		// border: 3px solid red;
	`;

	const Ntitle = styled.div`
		border: 3px solid black;
		flex-grow: 0.5;
		text-align: center;
		letter-spacing: 0.3rem;
		margin-left: -0.2rem;
		margin-right: -0.3rem;
		font-size: 1rem;
	`;

	const Ncontent = styled.div`
		border-bottom: 3px solid black;
		flex-grow: 0.5;
		padding-left: 1rem;
		margin-left: -0.1rem;
		margin-right: -0.2rem;
		font-size: 0.8rem;
	`;

	const Developerinfo = styled.div`
		border-top: 3px solid black;
		flex-grow: 0.1;
		margin: auto -0.1rem;
		font-size: 0.8rem;
	`;

	const Footer = styled.div`
		border-top: 3px solid black;
		margin: 0rem -0.1rem;
		text-align: center;
		flex-grow: 0.1;
		display: flex;
		flex-direction: column;
	`;

	const Fdate = styled.div`
		// border: 5px solid red;
		flex-grow: 1;
		letter-spacing: 0.3rem;
		font-weight: bold;
		font-size: 1rem;
	`;

	const Fprincipal = styled.div`
		// border: 5px solid red;
		flex-grow: 3;
		font-size: 2rem;
		font-weight: bold;
		letter-spacing: 1rem;
	`;

	const Logolesson = styled.div`
		border-right: 3px solid black;
		flex-grow: 0.5;
		display: flex;
		flex-direction: column;
		// margin: -0.1rem;
	`;

	const imgstyle = { width: "80%", height: "80%" };

	const Today = () => {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		return `${year}년 ${month}월 ${day}일`;
	};

	return (
		<Main>
			<Header>
				<Logolesson>
					<Logo>
						<img src={logoImg} style={imgstyle} alt="" />
					</Logo>
				</Logolesson>
				<Title>가정통신문</Title>
				<Contactinfo>
					<div>교무실: 032-123-1234</div>
					<div>행정실: 032-123-1234</div>
					<div>팩스: 032-123-1234</div>
					<div>전자우편: 032-123-1234</div>
				</Contactinfo>
			</Header>
			<Notification>
				<Ntitle>제목: 로얄 그림 일기장 사용 방법 공지</Ntitle>
				<Ncontent>
					안녕하십니까? <br />
					사랑하는 로얄 스쿨 입학생 및 학부모 여러분.
					<br />
					아래와 같이 로얄 스쿨 그림 일기장 사용법을 고지하고니 여름 방학동안 우리의 아이들이 꾸준히 그림 일기장을
					<br /> 쓸 수 있도록 도와주시면 감사하겠습니다.
				</Ncontent>
			</Notification>
			<Cmanual />
			<Developerinfo>개발자 정보, 깃허브주소</Developerinfo>
			<Footer>
				<Fdate>{Today()}</Fdate>
				<Fprincipal>로얄 국민학교장 </Fprincipal>
			</Footer>
		</Main>
	);
}
