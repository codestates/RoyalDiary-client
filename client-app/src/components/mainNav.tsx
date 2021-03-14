import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface isLoginProps {
	isSignin: boolean;
}

export default function Mainnav(props: isLoginProps): ReactElement {
	const { isSignin } = props;
	const history = useHistory();
	const [userNav, displayNav] = useState(false);
	const colorType = {
		color1: "#c2aeae",
		color2: "#c0ca82",
		color3: "#75adcc",
		color4: "#be57a7",
		color5: "#ff5f5f",
		color6: "#c4c4c4",
		color7: "#e1ec9d",
		color8: "#5996f2",
		color9: "#df86e1",
		color10: "#e88383",
	};
	useEffect(() => {
		const isLoginSession = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		if (isLoginSession === true) {
			displayNav(isSignin);
		} else if (isLoginSession === false) {
			displayNav(isSignin);
		}
	}, [isSignin]);

	const intoDiary = () => {
		history.push("creatediary");
		window.location.reload(); // 일기 수정으로 남아있던 데이터 삭제
	};
	return (
		<Main>
			<Navsole>
				<Navin color={colorType.color1} />
				<Navout color={colorType.color6} onClick={intoDiary}>
					일기쓰기
				</Navout>
			</Navsole>
			{userNav ? (
				<Navsole className="userMenu">
					<Navin color={colorType.color2} />
					<Navout color={colorType.color7} onClick={() => history.push("/diaryview")}>
						나의일기
					</Navout>
				</Navsole>
			) : null}
			<Navsole>
				<Navin color={colorType.color3} />
				<Navout color={colorType.color8} onClick={() => history.push("/diarypublic")}>
					훔쳐보기
				</Navout>
			</Navsole>
			{userNav ? (
				<Navsole className="userMenu" theme={userNav}>
					<Navin color={colorType.color4} />
					<Navout color={colorType.color9} onClick={() => history.push("/userinfo/calendar")}>
						나의정보
					</Navout>
				</Navsole>
			) : null}

			<Navsole>
				<Navin color={colorType.color5} />
				<Navout
					color={colorType.color10}
					onClick={() => {
						history.push("/developer");
					}}
				>
					제작자
				</Navout>
			</Navsole>
		</Main>
	);
}
const Main = styled.div`
	/* border: 3px solid red; */
	width: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 5rem;
`;
const Navsole = styled.div`
	position: relative;
	top: 1rem;
	right: -2rem;
	width: 7rem;
	margin: 0.2rem 0rem;
	display: flex;
	font-weight: bold;
	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 480px) {
		top: 1rem;
		right: 0rem;
	}
`;
const Navin = styled.div`
	// border: 1px solid black;
	width: 2rem;
	background: ${(props) => props.color};
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Navout = styled.div`
	// border: 1px solid blue;
	width: 5rem;
	background: ${(props) => props.color};
	@media only screen and (max-width: 480px) {
		width: 4rem;
	}
`;
