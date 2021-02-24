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
	return (
		<>
			<Router>
				<Main>
					<Switch>
						<Route exact path="/">
							<Manual />
							<SignIn />
						</Route>
						<Route exact path="/signup">
							<Manual />
							<Application />
						</Route>
						<Route exact path="/creatediary">
							<Paint />
							<Diary />
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
					{/* </Container> */}
				</Main>
			</Router>
		</>
	);
}
// 아래 스타일을 적용한 컴포넌트를 만들어준다.
const Main = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	// border: 10px solid blue;
	height: 60rem;
	max-width: 1800px;
	// max-height: 4000px;
`;

export default App;
