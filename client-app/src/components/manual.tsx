import React, { ReactElement } from "react";
import styled from "styled-components";
import manual from "../assets/images/manual.gif";

export default function Cmanual(): ReactElement {
	return (
		<Main>
			<ManualBox>
				<img src={manual} alt="" />
			</ManualBox>
			<ExplainBox>
				그림 일기 쓰는 순서 <br />
				1. 오늘의 날씨를 선택합니다.
				<br /> 2. 자유롭게 그림을 그립니다. 붓의 색상과 굵기를 조절할 수 있습니다. <br />
				3. 그림을 다 그렸다면, 그림완료버튼을 클릭하세요. <br />
				4. 글쓰기 페이지에서 제목과 글을 작성합니다. <br />
				5. 오늘의 기분을 클릭합니다. <br />
				6. 친구들에게 공개를 원한다면 공개버튼을 클릭해주세요.
				<br /> 7. 자 이제, 등록버튼을 클릭해 그림일기를 제출하세요:)
			</ExplainBox>
			<div id="hidden"> 날씨, 그림, 제목, 내용, 기분, 마지막으로 공개여부까지 선택하면 작성완료!</div>
		</Main>
	);
}
const Main = styled.div`
	/* border: 3px solid blue; */
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	div#hidden {
		display: none;
	}
	@media only screen and (max-width: 480px) {
		justify-content: flex-start;
		padding-top: 1rem;
		div#hidden {
			display: flex;
			width: 22rem;
			height: 2rem;
			line-height: 1.5rem;
		}
	}
`;
const ManualBox = styled.div`
	/* border: 3px solid red; */
	width: 30rem;
	height: 55%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		@media only screen and (max-width: 480px) {
			height: 90%;
		}
	}
	@media only screen and (max-width: 630px) {
		width: 23rem;
	}
	@media only screen and (max-width: 480px) {
		height: 70%;
	}
`;
const ExplainBox = styled.div`
	/* border: 3px solid red; */
	width: 30rem;
	height: 40%;
	/* font-size: 1vw; */
	line-height: 1.4rem;
	@media only screen and (max-width: 630px) {
		width: 23rem;
		font-size: 0.8rem;
	}
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
