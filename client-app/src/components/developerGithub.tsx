import React, { ReactElement } from "react";
import styled from "styled-components";
import codeStatesLogo from "../assets/images/codeStates_logo.png";

export default function DeveloperGithub(): ReactElement {
	return (
		<Main>
			<Body>
				<Paintbox>
					<Paint>
						<AddressInfo>
							<Position>프론트엔드</Position>
							<AddressSolo>
								송정현 <br />
								&nbsp; Github: <a href="https://github.com/atomsong9090">https://github.com/atomsong9090</a>
								<br />
								&nbsp; Blog:
							</AddressSolo>
							<AddressSolo>
								김용재
								<br />
								&nbsp; Github: <a href="https://github.com/JayKim88">https://github.com/JayKim88</a>
								<br />
								&nbsp; Blog: <a href="https://nomadkim880901.tistory.com/">https://nomadkim880901.tistory.com/</a>
							</AddressSolo>
							<Position>백엔드</Position>
							<AddressSolo>
								이태경
								<br />
								&nbsp; Github: <a href="https://github.com/dlfjsld1">https://github.com/dlfjsld1</a>
								<br />
								&nbsp; Blog: <a href="https://goanfvkdl.tistory.com/">https://goanfvkdl.tistory.com/</a>
							</AddressSolo>
							<AddressSolo>
								신예담
								<br />
								&nbsp; Github: <a href="https://github.com/faust7605">https://github.com/faust7605</a>
								<br />
								&nbsp; Blog:
							</AddressSolo>
						</AddressInfo>
						<LogoBox>
							<img src={codeStatesLogo} alt="" />
						</LogoBox>
					</Paint>
				</Paintbox>
				<TitleContent>
					<Title>여기에 준비된 주니어 개발자가 있습니다!</Title>
					<Content>
						코드스테이츠에서 지난 5개월동안 매일 12시간 이상 학습했습니다.
						<br />
						변수와 자료형에서 시작하여 고차함수와 재귀를 거쳐 기본기를 다졌습니다.
						<br />
						그리고 자료구조, 알고리즘, 리액트, 데이터베이스, 인증까지 심화 학습을 마쳤습니다.
						<br />
						지난 4주 동안, 저희의 노력과 열정을 담은 Final Project, Royal Diary 입니다.
						<br />
						저희의 깃허브와 블로그에 방문하여 숨은 진주를 발견하세요!
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
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;
const Body = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
`;
const Paintbox = styled.div`
	flex-grow: 2;
	display: flex;
	flex-direction: column;
`;
const Paint = styled.div`
	border: 3px solid black;
	margin: auto;
	width: 90%;
	flex-grow: 0.7;
	background-color: white;
	display: flex;
`;
const Position = styled.div`
	/* border: 3px solid red; */
	width: 90%;
	font-size: 1.2rem;
	font-weight: bold;
`;
const AddressInfo = styled.div`
	/* border: 3px solid blue; */
	width: 60%;
	padding-left: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media only screen and (max-width: 1400px) {
		width: 100%;
	}
`;
const AddressSolo = styled.div`
	/* border: 3px solid red; */
	width: 90%;
	padding-left: 0.5rem;
	line-height: 1.4rem;
`;
const LogoBox = styled.div`
	/* border: 3px solid red; */
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-right: 1rem;
	img {
		width: 80%;
	}
	@media only screen and (max-width: 1400px) {
		display: none;
	}
	@media only screen and (max-width: 1100px) {
		display: flex;
	}
	@media only screen and (max-width: 650px) {
		display: none;
	}
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
	@media only screen and (max-width: 1400px) {
		font-size: 1rem;
	}
	@media only screen and (max-width: 480px) {
		margin: 0rem 2rem;
	}
`;
const Content = styled.div`
	/* border: 1px solid black; */
	padding-top: 0.7rem;
	margin: 0rem 3rem;
	line-height: 2rem;
	font-size: 1.1rem;
	display: flex;
	@media only screen and (max-width: 1400px) {
		line-height: 1.5rem;
	}
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		margin: 0rem 1rem 0rem 1rem;
		display: none;
	}
`;
