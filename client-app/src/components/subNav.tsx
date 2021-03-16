import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

export default function SubNav(): ReactElement {
	const [userNav, setUserNav] = useState(false);
	const movePage = (e: any) => {
		if (e.target.id === "createDiary") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/createDiary";
		} else if (e.target.id === "myDiary") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/diaryview";
		} else if (e.target.id === "publicDiary") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/diarypublic";
		} else if (e.target.id === "myInfo") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/userinfo/calendar";
		} else if (e.target.id === "developer") {
			sessionStorage.setItem("loadingImg", "visible");
			window.location.href = "/developer";
		}
	};
	useEffect(() => {
		// sessionStorage.setItem("isLogin", JSON.stringify(true));
		const isLogin = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		// const isLogin = false;
		if (isLogin === true) {
			setUserNav(true);
		} else {
			setUserNav(false);
		}
	}, []);

	return (
		<Main>
			{/* <Dropdown className="dropdown"> */}
			<Dropbtn className="fas fa-book-open">
				<Contents className="dropdown-content">
					<Content href="/">홈</Content>
					<Content id="createDiary" onClick={movePage}>
						일기쓰기
					</Content>
					{userNav ? (
						<Content className="usernav" id="myDiary" onClick={movePage}>
							나의일기
						</Content>
					) : null}
					<Content id="publicDiary" onClick={movePage}>
						훔쳐보기
					</Content>
					{userNav ? (
						<Content className="usernav" id="myInfo" onClick={movePage}>
							나의정보
						</Content>
					) : null}
				</Contents>
			</Dropbtn>
			{/* </Dropdown> */}
		</Main>
	);
}

const Main = styled.div`
	/* border: 3px solid red; */
	position: relative;
	top: 0%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Dropbtn = styled.i`
	/* background-color: yellow; */
	/* color: white; */
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	padding: 16px;
	font-size: 25px;
	border: none;
	:hover {
		.dropdown-content {
			display: block;
		}
	}
`;
const Contents = styled.div`
	/* border: 3px solid red; */
	display: none;
	position: absolute;
	right: 1rem;
	top: 3rem;
	background-color: #f1f1f1;
	min-width: 130px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	:hover {
		display: block;
	}
	animation: a 2s;
	@keyframes a {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 480px) {
		font-size: 15px;
		min-width: 120px;
	}
`;
const Content = styled.a`
	color: black;
	padding: 12px 16px;
	height: 1rem;
	font-size: 1.2rem;
	text-decoration: none;
	display: block;
	:hover {
		background-color: #ddd;
	}
`;
