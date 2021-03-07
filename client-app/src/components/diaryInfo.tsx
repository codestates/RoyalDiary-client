import React, { ReactElement, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import cloudy from "../assets/images/weather/1.png";
import sunny from "../assets/images/weather/2.png";
import rainy from "../assets/images/weather/3.png";
import snowy from "../assets/images/weather/4.png";
import windy from "../assets/images/weather/5.png";

interface setWeatherProps {
	conveyWeather: any;
}

export default function Diaryinfo(props: setWeatherProps): ReactElement {
	const { conveyWeather } = props;
	const [userNick, setUserNick] = useState("손님");
	const [weather, setWeatherToday] = useState("");
	const Today = () => {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		const week = ["일", "월", "화", "수", "목", "금", "토"];
		const dayOfWeek = week[new Date(`${year}-${month}-${day}`).getDay()];
		return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
	};

	const setWeather = (e: any) => {
		// sessionStorage.setItem("weather", e.target.id); // 다이어리 페이지 완료 버튼 눌렀을때 사용
		// console.log(sessionStorage.getItem("weather"));
		// setWeatherToday(e.target.id);
		// console.log(e.target.id);
		const weathernow = e.target.id;
		conveyWeather(weathernow);
	};
	useEffect(() => {
		const getNick = sessionStorage.getItem("nickName") as string;
		if (getNick !== null) {
			setUserNick(getNick);
		}
	}, []);

	return (
		<Main>
			<DateWeather>
				<Todaydate>
					<div>{Today()}</div>
				</Todaydate>
				<Weather>
					<Image>
						<WeatherImg id="cloudy" src={cloudy} onClick={setWeather} />
					</Image>
					<Image>
						<WeatherImg id="sunny" src={sunny} onClick={setWeather} />
					</Image>
					<Image>
						<WeatherImg id="rainy" src={rainy} onClick={setWeather} />
					</Image>
					<Image>
						<WeatherImg id="snowy" src={snowy} onClick={setWeather} />
					</Image>
					<Image>
						<WeatherImg id="windy" src={windy} onClick={setWeather} />
					</Image>
				</Weather>
			</DateWeather>
			<Userinfo>
				1학년 12반 <br />
				이름: {userNick}
			</Userinfo>
		</Main>
	);
}

const Main = styled.div`
	/* border: 5px solid black; */
	flex-grow: 0.3;
	display: flex;
	@media only screen and (max-width: 480px) {
		height: 20%;
	}
`;
const DateWeather = styled.div`
	// border: 3px solid black;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
const Todaydate = styled.div`
	border-bottom: 3px solid black;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 0.5rem;

	@media (max-width: 480px) {
		font-size: 1rem;
		padding-left: 1rem;
		letter-spacing: 0.4rem;
	}
`;
const Weather = styled.div`
	border-bottom: 3px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 60%;
		margin-bottom: 0.5%;
	}
`;
const Image = styled.div`
	margin-right: 1rem;
	@media only screen and (max-width: 480px) {
		margin-right: 0rem;
	}
`;
const WeatherImg = styled.img`
	/* border: 3px solid black; */
	width: 3.5rem;
	alt: "";
	@media (max-width: 480px) {
		width: 2rem;
		margin: 0.1rem;
	}
`;
const Userinfo = styled.div`
	border-left: 3px solid black;
	border-bottom: 3px solid black;
	flex-grow: 1;
	padding-top: 2rem;
	padding-left: 1rem;
	font-size: 1.1rem;

	@media (max-width: 480px) {
		font-size: 0.9rem;
		padding: 0rem;
		width: 50%;
		height: 97%;
		display: flex;
		align-items: center;
	}
`;
