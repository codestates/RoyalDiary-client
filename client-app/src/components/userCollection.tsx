import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

const Main = styled.div`
	margin: 10%;
	width: 80%;
	height: 40%;
	border-top: 0.2rem solid black;
	border-bottom: 0.2rem solid black;
`;

const InfoBox = styled.div`
	//background: red;
	height: 3.5rem;
	border-bottom: 0.15rem solid black;
	display: flex;
`;

const ExchangeBox = styled.div`
	margin-top: 3%;
	border-bottom: 0.15rem solid black;
`;

const Exchange = styled.div`
	height: 3%;
	border-top: 0.15rem solid black;
	display: flex;
	font-size: 2.5rem;
	justify-content: space-around;
	align-items: center;
`;

const ExchangeTitle1 = styled.span`
	font-size: 80%;
	width: 33%;
	display: flex;
	border-right: 0.15rem solid black;
	justify-content: center;
`;

const ExchangeTitle2 = styled.span`
	font-size: 80%;
	width: 33%;
	display: flex;
	justify-content: center;
`;

const ExchangeLists = styled.div`
	height: 60%;
	border-bottom: 0.15rem solid black;
	display: flex;
	justify-content: space-around;
`;

const ExchangeListName = styled.span`
	font-size: 120%;
	width: 33.1%;
	border-right: 0.15rem solid black;
	display: flex;
	justify-content: center;
`;
const ExchangeListDate = styled.span`
	font-size: 120%;
	width: 33.1%;
	border-right: 0.15rem solid black;
	display: flex;
	justify-content: center;
`;
const ExchangeListContent = styled.span`
	font-size: 120%;
	width: 33.1%;
	display: flex;
	justify-content: center;
`;

const Option = styled.span`
	font-size: 130%;
	border-right: 0.15rem solid black;
	width: 13%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content1 = styled.span`
	font-size: 180%;
	border-right: 0.15rem solid black;
	width: 35%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content2 = styled.span`
	font-size: 130%;
	width: 35%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Collection = styled.div`
	height: 76%;
	display: flex;
`;

const CollectionTitle = styled.span`
	height: 88%;
	width: 13%;
	font-size: 2rem;
	border-right: 0.15rem solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	writing-mode: vertical-rl;
	text-orientation: upright;
`;

export default function User(): ReactElement {
	return (
		<Main>
			<InfoBox>
				<Option>성명</Option>
				<Content1>송정현</Content1>
				<Option>전자우편</Option>
				<Content2>sdfsf@naver.com</Content2>
			</InfoBox>
			<InfoBox>
				<Option>별명</Option>
				<Content1>면목동 꿀주먹</Content1>
				<Option>휴대전화</Option>
				<Content2>010-5488-5468</Content2>
			</InfoBox>
			<Collection>
				<CollectionTitle>콜렉숀</CollectionTitle>
			</Collection>
			<ExchangeBox>
				<Exchange>교환일기</Exchange>
				<Exchange>
					<ExchangeTitle1>별명</ExchangeTitle1>
					<ExchangeTitle1>날짜</ExchangeTitle1>
					<ExchangeTitle2>내용</ExchangeTitle2>
				</Exchange>
			</ExchangeBox>
			<ExchangeLists>
				<ExchangeListName>송정현</ExchangeListName>
				<ExchangeListDate>2021년 2월 21일</ExchangeListDate>
				<ExchangeListContent>햄버거를 먹은날.</ExchangeListContent>
			</ExchangeLists>
		</Main>
	);
}
