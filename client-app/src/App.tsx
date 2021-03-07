import React, { useState, useEffect, ReactElement } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import {
	Manual,
	SignIn,
	Paint,
	Diary,
	Application,
	DiariesView,
	DiaryView,
	DiariesViewPublic,
	DiaryViewPublic,
	Calendar,
	CalendarRows,
	UserInfo,
} from "./pages/index";

function App(): ReactElement {
	const [isSignin, setSignin] = useState(false);
	const [weatherData, setWeatherData] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [imgData, setImgData] = useState("");

	const changeSignin = (e: boolean) => {
		console.log(e);
		setSignin(e);
	};
	const changeWeather = (e: string) => {
		// console.log(e);
		setWeatherData(e);
	};
	const changeImgUrl = (e: string) => {
		// console.log(e);
		setImgUrl(e);
	};
	const changeImgData = (e: string) => {
		// console.log(e);
		setImgData(e);
	};

	return (
		<Router>
			<Main>
				<Switch>
					<Route exact path="/">
						<Manual />
						<SignIn changeSignin={changeSignin} isSignin={isSignin} />
					</Route>
					<Route exact path="/signup">
						<Manual />
						<Application changeSignin={changeSignin} />
					</Route>
					<Route exact path="/creatediary">
						<Paint changeWeather={changeWeather} changeImgUrl={changeImgUrl} changeImgData={changeImgData} />
						<Diary weatherData={weatherData} imgUrl={imgUrl} imgData={imgData} />
					</Route>
					<Route exact path="/diaryview">
						<DiariesView />
						<DiaryView />
					</Route>
					<Route exact path="/diarypublic">
						<DiariesViewPublic />
						<DiaryViewPublic />
					</Route>
					<Route exact path="/userinfo/calendar">
						<Calendar />
						<UserInfo />
					</Route>
					<Route path="/userinfo/calendarrows">
						<CalendarRows />
						<UserInfo />
					</Route>
				</Switch>
			</Main>
		</Router>
	);
}
// 아래 스타일을 적용한 컴포넌트를 만들어준다.

const Main = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
	//box-sizing: border-box;
	/* border: 10px solid blue; */
	margin: 2.5rem auto;
	height: 88vh;
	width: 80.4vw;
`;

export default App;
