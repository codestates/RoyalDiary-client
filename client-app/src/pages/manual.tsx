import React, { ReactElement } from "react";
import styled from "styled-components";
import Cmanual from "../components/manual";
import logoImg from "../assets/images/royalschool.png";

export default function Manual(): ReactElement {
	const Today = () => {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		return `${year}년 ${month}월 ${day}일`;
	};

	return (
		<Main>
			<Header>
				<Logo>
					<img src={logoImg} alt="" />
				</Logo>
				<Title>가정통신문</Title>
				<Contactinfo>
					<div>교무실: 02-XXX-XXXX</div>
					<div>행정실: 02-XXX-XXXX</div>
					<div>팩스: 02-XXX-XXXX</div>
				</Contactinfo>
			</Header>
			<Notification>
				<Ntitle>제목: 로얄 그림 일기장 사용 방법 공지</Ntitle>
				<Ncontent>
					안녕하십니까? <br />
					사랑하는 로얄 스쿨 입학생 여러분. 로얄 스쿨에 온 것을 진심으로 환영합니다.
					<br />
					로얄 그림 일기장은 옛 감성의 그림 일기로, 매일의 소중한 기억을 그림과 글로 기억하고자 탄생되었습니다. <br />
					자신의 일기를 친구들과 공유할 수 있으며 서로의 일기에 선생님의 한 마디 같은 댓글과 선생님이 찍어주시던 <br />
					스탬프로 소통할 수 있습니다. 스탬프를 받고, 또 친구들에게 스탬프를 찍어주며 응원해주세요! 💯
				</Ncontent>
			</Notification>
			<Cmanual />
			<Footer>
				<Fdate>{Today()}</Fdate>
				<Fprincipal>로얄 국민학교장 </Fprincipal>
			</Footer>
		</Main>
	);
}
const Main = styled.div`
	background: white;
	border: 5px solid black;
	width: 50%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
	}
	@media only screen and (max-width: 480px) {
		letter-spacing: 0.7rem;
		min-width: 400px;
		height: 70%;
	}
`;
const Header = styled.div`
	// border: 5px solid black;
	height: 12%;
	display: flex;
	flex-direction: row;
	padding-bottom: -1rem;
`;
const Logo = styled.div`
	/* border: 3px solid red; */
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10%;
	height: 90%;
	img {
		width: 80%;
		height: 80%;
		@media only screen and (max-width: 480px) {
			width: 80%;
			height: 90%;
		}
	}
	@media only screen and (max-width: 480px) {
		width: 10%;
		height: 90%;
	}
`;
const Title = styled.div`
	border-left: 3px solid black;
	border-right: 3px solid black;
	width: 60%;
	padding-left: 1rem;
	margin: -0.1rem;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	font-size: 2.5rem;
	font-weight: bold;
	letter-spacing: 1.7rem;
	display: flex;
	@media only screen and (max-width: 630px) {
		/* width: 23rem; */
		font-size: 2.2rem;
	}
	@media only screen and (max-width: 480px) {
		letter-spacing: 0.7rem;
		width: 80%;
	}
`;
const Contactinfo = styled.div`
	/* border-left: 3px solid black; */
	flex-grow: 2;
	padding-left: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 0.8rem;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Notification = styled.div`
	/* border: 3px solid red; */
	display: flex;
	flex-direction: column;
	flex-grow: 0.1;
`;
const Ntitle = styled.div`
	border: 3px solid black;
	text-align: center;
	letter-spacing: 0.3rem;
	margin-left: -0.2rem;
	margin-right: -0.3rem;
	font-size: 1.2rem;
	flex-grow: 0.5;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Ncontent = styled.div`
	border-bottom: 3px solid black;
	flex-grow: 0.2;
	padding-top: 0.5rem;
	padding-left: 1rem;
	margin-left: -0.1rem;
	margin-right: -0.2rem;
	font-size: 1rem;
	line-height: 1.4rem;
	@media only screen and (max-width: 630px) {
		/* width: 23rem; */
		font-size: 0.8rem;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Footer = styled.div`
	border-top: 3px solid black;
	margin: 0rem -0.1rem;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		height: 5rem;
	}
`;
const Fdate = styled.div`
	// border: 5px solid red;
	letter-spacing: 0.3rem;
	font-weight: bold;
	font-size: 1rem;
`;
const Fprincipal = styled.div`
	// border: 5px solid red;
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 1rem;
`;
