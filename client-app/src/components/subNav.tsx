import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function SubNav(): ReactElement {
	const [userNav, setUserNav] = useState(false);
	useEffect(() => {
		// sessionStorage.setItem("isLogin", JSON.stringify(true));
		const isLogin = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		// const isLogin = false;
		if (isLogin === true) {
			setUserNav(true);
		} else {
			console.log(isLogin);
			setUserNav(false);
			console.log("not logined!");
		}
	}, []);
	return (
		<Main>
			{/* <Dropdown className="dropdown"> */}
			<Dropbtn className="fas fa-book-open">
				<Contents className="dropdown-content">
					<Content href="/">홈</Content>
					<Content href="/creatediary">일기쓰기</Content>
					<Content className="usernav" theme={userNav} href="/diaryview">
						일기보기
					</Content>
					<Content href="/diarypublic">훔쳐보기</Content>
					<Content className="usernav" theme={userNav} href="/userinfo/calendar">
						나의정보
					</Content>
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
	a.usernav {
		display: ${(props) => (props.theme === true ? "block" : "none")};
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
