import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import Signin from "../components/signin";
import Nav from "../components/nav";
import childrenImg from "../assets/images/children.png";
import titleImg from "../assets/images/title.png";

export default function SignIn(): ReactElement {
	const Main = styled.div`
		background: smokewhite;
		border: 10px solid black;
		margin-right: 50px;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		max-width: 1000px;
	`;
	const Purple = styled.div`
		// border: 10px solid purple;
		background: rgb(73, 65, 126);
		width: 5rem;
	`;
	const RedWhite = styled.div`
		border: 10px solid red;
		width: 80%;
		display: flex;
		// flex-direction: column;
		flex-wrap: wrap;
	`;
	const Red = styled.div`
		height: 25%;
		width: 100%;
		padding-left: 100px;
		align-items: center;
		font-size: 1.5em;
		background: #eb6262;
	`;
	const Image = styled.div`
		// border: 10px solid black;
		margin: auto;
		padding: 10px auto;
		display: flex;
		height: 30%;
		justify-content: center;
		align-items: center;
	`;

	const imageStyle = {
		border: "1px solid black",
		padding: "0px 40px 10px 60px",
	};

	return (
		<Main>
			<Purple />
			<RedWhite>
				<Red>
					<img className="title_image" src={titleImg} width="80%" height="100%" alt="" />
				</Red>
				<Image>
					<div style={imageStyle}>
						<img className="children_image" src={childrenImg} width="100%" height="100%" alt="" />
					</div>
				</Image>
				<Signin />
			</RedWhite>
			<Nav />
		</Main>
	);
}
