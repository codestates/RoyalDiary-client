import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Cloudy from "../assets/images/weather/1.png";
import Sunny from "../assets/images/weather/2.png";
import Rainy from "../assets/images/weather/3.png";
import Snowy from "../assets/images/weather/4.png";
import Windy from "../assets/images/weather/5.png";
import Happy from "../assets/images/emotions/1.png";
import Smile from "../assets/images/emotions/2.png";
import Soso from "../assets/images/emotions/3.png";
import Annoyed from "../assets/images/emotions/4.png";
import Sad from "../assets/images/emotions/5.png";

export default function DiaryContent(props: any): ReactElement {
	const { diary } = props;
	return (
		<Main>
			{diary ? (
				<>
					<Title>제목: {diary.title}</Title>
					<Type>
						<Date>
							<Option>날짜</Option>
							<OptionContent>{diary.createdAt}</OptionContent>
							<Option>날씨</Option>
							<OptionContent>
								<Img
									src={
										/* eslint-disable-next-line */
										diary.weather === "cloudy"
											? Cloudy
											: /* eslint-disable-next-line */
											diary.weather === "snowy"
											? Snowy
											: /* eslint-disable-next-line */
											diary.weather === "sunny"
											? Sunny
											: /* eslint-disable-next-line */
											diary.weather === "rainy"
											? Rainy
											: diary.weather === "windy"
											? Windy
											: ""
									}
									alt=""
								/>
							</OptionContent>
							<Option>기분</Option>
							<OptionContent2>
								<Img
									src={
										/* eslint-disable-next-line */
										diary.emotion === "happy"
											? Happy
											: /* eslint-disable-next-line */
											diary.emotion === "smile"
											? Smile
											: /* eslint-disable-next-line */
											diary.emotion === "soso"
											? Soso
											: /* eslint-disable-next-line */
											diary.emotion === "annoyed"
											? Annoyed
											: diary.emotion === "sad"
											? Sad
											: ""
									}
									alt=""
								/>
							</OptionContent2>
						</Date>

						<img
							src={diary.imgUrl}
							width="100%"
							height="50%"
							alt=""
							style={{ background: "white", borderTop: "0.15rem solid black", borderBottom: "0.15rem solid black" }}
						/>

						<Content>
							<div>{diary.content}</div>
						</Content>
					</Type>
				</>
			) : (
				""
			)}
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	height: 80%;
	margin-top: 6%;
	flex-direction: column;
`;
const Title = styled.div`
	border: 0.2em solid black;
	border-radius: 0.5rem;
	flex-grow: 0.4;
	margin-top: 4%;
	margin-left: 5.5%;
	padding-left: 1rem;
	width: 79%;
	height: 5%;
	display: flex;
	align-items: center;
	font-size: 1.2rem;

	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Date = styled.div`
	display: flex;
	height: 10%;
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
	font-size: 1.2rem;
	border-right: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 23%;

	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const OptionContent2 = styled.span`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4rem;

	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Type = styled.div`
	border: 3px solid black;
	margin-top: 2%;
	margin-left: 5.5%;
	border-radius: 1rem;
	flex-grow: 10;
	display: flex;
	flex-direction: column;
	width: 82%;
	height: 92%;
`;

const ContentBacground = styled.div`
	background: white;
	margin-left: -0.7%;
	overflow: scroll;
	width: 100.5%;
	box-sizing: border-box;
	border: 0.2rem solid black;
	height: 100%;

	//border: 0.15rem solid black;
`;

const Content = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap");
	font-family: "Nanum Brush Script", cursive;
	text-transform: uppercase;
	overflow: scroll;
	font-size: 1.8rem;
	letter-spacing: 0.8rem;
	/* word-spacing: 1rem; */
	line-height: 2.5rem;
	border-radius: 1rem;
	height: 100%;
	padding: 1.5rem;
	//border: 0.15rem solid black;
	background: #f1efef;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;

const Img = styled.img`
	width: 3rem;
`;
