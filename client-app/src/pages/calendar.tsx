import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import DiaryRows from "../components/diaryRows";
import cry from "../assets/images/cry.png";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

export default function CalendarRows(props: any): ReactElement {
	const { content } = props;
	const [comments, setComments] = useState([]);
	console.log(comments);
	useEffect(() => {
		async function getComments() {
			await axios
				.post(
					"contents/rcomment",
					{ contentId: content },
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
				.then((res) => {
					setComments(res.data.data);
				});
		}
		getComments();
	}, [content]);

	return (
		<Main>
			<Title>최근 받은 댓글</Title>
			<Comments>
				{comments !== []
					? comments.map((el: any) => {
							return <DiaryRows comments={el} />;
					  })
					: ""}
				{comments.length === 0 ? (
					<NullDescription>
						<NullImage src={cry} />
						<NullContent>댓글이 없구나ㅠㅠ </NullContent>{" "}
					</NullDescription>
				) : (
					""
				)}
			</Comments>
		</Main>
	);
}

const Main = styled.div`
	background: #e3e3d1;
	border-right: 0.15rem solid black;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	flex-direction: column;
	box-shadow: 10px 5px 5px black;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
		border-right: none;
		border-bottom: 5px solid black;
	}
	@media only screen and (max-width: 480px) {
		min-width: 400px;
		height: 70%;
	}
`;

const Comments = styled.div`
	width: 75%;
	height: 55%;
	border: 0.15rem solid black;
	background: white;
	margin: auto;
	overflow: scroll;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		width: 75%;
		height: 50%;
		display: flex;
		justify-content: center;
	}
`;
const NullDescription = styled.div`
	flex-direction: column;
	margin: auto;
	margin-top: 20%;
	width: 150px;
`;
const NullContent = styled.div`
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
`;
const NullImage = styled.img`
	width: 150px;
`;

const Title = styled.div`
	font-size: 2rem;
	margin-left: 13%;
	margin-top: 15%;
`;
