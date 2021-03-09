import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DiaryContent from "../components/diaryContent";
import Comment from "../components/comment";
import CommentModal from "../components/createComment";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiaryViewPublic(props: any): any {
	const history = useHistory();
	const { data, contentId, conveyContent } = props;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [diary, setDiary]: any = useState([]);
	const [content, setContent]: any = useState(6);

	useEffect(() => {
		if (contentId !== 0) {
			axios.get(`contents/content?contentId=${contentId}`).then((res) => {
				res.data.data.createdAt = res.data.data.createdAt.slice(0, 10);
				setDiary(res.data.data);
			});
		}

		if (data.length !== 0 && contentId === 0) {
			const getDiaryInfo: any = async () => {
				setContent(data.orderByRecent[0].id);
				await axios
					.get(`contents/content?contentId=${content}`, {
						headers: { Authorization: `Bearer ${token}` },
					})
					.then((res) => {
						res.data.data.createdAt = res.data.data.createdAt.slice(0, 10);
						sessionStorage.setItem("comments", JSON.stringify(res.data.data.comments));
						setDiary(res.data.data);
					});
			};
			getDiaryInfo();
		}
	}, [data.length, data.orderByRecent, content, contentId]);

	let comment: any[] = [];
	if (diary.length !== 0) {
		comment = diary.comments;
	}

	async function deleteDiary() {
		await axios
			.delete(`/contents/dcontent`, {
				headers: { Authorization: `Bearer ${token}` },
				data: { contentId: diary.id },
			})
			.then((res) => console.log(res))
			.catch((e) => console.log(e));
		window.location.reload();
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<Main>
			<DiaryContent diary={diary} />
			<FixDiary
				onClick={() => {
					conveyContent(diary);
					history.push("/creatediary");
				}}
			>
				일기수정
			</FixDiary>
			<CommentButton type="button" onClick={openModal}>
				댓글작성
			</CommentButton>
			<DeleteButton onClick={() => deleteDiary()}>일기삭제</DeleteButton>
			<CommentModal content={diary.id} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
			<Comments>
				{comment.length > 0 ? (
					comment.map((ele) => {
						return <Comment comment={ele} key={ele.commentId} />;
					})
				) : (
					<InValidComment>댓글이 존재하지 않습니다. ㅠㅠ </InValidComment>
				)}
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

const CommentButton: any = styled.button`
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
	background: whitesmoke;
`;

const DeleteButton = styled.button`
	margin-top: 2.5%;
	margin-bottom: 0.5%;
	margin-left: 85%;
`;
const InValidComment = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
`;
const FixDiary = styled.button``;
