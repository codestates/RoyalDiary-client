import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import Signin from "../components/signin";
import Mainnav from "../components/mainNav";
import childrenImg from "../assets/images/children.png";
import titleImg from "../assets/images/title.png";

export default function SignIn(): ReactElement {
	const Main = styled.div`
		background: smokewhite;
		// border: 10px solid black;
		margin-right: 50px;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		max-width: 55rem;
	`;
	const Purple = styled.div`
		// border: 10px solid purple;
		background: rgb(73, 65, 126);
		width: 5rem;
	`;
	const RedWhite = styled.div`
		// border: 1px solid black;
		width: 100%;
		display: flex;
		// flex-direction: column;
		flex-wrap: wrap;
	`;
	const Red = styled.div`
		// border-right: 1px solid red;
		height: 25%;
		width: 75%;
		padding-left: 100px;
		align-items: center;
		font-size: 1.5em;
		background: #eb6262;
	`;
	const Imgnav = styled.div`
		// border: 10px solid blue;
		display: flex;
		width: 100%;
	`;
	const Image = styled.div`
		// border: 10px solid black;
		height: 90%;
		width: 75%;
		margin: 1rem 1rem 1rem 3rem;
		padding: auto 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
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
				<Imgnav>
					<Image>
						<div style={imageStyle}>
							<img className="children_image" src={childrenImg} width="100%" height="100%" alt="" />
						</div>
					</Image>
					<Mainnav color="#000000" />
				</Imgnav>
				<Signin />
			</RedWhite>
		</Main>
	);
}
