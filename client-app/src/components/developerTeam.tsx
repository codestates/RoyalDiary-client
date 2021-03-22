import React, { ReactElement } from "react";
import styled from "styled-components";
import song from "../assets/images/developers/song.jpg";
import kim from "../assets/images/developers/kim.jpg";
import lee from "../assets/images/developers/lee.jpg";
import sin from "../assets/images/developers/sin.jpg";

export default function DeveloperTeam(): ReactElement {
	return (
		<Main>
			<Body>
				<Paintbox>
					<Paint>
						<MemberBox>
							<EmojiImg src={song} />
							<IntroMember>
								<b>팀장 송정현</b>
								<br />
								프론트엔드 개발
								<br />: 나의일기, 훔쳐보기, 댓글페이지, 마이페이지 디자인 및 로직 구현
							</IntroMember>
						</MemberBox>
						<MemberBox>
							<EmojiImg src={kim} />
							<IntroMember>
								<b>멤버 김용재</b>
								<br />
								프론트엔드 개발
								<br />: 로그인, 회원가입, 일기쓰기, 제작자 페이지 디자인 및 로직 구현
							</IntroMember>
						</MemberBox>
						<MemberBox>
							<EmojiImg src={lee} />
							<IntroMember>
								<b>멤버 이태경</b>
								<br />
								백엔드 개발
								<br />: 로그인, 회원가입, 마이페이지 API 구현, DB구축, 배포 담당
							</IntroMember>
						</MemberBox>
						<MemberBox>
							<EmojiImg src={sin} />
							<IntroMember>
								<b>멤버 신예담</b>
								<br />
								백엔드 개발
								<br />: 일기쓰기, 훔쳐보기, 나의일기, 댓글페이지 API 구현
							</IntroMember>
						</MemberBox>
					</Paint>
				</Paintbox>
				<TitleContent>
					<Title>프로젝트: Royal Diary - 그림일기 웹 서비스</Title>
					<Content>
						우리들의 추억속으로 여러분을 초대합니다.
						<br />
						신나는 여름방학 늘 함께한 추억의 그림일기장! <br />
						매일 그림 그리고, 일기를 쓰며 마음 건강을 챙기세요.
						<br />
						원하는 그림일기 내용을 가족, 친구, 사람들과 공유하여 작은 위로를 받을 수도 있어요.
						<br />
						우리들의 소중한 일상을 그림 일기에 채워나가세요 :)
					</Content>
				</TitleContent>
			</Body>
		</Main>
	);
}
const Main = styled.div`
	/* border: 3px solid red; */
	background: #f6f6ee;
	padding-top: 1rem;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	flex-direction: column;
`;
const Body = styled.div`
	/* border: 3px solid red; */
	display: flex;
	flex-direction: column;
	flex-grow: 2;
`;
const Paintbox = styled.div`
	/* border: 5px solid black; */
	display: flex;
	flex-direction: column;
	height: 60%;
	@media only screen and (max-width: 1100px) {
		height: 70%;
		flex-direction: column;
	}
	@media only screen and (max-width: 480px) {
		height: 21.1rem;
	}
`;
const Paint = styled.div`
	border: 3px solid black;
	margin: auto;
	width: 90%;
	height: 100%;
	background-color: white;
	display: flex;
	@media only screen and (max-width: 1100px) {
		flex-grow: 0.3;
		flex-direction: column;
	}
	@media only screen and (max-width: 520px) {
		flex-grow: 1;
	}
	@media only screen and (max-width: 480px) {
		height: 200%;
	}
`;
const MemberBox = styled.div`
	/* border: 3px solid red; */
	width: 95%;
	padding-left: 0.5rem;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 1100px) {
		flex-direction: row;
	}
`;
const EmojiImg = styled.img`
	/* border: 3px solid blue; */
	width: 100%;
	@media only screen and (max-width: 1100px) {
		width: 12%;
	}
	@media only screen and (max-width: 520px) {
		width: 20%;
	}
`;
const IntroMember = styled.div`
	/* border: 3px solid green; */
	height: 40%;
	padding-left: 0.2rem;
`;
const TitleContent = styled.div`
	/* border: 3px solid yellow; */
	flex-grow: 1;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Title = styled.div`
	/* border: 3px solid red; */
	margin: 0rem 3rem;
	font-size: 1.2rem;
	font-weight: bold;
	letter-spacing: 0.2rem;
	@media only screen and (max-width: 570px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Content = styled.div`
	/* border: 1px solid black; */
	margin: 0rem 3rem;
	padding-top: 0.7rem;
	line-height: 2rem;
	font-size: 1.1rem;
	display: flex;
	height: 12rem;
	@media only screen and (max-width: 570px) {
		font-size: 0.9rem;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
