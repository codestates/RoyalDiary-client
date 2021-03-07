import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Comment from "../components/comment";
import picture from "../assets/images/drawing.png";
import section from "../assets/images/paper.png";
import cloudy from "../assets/images/weather/1.png";
import sunny from "../assets/images/weather/2.png";
import rainy from "../assets/images/weather/3.png";
import snowy from "../assets/images/weather/4.png";
import windy from "../assets/images/weather/5.png";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6rmA6rmA6rmAIiwibmlja25hbWUiOiLsnqDrp4zrs7QiLCJlbWFpbCI6Inp6ekBnbWFpbC5jb20iLCJtb2JpbGUiOiIwMTAxMDEwMTAxIiwiaWF0IjoxNjE1MDMwNDg1LCJleHAiOjE2MTUxMTY4ODV9.0MnDWfoOk4YeimMsXnotKJtSExgWy0IdIhlFNBBPyHA";

axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiaryContent(props: any): ReactElement {
	const { diary } = props;


	return (
		<Main>
			<Title>제목: {diary.title}</Title>
			<Type>
				<Date>
					<Option>날짜</Option>
					<OptionContent>{diary.createdAt}</OptionContent>
					<Option>날씨</Option>
				</Date>
				<Img />
				<ContentBacground>
					<Content>{diary.content}</Content>
				</ContentBacground>
			</Type>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	height: 80%;
	margin-bottom: 0px;
	flex-direction: column;
`;
const Title = styled.div`
	border: 0.2em solid black;
	border-radius: 0.5rem;
	flex-grow: 0.4;
	margin-top: 4%;
	margin-left: 7.5%;
	width: 85%;
	display: flex;
	align-items: center;
	font-size: 1.2rem;
`;

const Date = styled.div`
	border: 0.15em solid black;
	display: flex;
	margin-top: -2%;
	margin-left: -1%;
`;

const Option = styled.span`
	border-right: 2px solid black;
	font-size: 1rem;
	width: 10%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const OptionContent = styled.span`
	font-size: 1rem;
	border-right: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;
`;

const Type = styled.div`
	border: 3px solid black;
	margin-top: 2%;
	margin-left: 8%;
	border-radius: 1rem;
	flex-grow: 10;
	padding-top: 1rem;
	padding-left: 1rem;
	display: flex;
	flex-direction: column;
	width: 82%;
	height: 92%;

	//	height: 80%;
`;

const Img = styled.img.attrs({
	src: picture,
})`
	width: 100%;
	height: 50%;
	margin: 0.2rem -0.5rem;
	border: 0.15rem solid black;
	box-sizing: border-box;
`;
const ContentBacground = styled.div`
	background-size: cover;
	background: url(${section});
	margin-left: -0.7%;
	overflow: scroll;
	width: 100.5%;
	box-sizing: border-box;
	border: 0.2rem solid black;

	//border: 0.15rem solid black;
`;

const Content = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");
	font-family: "Nanum Brush Script", cursive;
	text-transform: uppercase;
	overflow: scroll;
	font-size: 2rem;
	margin-left: 0.8rem;
	letter-spacing: 1.3rem;
	word-spacing: 1.2rem;
	line-height: 2.5rem;
	width: 105%;
`;

const Weather1 = styled.img.attrs({
	src: cloudy,
	sunny,
	rainy,
	snowy,
	windy,
})`
	width: 2rem;
	height: 1rem;
`;
