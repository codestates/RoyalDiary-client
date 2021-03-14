import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import DiaryRows from "../components/diaryRows";

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
			<Title>다이어리 요약</Title>
			<Comments>
				{comments
					? comments.map((el: any) => {
							return <DiaryRows comments={el} />;
					  })
					: "최근 받은 댓글이 없네요 ㅜㅜ"}
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
	@media only screen and (max-width: 1200px) {
		width: 70%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
`;

const Comments = styled.div`
	width: 75%;
	height: 40%;
	border: 0.15rem solid black;
	background: white;
	margin: auto;
	overflow: scroll;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		width: 75%;
		height: 20%;
		display: flex;
		justify-content: center;
	}
`;

const Title = styled.div`
	font-size: 2rem;
	margin-left: 13%;
	margin-top: 15%;
`;
