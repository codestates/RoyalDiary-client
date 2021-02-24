import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import cloudy from "../assets/images/weather/1.png";
import sunny from "../assets/images/weather/2.png";
import rainy from "../assets/images/weather/3.png";
import snowy from "../assets/images/weather/4.png";
import windy from "../assets/images/weather/5.png";

export default function Diaryinfo(): ReactElement {
	const Main = styled.div`
		// border: 5px solid black;
		flex-grow: 0.3;
		display: flex;
	`;
	const DateWeather = styled.div`
		// border: 3px solid black;
		flex-grow: 1;
		max-width: 220rem;
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
	`;
	const Weather = styled.div`
		border-bottom: 3px solid black;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const Image = styled.div`
		margin-right: 1rem;
	`;

	const Userinfo = styled.div`
		border-left: 3px solid black;
		border-bottom: 3px solid black;
		flex-grow: 1;
		text-align: left;
		padding-top: 2rem;
		padding-left: 1rem;
		font-size: 1.1rem;
	`;

	const Today = () => {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		const week = ["일", "월", "화", "수", "목", "금", "토"];
		const dayOfWeek = week[new Date(`${year}-${month}-${day}`).getDay()];
		return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
	};

	return (
		<Main>
			<DateWeather>
				<Todaydate>{Today()}</Todaydate>
				<Weather>
					<Image>
						<img src={cloudy} alt="" width="60rem" height="60rem" />
					</Image>
					<Image>
						<img src={sunny} alt="" width="60rem" height="60rem" />
					</Image>
					<Image>
						<img src={rainy} alt="" width="60rem" height="60rem" />
					</Image>
					<Image>
						<img src={snowy} alt="" width="60rem" height="60rem" />
					</Image>
					<Image>
						<img src={windy} alt="" width="60rem" height="60rem" />
					</Image>
				</Weather>
			</DateWeather>
			<Userinfo>
				1학년 12반 <br />
				이름: (유저이름)
			</Userinfo>
		</Main>
	);
}
