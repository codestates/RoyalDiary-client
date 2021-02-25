import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import { relative } from "path";
import Signin from "../components/signin";
import childrenImg from "../assets/images/children.png";
import titleImg from "../assets/images/title.png";
// import SSignin from "../components/socialSignin";

export default function SignIn(): ReactElement {
	const Main = styled.div`
		background: smokewhite;
		// border: 10px solid black;
		//margin-right: 4rem;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		max-width: 50rem;
	`;
	const Purple = styled.div`
		// border: 10px solid purple;
		background: rgb(73, 65, 126);
		width: 6rem;
	`;
	const RedWhite = styled.div`
		// border: 5px solid black;
		width: 41rem;
		display: flex;
		flex-direction: column;
	`;
	const Red = styled.div`
		// border: 10px solid green;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		font-size: 1.5rem;
		background: #eb6262;
	`;
	const Image = styled.div`
		// border: 10px solid black;
		flex-grow: 4;
		// margin: 1rem 3rem 1rem 4.5rem;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const imageStyle = {
		border: "1px solid black",
		display: "flex",
		justifyContent: "center",
	};

	return (
		<Main>
			<Purple />
			<RedWhite>
				<Red>
					<img className="title_image" src={titleImg} width="420rem" height="auto" alt="" />
				</Red>
				<Image>
					<div style={imageStyle}>
						<img className="children_image" src={childrenImg} width="400rem" height="auto" alt="" />
					</div>
				</Image>
				<Signin />
			</RedWhite>
		</Main>
	);
}
