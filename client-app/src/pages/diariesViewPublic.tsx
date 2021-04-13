import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DiaryCard from "../components/diaryCard";
import left from "../assets/images/left.svg";
import right from "../assets/images/right.svg";
import bookImg from "../assets/images/loadingImg.gif";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiariesViewPublic(props: any): ReactElement {
	const { diaryCollect } = props;
	const [list, setList]: any = useState([]);
	const [currPage, setCurrPage] = useState(1);
	const history = useHistory();

	useEffect(() => {
		async function getData() {
			await axios.get(`contents/publiccontents`).then((res: any) => {
				if (res.data.count === 0) {
					history.push("/");
				}
				setList(res.data.data);
			});
		}
		getData();

		async function getContentList(pageNum: number) {
			await axios
				.get(`contents/publiccontents?page=${pageNum}`, { headers: { Authorization: `Bearer ${token}` } })
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
	const allPage: number = Math.ceil(list.count / 9);

	const pageList = [];
	for (let i = 1; i <= allPage; i += 1) {
		pageList.push(i);
	}

	return (
		<Main>
			<LoadingBox id="loading">
				<LoadingImg src={bookImg} alt="Loading Img" />
			</LoadingBox>
			<Content>
				<Title>훔쳐보기</Title>
				<Buttons>친구들이 공개한 일기를 볼 수 있어요</Buttons>
			</Content>

			<Cards className="card">
				{list.length !== 0
					? list.orderByRecent.map((ele: any) => {
							return <DiaryCard diary={ele} key={ele.id} pickerFnc={props.contentPicker} />;
					  })
					: ""}
			</Cards>
			<ControllBox>
				<IconBox>
					<LeftBtn onClick={() => flipPage(1)} />
				</IconBox>
				<PageNotice>
					{currPage} / {allPage} [Page]
				</PageNotice>
				<IconBox>
					<RightBtn onClick={() => flipPage(2)} />
				</IconBox>
			</ControllBox>
		</Main>
	);
}

const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	flex-direction: column;
	flex-grow: 0.68;
	width: 50%;
	height: 89vh;
	box-sizing: border-box;
	border-right: 5px solid black;
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
`;

const LeftBtn = styled.img.attrs({
	src: left,
})`
	width: 100%;
	&:hover {
		cursor: pointer;
	}
`;
const RightBtn = styled.img.attrs({
	src: right,
})`
	width: 100%;
	&:hover {
		cursor: pointer;
	}
`;
const ControllBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

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
	&:hover {
		cursor: default;
	}
`;

const IconBox = styled.div`
	width: 2.3rem;
`;

const LoadingBox = styled.div`
	position: absolute;
	background-color: rgba(240, 240, 240, 0.5);
	top: 0rem;
	width: 100%;
	height: 100%;
	display: none;
	justify-content: center;
	align-items: center;
	z-index: 99;
	pointer-events: stroke;
	@media only screen and (max-width: 1200px) {
		height: 110rem;
	}
	@media only screen and (max-width: 480px) {
		height: 77.5rem;
	}
`;
const LoadingImg = styled.img`
	width: 25rem;
	height: 20rem;
	margin-bottom: 5rem;
`;
