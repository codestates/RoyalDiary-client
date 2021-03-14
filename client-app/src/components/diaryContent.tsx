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

							<img
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
								style={{ width: "8%", marginLeft: "3%", marginRight: "3%" }}
							/>

							<Option2>기분</Option2>
							{diary.emotion ? (
								<img
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
									style={{ width: "8%", marginLeft: "3%", marginRight: "3%" }}
								/>
							) : (
								""
							)}
						</Date>

						<img
							src={diary.imgUrl}
							width="99%"
							height="50%"
							alt=""
							style={{ background: "white", border: "0.15rem solid black" }}
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
	font-size: 1.5rem;
	border-right: 2px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 100%;
`;

const Option2 = styled.span`
	margin-left: 5%;
	border-left: 2px solid black;
	border-right: 2px solid black;
	font-size: 1rem;
	width: 10%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
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
	font-size: 2rem;
	letter-spacing: 1rem;
	word-spacing: 1rem;
	line-height: 2.5rem;
	width: 99%;
	height: 100%;
	border: 0.15rem solid black;
	background: #f1efef;
`;
