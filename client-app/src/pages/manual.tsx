import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import Cmanual from "../components/manual";
import logoImg from "../assets/images/royalschool.png";

export default function Manual(): ReactElement {
	const Main = styled.div`
		background: smokewhite;
		border: 5px solid black;
		margin-left: 8rem;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		max-width: 50rem;
		max-height: 70rem;
	`;

	const Header = styled.div`
		// border: 5px solid black;
		display: flex;
		flex-direction: row;
		height: 7rem;
		width: 100%;
		// flex-grow: 0.1;
	`;
	const Notification = styled.div`
		// border: 3px solid black;
		flex-grow: 0.4;
		height: 5rem;
	`;
	const Ntitle = styled.div`
		border: 3px solid black;
		// flex-grow: 0.5;
		font-size: 1.3rem;
		text-align: center;
		letter-spacing: 0.3rem;
		margin-left: -0.2rem;
		margin-right: -0.3rem;
	`;
	const Ncontent = styled.div`
		border-bottom: 3px solid black;
		height: 8rem;
		padding-left: 1rem;
		margin-left: -0.1rem;
		margin-right: -0.2rem;

		// position: relative;
		// top: 1rem;
		// left: -0.1rem;
		// right: 1rem;
		font-size: 1rem;
	`;

	const Developerinfo = styled.div`
		border-top: 3px solid black;
		flex-grow: 0.3;
		margin: auto -0.1rem;
	`;
	const Footer = styled.div`
		border-top: 3px solid black;
		text-align: center;
		flex-grow: 0.3;
		display: flex;
		flex-direction: column;
		height: 2rem;
		margin-right: -0.2rem;
		// align-itmes: center;
		// justify-content: center;
	`;
	const Fdate = styled.div`
		// border: 5px solid red;
		flex-grow: 1;
		font-size: 1.5rem;
		font-weight: bold;
		letter-spacing: 0.3rem;
	`;
	const Fprincipal = styled.div`
		// border: 5px solid red;
		flex-grow: 3;
		font-size: 3rem;
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
	const Logo = styled.div`
		// border: 5px solid red;
		flex-grow: 4;
		// text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: -10px;
	`;
	// const Lesson = styled.div`
	// 	border: 1px solid black;
	// 	flex-grow: 1;
	// 	text-align: center;
	// 	font-weight: bold;
	// `;

	const Title = styled.div`
		// border: 5px solid black;
		flex-grow: 1;
		text-align: center;
		margin: auto;
		font-size: 3rem;
		font-weight: bold;
		letter-spacing: 2rem;
	`;
	const Contactinfo = styled.div`
		border-left: 3px solid black;
		flex-grow: 0.3;
		margin: -0.1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 0.8rem;
	`;

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
						<img src={logoImg} width="100rem" height="100rem" alt="" />
					</Logo>
					{/* <Lesson>행복하게 살자</Lesson> */}
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
