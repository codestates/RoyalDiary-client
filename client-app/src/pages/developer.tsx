import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import laptop from "../assets/images/menuLogos/black-laptop.png";
import github from "../assets/images/menuLogos/github.png";
import mail from "../assets/images/menuLogos/mail.png";
import DeveloperTeam from "../components/developerTeam";
import DeveloperGithub from "../components/developerGithub";
import DeveloperMail from "../components/developerMail";

export default function Developer(): ReactElement {
	const history = useHistory();
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);
	const [currentPage, setCurrentPage] = useState("laptop");
	const changePage = (e: any) => {
		const selectedPage = e.target.id;
		setCurrentPage(selectedPage);
	};
	const submitMsg = () => {
		setMessage("마음만으로도 감사합니다😚");
		setMsgVisible(true);
		setTimeout(() => {
			setMsgVisible(false);
		}, 2000);
	};
	return (
		<EntirePage>
			<Main>
				<Header>
					<Team>About Team Summer Vacation😍</Team>
					<TeamIntro>
						<div>IM25 Final Project Team</div>
					</TeamIntro>
					<Menus>
						<Image>
							<IconImage id="laptop" src={laptop} onClick={changePage} />
						</Image>
						<Image>
							<IconImage id="github" src={github} onClick={changePage} />
						</Image>
						<Image>
							<IconImage id="mail" src={mail} onClick={changePage} />
						</Image>
					</Menus>
				</Header>
				<Body>
					{currentPage === "laptop" ? <DeveloperTeam /> : null}
					{currentPage === "github" ? <DeveloperGithub /> : null}
					{currentPage === "mail" ? <DeveloperMail /> : null}
				</Body>
				<div id="wrap">
					<ValidityBox theme={msgVisible}>{message}</ValidityBox>
				</div>
				<Buttons>
					<Button onClick={() => history.push("/")}>확인버튼</Button>
					{currentPage === "mail" ? <Button onClick={submitMsg}>후원하기</Button> : null}
				</Buttons>
			</Main>
		</EntirePage>
	);
}
const EntirePage = styled.div`
	/* border: 3px solid rgb(0, 0, 255); */
	width: 50%;
	height: 100%;
	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
	@media only screen and (max-width: 480px) {
		margin-top: 8rem;
	}
`;
const Main = styled.div`
	background: #f6f6ee;
	border: 3px solid black;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	/* height: 100%; */
	div#wrap {
		/* border: 3px solid green; */
		height: 2rem;
		margin-bottom: 0.5rem;
		padding-right: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	@media only screen and (max-width: 1100px) {
		width: 100%;
	}
	@media only screen and (max-width: 480px) {
		min-width: 400px;
		/* height: 70%; */
	}
`;
const Header = styled.div`
	/* border: 3px solid black; */
	display: flex;
	flex-direction: column;
	text-align: center;
	@media only screen and (max-width: 480px) {
		min-height: 10rem;
	}
`;
const Team = styled.div`
	border-bottom: 3px solid black;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.7rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
		padding: 0.5rem;
		height: 2rem;
	}
`;
const TeamIntro = styled.div`
	border-bottom: 3px solid black;
	display: flex;
	padding: 0.3rem 0.7rem;
	height: 2rem;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	/* font-weight: bold; */
	letter-spacing: 0.5rem;
	@media (max-width: 480px) {
		font-size: 1rem;
		padding-left: 1rem;
		letter-spacing: 0.4rem;
	}
`;
const Menus = styled.div`
	/* height: 5rem; */
	border-bottom: 3px solid black;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 3rem;
		margin-bottom: 0.5%;
	}
`;
const Body = styled.div`
	/* border: 3px solid red; */
	display: flex;
	flex-direction: column;
	flex-grow: 2;
`;
const Image = styled.div`
	/* border: 3px solid red; */
	width: 4rem;
	/* height: 4rem; */
	display: flex;
	justify-content: center;
`;
const IconImage = styled.img`
	/* border: 3px solid black; */
	width: 3rem;
	alt: "";
	:hover {
		cursor: pointer;
		width: 3.3rem;
	}
	@media only screen and (max-width: 480px) {
		width: 2.5rem;
		:hover {
			width: 2.8rem;
		}
	}
`;
const Buttons = styled.div`
	/* border: 5px solid black; */
	/* flex-grow: 0.5; */
	padding-right: 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 480px) {
		padding-right: 2rem;
	}
`;
const Button = styled.button`
	border: 2px solid black;
	background: #f6f6ee;
	margin-right: 1rem;
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	:hover {
		cursor: pointer;
		background: black;
		color: white;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		font-size: 0.7rem;
		/* width: 5rem; */
		height: 1.5rem;
		margin-right: 0.5rem;
	}
`;
const ValidityBox = styled.div`
	/* border: 3px solid red; */
	position: relative;
	height: 30px;
	padding: 0.2rem 1rem 0.2rem 1rem;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: flex-start;
	align-items: center;
	::after {
		border-top: 0px solid transparent;
		border-left: none;
		border-right: none;
		content: "";
		position: absolute;
		top: -10px;
		left: 120px;
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
		::after {
			border-top: 0px solid transparent;
			border-left: none;
			border-right: none;
			border-bottom: 10px solid #f08080;
			content: "";
			position: absolute;
			top: -10px;
			left: 120px;
		}
	}
`;
