import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bookImg from "./assets/images/loadingImg.gif";
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
	Developer,
} from "./pages/index";

declare global {
	interface Window {
		Kakao: any;
	}
}
function App(): ReactElement {
	const [isSignin, setSignin] = useState(false);
	const [weatherData, setWeatherData] = useState("");
	const [contentInfo, setContentInfo] = useState(0);
	const [imageUrl, setImgUrl] = useState("");
	const [imageData, setImgData] = useState("");
	const [pContent, setPcontent] = useState(0);
	const [diaryInfo, setDiaryInfo] = useState([]);
	const [content, setContent] = useState([]);
	// const [loadImg, setLoadingImg] = useState(false);

	const setContentId = (e: any) => {
		setContent(e);
	};
	const diaryCollect = (e: any) => {
		setDiaryInfo(e);
	};
	const contentPicker = (e: number) => {
		setPcontent(e);
	};
	const changeSignin = (e: boolean) => {
		setSignin(e);
	};
	const changeWeather = (e: string) => {
		setWeatherData(e);
	};
	const changeImgUrl = (e: string) => {
		setImgUrl(e);
	};
	const changeImgData = (e: string) => {
		setImgData(e);
	};
	const conveyContent = (e: any) => {
		setContentInfo(e);
	};

	const isLogin = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
	useEffect(() => {
		if (isLogin === true) {
			changeSignin(true);
		} else {
			changeSignin(false);
		}
		const loadImg = document.getElementById("loading");
		const loadVisible = sessionStorage.getItem("loadingImg");
		if (loadImg !== null && loadVisible === "visible") {
			loadImg.style.display = "flex";
			setTimeout(() => {
				loadImg.style.display = "none";
			}, 2900);
			sessionStorage.removeItem("loadingImg");
		}
	}, [isLogin]);
	return (
		<Router>
			<LoadingBox id="loading">
				<LoadingImg src={bookImg} alt="Loading Img" />
			</LoadingBox>
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
						<Paint
							changeWeather={changeWeather}
							changeImgUrl={changeImgUrl}
							changeImgData={changeImgData}
							contentInfo={contentInfo}
						/>
						<Diary weatherData={weatherData} imageUrl={imageUrl} imageData={imageData} contentInfo={contentInfo} />
					</Route>
					<Route exact path="/diaryview">
						<DiariesView contentPicker={contentPicker} diaryCollect={diaryCollect} />
						<DiaryView contentId={pContent} data={diaryInfo} conveyContent={conveyContent} />
					</Route>
					<Route exact path="/diarypublic">
						<DiariesViewPublic contentPicker={contentPicker} diaryCollect={diaryCollect} />
						<DiaryViewPublic contentId={pContent} data={diaryInfo} conveyContent={conveyContent} />
					</Route>
					<Route exact path="/userinfo/calendar">
						<Calendar content={content} />
						<UserInfo setContentId={setContentId} content={content} />
					</Route>
					<Route path="/userinfo/calendarrows">
						<CalendarRows />
						<UserInfo />
					</Route>
					<Route path="/developer">
						<Developer />
					</Route>
				</Switch>
			</Main>
		</Router>
	);
}
const Main = styled.div`
	/* border: 10px solid blue; */
	position: relative;
	height: 88vh;
	width: 80.4vw;
	margin: 2.5rem auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`;
const LoadingBox = styled.div`
	/* border: 5px solid purple; */
	position: absolute;
	background-color: rgba(240, 240, 240, 0.5);
	top: 0rem;
	width: 100%;
	height: 100%;
	display: none;
	justify-content: center;
	align-items: center;
	z-index: 99;
	pointer-events: stroke;
	@media only screen and (max-width: 1200px) {
		height: 110rem;
	}
	@media only screen and (max-width: 480px) {
		height: 77.5rem;
	}
`;
const LoadingImg = styled.img`
	width: 25rem;
	height: 20rem;
	margin-bottom: 5rem;
`;

export default App;
