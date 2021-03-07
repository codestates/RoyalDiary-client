import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";
import CommentModal from "../components/createComment";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi7Iah7KCV7ZiEIiwibmlja25hbWUiOiLqt4DsmpTrr7giLCJlbWFpbCI6Ink2cnN5QG5hdmVyLmNvbSIsIm1vYmlsZSI6IjAxMC01NjQ4LTg1OTUiLCJpYXQiOjE2MTQ4NTY4MzMsImV4cCI6MTYxNDk0MzIzM30.eO5r550Gj7YLCPE8vp9zVWoWfm6opyK52sXVQRzt0JA";
axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiaryView(): ReactElement {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const location = useLocation();
	const params = queryString.parse(location.search);
	const [diary, setDiary]: any = useState([]);
	const [content, setContent]: any = useState(6);

	useEffect(() => {
		const getDiaryInfo: any = async () => {
			const diaryList = await axios.get(`contents/content?contentId=${6}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setDiary(diaryList.data.data);
		};
		getDiaryInfo();
	}, []);

	let comment: any[] = [];
	if (diary.length !== 0) {
		comment = diary.comments;
	}

	return (
		<Main>
			<DiaryContent diary={diary} />
			<DeleteButton onClick={() => console.log("a")}>일기삭제</DeleteButton>
			<CommentModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
			<Comments>
				{comment
					? comment.map((ele) => {
							return <Comment comment={ele} key={ele.commentId} />;
					  })
					: console.log(`there's no comment`)}
			</Comments>
		</Main>
	);
}

const Main = styled.div`
	background: #f3f3e9;
	//display: flex;
	width: 50%;
	height: 101%;
	box-sizing: border-box;
	flex-direction: column;
	@media only screen and (max-width: 1200px) {
		width: 90.4%;
		border-right: 5px solid black;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 100%;
	}
`;

const CommentButton = styled.button`
	width: 5em;
	height: 1.8em;
	border: 1px solid black;
	margin-top: 2.2%;
	margin-left: 84%;
	margin-bottom: 0.3%;

	@media only screen and (max-width: 480px) {
		margin-top: 5%;
		margin-left: 75%;
		margin-bottom: 3%;
	}
`;
const Comments: any = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	overflow: scroll;
	height: 10%;
	border: 0.15rem solid black;
	margin-left: 10%;
	margin-top: 0;
	width: 82%;
`;

const DeleteButton = styled.button`
	margin-top: 2.5%;
	margin-bottom: 0.5%;
	margin-left: 85%;
`;
