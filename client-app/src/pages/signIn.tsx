import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import MainNav from "../components/mainNav";
import Signin from "../components/signin";
import childrenImg from "../assets/images/children.png";
import titleImg from "../assets/images/title.png";
// import SSignin from "../components/socialSignin";

export default function SignIn(): ReactElement {
	return (
		<Main>
			<Purple />
			<RedWhite>
				<Red>
					<TitleImg className="title_image" src={titleImg} alt="" />
				</Red>
				<ImageNav>
					<Image>
						<MainImg className="children_image" src={childrenImg} alt="" />
					</Image>
					<MainNav color="" />
				</ImageNav>
				<Signin />
			</RedWhite>
		</Main>
	);
}
const Main = styled.div`
	// border: 10px solid #8f4f4f;
	width: 50%;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
	}
	@media only screen and (max-width: 770px) {
		width: 80%;
		height: 100%;
	}
	@media only screen and (max-width: 480px) {
		width: 80%;
		height: 70%;
	}
`;
const Purple = styled.div`
	// border: 10px solid purple;
	background: rgb(73, 65, 126);
	width: 12%;
`;
const RedWhite = styled.div`
	// border: 5px solid black;
	background: white;
	width: 80%;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		width: 90%;
	}
`;
const Red = styled.div`
	/* border: 10px solid green; */
	flex-grow: 0.6;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	font-size: 1.5rem;
	background: #eb6262;
	@media only screen and (max-width: 480px) {
		/* width: 110%; */
	}
`;
const ImageNav = styled.div`
	/* border: 3px solid red; */
	flex-grow: 3;
	display: flex;
	padding-left: 2rem;
`;
const Image = styled.div`
	/* border: 10px solid black; */
	flex-grow: 4;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MainImg = styled.img`
	border: 1px solid black;
	width: 80%;
	height: 70%;
	@media only screen and (max-width: 480px) {
		width: 120%;
		height: 80%;
	}
`;
const TitleImg = styled.img`
	/* border: 1px solid blue; */
	width: 420rem;
	@media only screen and (max-width: 480px) {
		/* margin-left: 4rem; */
		width: 100%;
	}
`;
