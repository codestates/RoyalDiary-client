import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DiaryContent from "../components/diaryContent";
import CommentModal from "../components/createComment";
import commentViewer from "../assets/images/diary/commentview.svg";
import deleteContent from "../assets/images/diary/delete.svg";
import editDiary from "../assets/images/diary/edit.svg";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";
const nickname = sessionStorage.getItem("nickName");

export default function DiaryViewPublic(props: any): ReactElement {
	const history = useHistory();
	const { data, contentId, conveyContent } = props;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [diary, setDiary]: any = useState([]);
	const [content, setContent]: any = useState(1);

	useEffect(() => {
		if (contentId !== 0) {
			axios.get(`contents/content?contentId=${contentId}`).then((res) => {
				if (res.data.data.createdAt) {
					res.data.data.createdAt = res.data.data.createdAt.slice(0, 10);
				}
				setDiary(res.data.data);
			});
		}
		setTimeout(() => {
			if (data.length !== 0 && contentId === 0) {
				setContent(data.orderByRecent[0].id);
				const getDiaryInfo: any = async () => {
					await axios
						.get(`contents/content?contentId=${content}`, {
							headers: { Authorization: `Bearer ${token}` },
						})
						.then((res) => {
							if (res.data.data) {
								res.data.data.createdAt = res.data.data.createdAt.slice(0, 10);
							}
							setDiary(res.data.data);
						});
				};
				getDiaryInfo();
			}
		}, 100);
	}, [data.length, data.orderByRecent, content, contentId]);

	let comment: any[] = [];
	if (diary && diary.length !== 0) {
		comment = diary.comments;
	}

	async function deleteDiary() {
		if (window.confirm("정말 일기를 삭제하시겠습니까?") === true) {
			await axios
				.delete(`/contents/dcontent`, {
					headers: { Authorization: `Bearer ${token}` },
					data: { contentId: diary.id },
				})
				.then((res) => console.log(res))
				.catch((e) => console.log(e));
			window.location.reload();
		}
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<Main>
			<DiaryContent diary={diary} />
			<Buttons className="buttons">
				<ImgBox>
					<ImgDescription>댓글 보기</ImgDescription>
					<CommentButton onClick={openModal} />
				</ImgBox>
				{diary.nickname === nickname ? (
					<ImgBox>
						<ImgDescription>일기 수정</ImgDescription>
						<EditButton
							onClick={() => {
								conveyContent(diary);
								history.push("/creatediary");
							}}
						/>
					</ImgBox>
				) : (
					""
				)}
				{diary.nickname === nickname ? (
					<ImgBox>
						<ImgDescription>일기 삭제</ImgDescription>
						<DeleteButton onClick={() => deleteDiary()} />
					</ImgBox>
				) : (
					""
				)}
			</Buttons>
			<CommentModal comments={diary.comments} content={diary.id} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
		</Main>
	);
}

const Main = styled.div`
	background: #f3f3e9;
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

const CommentButton = styled.img.attrs({
	src: commentViewer,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
		width: 110%;
	}
`;
const DeleteButton = styled.img.attrs({
	src: deleteContent,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
		width: 110%;
	}
`;
const EditButton = styled.img.attrs({
	src: editDiary,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
		width: 110%;
	}
`;

const Buttons = styled.div`
	margin-top: 5%;
	margin-right: 7%;
	display: flex;
	justify-content: flex-end;
`;
const ImgDescription = styled.div`
	display: none;
`;

const ImgBox = styled.div`
	width: 4rem;
	margin-right: 0.5rem;
	&:hover {
		${ImgDescription} {
			display: flex;
		}
	}
`;
