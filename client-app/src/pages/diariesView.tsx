import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DiaryCard from "../components/diaryCard";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiariesView(props: any): ReactElement {
	const history = useHistory();
	const { diaryCollect } = props;
	const [list, setList]: any = useState([]);
	const [sortByDate, setDate]: any = useState(true);
	const [currPage, setCurrPage] = useState(1);

	useEffect(() => {
		async function getData() {
			await axios.get(`contents/contents`, { headers: { Authorization: `Bearer ${token}` } }).then((res: any) => {
				if (res.data.data.count === 0) {
					alert("작성한 일기가 없습니다. 일기작성 페이지로 이동합니다.");
					history.push("/creatediary");
				}
				setList(res.data.data);
			});
		}
		getData();
		async function getContentList(pageNum: number) {
			await axios
				.get(`contents/contents?page=${pageNum}`, { headers: { Authorization: `Bearer ${token}` } })
				.then((res) => setList(res.data.data));
		}
		if (currPage > 1) {
			getContentList(currPage);
		}
	}, [currPage, history]);

	function flipPage(num: number) {
		if (num === 1 && currPage > 1) {
			setCurrPage(currPage - 1);
		}
		if (num === 2 && currPage < allPage) {
			setCurrPage(currPage + 1);
		}
	}

	if (list) {
		diaryCollect(list);
	}

	function checker() {
		if (!sortByDate) {
			setDate(true);
		} else {
			setDate(false);
		}
	}
	const allPage: number = Math.ceil(list.count / 9);

	const pageList = [];
	for (let i = 1; i <= allPage; i += 1) {
		pageList.push(i);
	}

	return (
		<Main>
			<Content>
				<Title>일기보기</Title>
				<Buttons>내가 작성한 일기를 볼 수 있어요</Buttons>
			</Content>

			<Cards className="card">
				{list.length !== 0
					? list.orderByRecent.map((ele: any) => {
							return <DiaryCard diary={ele} key={ele.id} pickerFnc={props.contentPicker} />;
					  })
					: ""}
			</Cards>
			<ControllBox>
				<LeftBtn onClick={() => flipPage(1)} />
				<PageNotice>
					{currPage} / {allPage} [Page]
				</PageNotice>
				<RightBtn onClick={() => flipPage(2)} />
			</ControllBox>
		</Main>
	);
}

const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	flex-direction: column;
	flex-grow: 0.68;
	//margin-left: 6rem;
	width: 50%;
	height: 89vh;
	box-sizing: border-box;
	border-right: 5px solid black;
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
const Content = styled.div`
	margin-top: 5%;
	margin-left: 5%;
	display: flex;
	width: 100%;
	height: 2.5rem;
	justify-content: space-between;
`;
const Cards = styled.div`
	width: 88%;
	height: 75%;
	border: 1px solid black;
	margin: 2% auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	background: white;
	@media only screen and (max-width: 480px) {
		margin-top: 3%;
		height: 75%;
	}
`;

const Title = styled.span`
	font-size: 2rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

const Buttons = styled.div`
	margin-right: 11%;
	font-size: 1.2rem;
	display: flex;
	align-items: flex-end;
	color: blue;
`;

const LeftBtn = styled.img.attrs({
	src: left,
})`
	width: 5%;
	&:hover {
		width: 6.5%;
	}
`;
const RightBtn = styled.img.attrs({
	src: right,
})`
	width: 5%;
	&:hover {
		width: 6.5%;
	}
`;
const ControllBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5%;

	@media only screen and (max-width: 480px) {
		margin-top: 1%;
	}
`;
const PageNotice = styled.span`
	background: white;
	height: 80%;
	width: 30%;
	display: flex;
	margin-left: 3%;
	margin-right: 3%;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	border: 0.15rem solid black;
`;
