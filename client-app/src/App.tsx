import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
	});
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
// 아래 스타일을 적용한 컴포넌트를 만들어준다.

const Main = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	//box-sizing: border-box;
	/* border: 10px solid blue; */
	margin: 2.5rem auto;
	height: 88vh;
	width: 80.4vw;
`;

export default App;
