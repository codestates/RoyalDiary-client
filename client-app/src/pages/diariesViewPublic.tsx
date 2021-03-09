import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import DiaryCard from "../components/diaryCard";

const token = sessionStorage.getItem("accessToken");
axios.defaults.baseURL = "https://royal-diary.ml";

export default function DiariesViewPublic(props: any): ReactElement {
	const { diaryCollect } = props;
	const [list, setList]: any = useState([]);
	const [sortByDate, setDate]: any = useState(true);
	const location = useLocation();
	const query = queryString.parse(location.search);
	useEffect(() => {
		async function getData() {
			axios.get(`contents/publiccontents`).then((res: any) => {
				setList(res.data.data);
			});
		}
		getData();
	}, []);

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

	const allPage = Math.ceil(list.count / 9);
	const pageList = [];
	for (let i = 1; i <= allPage; i += 1) {
		pageList.push(i);
	}

	async function getContentList(pageNum: number) {
		await axios
			.get(`contents/publiccontents?page=${pageNum}`, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => setList(res.data.data));
	}

	return (
		<Main>
			<Content>
				<Title>일기보기</Title>
				<Buttons>
					<SortViews onClick={() => checker()}>조회수 순</SortViews>
					<SortDate>최근 순</SortDate>
				</Buttons>
			</Content>
			<Cards>
				{list.length !== 0
					? list.orderByRecent.map((ele: any) => {
							return <DiaryCard diary={ele} key={ele.id} pickerFnc={props.contentPicker} />;
					  })
					: console.log("trying to get data, please wait")}
			</Cards>
			<Pages>
				{pageList.map((el) => {
					return (
						<Page onClick={() => getContentList(el)} key={el}>
							{el}
						</Page>
					);
				})}
			</Pages>
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
		/* margin-left: 1rem; */
		width: 70%;
	}
	@media only screen and (max-width: 480px) {
		/* margin-left: 1rem; */
		width: 100%;
		height: 90%;
		margin: 0px;
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
		margin-top: 15%;
		height: 50%;
	}
`;

const Title = styled.span`
	font-size: 2rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

const Buttons = styled.div`
	flex-direction: row;
	margin-right: 11%;
`;

const SortViews: any = styled.button`
	width: 5rem;
	height: 2rem;
	border: 0.1rem solid black;
	background: white;
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
		width: 4rem;
		height: 1.6rem;
	}
`;
const SortDate = styled.button`
	width: 5rem;
	height: 2rem;
	border: 0.1rem solid black;
	background: white;
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
		width: 4rem;
		height: 1.6rem;
	}
`;
const Page = styled.button`
	background-color: wheat;
	font-size: 1.5rem;
	margin-left: 8px;
	margin-top: 0.3rem;
`;
const Pages = styled.div`
	margin-top: 1.5rem;
	margin-left: 20%;
`;
