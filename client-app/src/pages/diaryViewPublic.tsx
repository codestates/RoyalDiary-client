import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DiaryContent from "../components/diaryContent";
import CommentModal from "../components/createComment";
import SubNav from "../components/subNav";
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
			<SubNav />
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
	background: #f6f6ee;
	width: 50%;
	height: 101%;
	box-sizing: border-box;
	flex-direction: column;
	box-shadow: 10px 7px 5px black;
	@media only screen and (max-width: 1200px) {
		width: 93.5%;
		height: 100%;
		border-right: none;
		border-bottom: 5px solid black;
	}
	@media only screen and (max-width: 480px) {
		min-width: 400px;
		height: 70%;
	}
`;

const CommentButton = styled.img.attrs({
	src: commentViewer,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
	}
`;
const DeleteButton = styled.img.attrs({
	src: deleteContent,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
	}
`;
const EditButton = styled.img.attrs({
	src: editDiary,
})`
	width: 80%;
	margin-left: 3%;
	&:hover {
		cursor: pointer;
	}
`;

const Buttons = styled.div`
	margin-top: 3%;
	margin-right: 10%;
	display: flex;
	justify-content: flex-end;
`;
const ImgDescription = styled.div`
	display: none;
`;

const ImgBox = styled.div`
	width: 3.5rem;
	margin-right: 0.5rem;
	@media only screen and (max-width: 480px) {
		width: 2rem;
	}
	&:hover {
		${ImgDescription} {
			display: flex;
		}
		cursor: pointer;
	}
`;
