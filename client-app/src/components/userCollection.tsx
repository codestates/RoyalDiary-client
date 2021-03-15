import axios from "axios";
import { func } from "prop-types";
import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import apolo from "../assets/images/collection/apolo.png";
import candy from "../assets/images/collection/candy.png";
import corn from "../assets/images/collection/corn.png";

const token = sessionStorage.getItem("accessToken");

export default function User(props: any): ReactElement {
	const { user, diary } = props;
	const [editStatus, setEditStatus] = useState(false);
	const history = useHistory();

	function editStatusHandler() {
		if (editStatus === false) {
			setEditStatus(true);
		}
		if (editStatus === true) {
			setEditStatus(false);
		}
	}
	console.log(editStatus);

	async function removeCheck() {
		if (window.confirm("정말 탈퇴하시겠습니까?") === true) {
			await axios.delete("users/mypage", { headers: { Authorization: `Bearer ${token}` } });
			localStorage.clear();
			sessionStorage.clear();
			history.push("/");
		}
	}

	return (
		<Main className="userComponent">
			<Info>
				<UserInfo className="userinfo">
					<InfoBox>
						<Option>성명</Option>
						<Content1>{user.name}</Content1>
						<Option>전자우편</Option>
						<Content2>{user.email}</Content2>
					</InfoBox>
					<InfoBox>
						<Option>별명</Option>
						<Content1>{user.nickname}</Content1>
						<Option>휴대전화</Option>
						<Content2>{user.mobile}</Content2>
					</InfoBox>
					<Collection className="collectionBox">
						<CollectionTitle>콜렉숀</CollectionTitle>
						<Items className="items">
							<Item>
								<ItemDescription>일기 10개 이상 작성 시</ItemDescription>
								<Apolo src={apolo} theme={diary} />
							</Item>
							<Item>
								<ItemDescription>일기 3개 이상 작성 시</ItemDescription>
								<Candy src={candy} theme={diary} />
							</Item>
							<Item>
								<ItemDescription>일기 1개 이상 작성 시</ItemDescription>
								<Corn src={corn} theme={diary} />
							</Item>
						</Items>
					</Collection>
				</UserInfo>
				<DiaryInfo className="diaryinfo">
					<ExchangeBox>
						<MenuBoxLine>내 최근 일기</MenuBoxLine>
						<MenuBoxLine>
							<ExchangeTitle1>제목</ExchangeTitle1>
							<ExchangeTitle2>생성일</ExchangeTitle2>
							<ExchangeTitle2>수정일</ExchangeTitle2>
						</MenuBoxLine>
					</ExchangeBox>

					<DiaryList>
						{diary
							? diary.map((ele: any) => {
									/* eslint-disable-next-line */
									ele.createdAt = ele.createdAt.slice(0, 10);
									/* eslint-disable-next-line */
									ele.updatedAt = ele.updatedAt.slice(0, 10);
									/* eslint-disable-next-line */
									ele.title = ele.title.slice(0, 10);
									return (
										<DiaryLists>
											<DiaryListsName>{ele.title}</DiaryListsName>
											<DiaryListsDate>{ele.createdAt}</DiaryListsDate>
											<DiaryListsContent>{ele.updatedAt}</DiaryListsContent>
										</DiaryLists>
									);
							  })
							: ""}
					</DiaryList>
				</DiaryInfo>
			</Info>
			<EditBtn onClick={() => removeCheck()}>회원 탈퇴</EditBtn>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Info = styled.div`
	width: 80%;
	margin: auto;
	height: 80%;
	border-top: 0.2rem solid black;
	border-bottom: 0.2rem solid black;
`;

const InfoBox = styled.div`
	//background: red;
	height: 3.5rem;
	border-bottom: 0.15rem solid black;
	display: flex;
	@media only screen and (max-width: 768px) {
		max-width: 100%;
		word-break: break-all;
	}
`;

const ExchangeBox = styled.div`
	margin-top: 3%;
	border-bottom: 0.15rem solid black;
`;

const MenuBoxLine = styled.div`
	height: 3%;
	border-top: 0.15rem solid black;
	display: flex;
	font-size: 170%;
	justify-content: space-around;
	align-items: center;
`;

const ExchangeTitle1 = styled.span`
	font-size: 60%;
	width: 30%;
	display: flex;

	justify-content: center;
`;

const ExchangeTitle2 = styled.span`
	font-size: 60%;
	width: 20%;
	display: flex;
	justify-content: center;
`;

const DiaryLists = styled.div`
	display: flex;
	justify-content: space-around;
	&:hover {
		background: #aaa7a7;
		cursor: pointer;
		height: 10%;
	}
`;

const DiaryListsName = styled.span`
	font-size: 120%;
	width: 40%;

	display: flex;
	justify-content: center;
`;
const DiaryListsDate = styled.span`
	font-size: 120%;
	width: 30%;

	display: flex;
	justify-content: center;
`;
const DiaryListsContent = styled.span`
	font-size: 120%;
	width: 30%;
	display: flex;
	justify-content: center;
`;

const Option = styled.span`
	font-size: 120%;
	border-right: 0.15rem solid black;
	width: 13%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content1 = styled.span`
	font-size: 120%;
	border-right: 0.15rem solid black;
	width: 35%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Content2 = styled.span`
	font-size: 120%;
	width: 35%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Collection = styled.div`
	height: 71%;
	display: flex;
	align-items: center;
`;

const CollectionTitle = styled.div`
	height: 100%;
	width: 15%;
	font-size: 140%;
	border-right: 0.15rem solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	writing-mode: vertical-rl;
	text-orientation: upright;
`;

const Apolo = styled.img`
	@media only screen and (max-width: 480px) {
		width: 3rem;
		height: 5rem;
	}
	width: 5rem;
	height: 7rem;
	opacity: ${(props) => (props.theme.length > 10 ? "1" : "0.3")};
`;
const Candy = styled.img`
	@media only screen and (max-width: 480px) {
		width: 3rem;
		height: 5rem;
	}
	width: 5rem;
	height: 7rem;
	opacity: ${(props) => (props.theme.length > 3 ? "1" : "0.3")};
`;
const Corn = styled.img`
	@media only screen and (max-width: 480px) {
		width: 3rem;
		height: 5rem;
	}
	width: 5em;
	height: 7rem;
	opacity: ${(props) => (props.theme.length > 1 ? "1" : "0.3")};
`;
const Items = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;
const ItemDescription = styled.span`
	display: none;
`;
const Item = styled.span`
	width: 30%;
	height: 80%;
	display: flex;
	margin-left: 1rem;
	justify-content: center;
	flex-direction: column;
	&:hover {
		${ItemDescription} {
			display: flex;
		}
	}
`;
const UserInfo = styled.div`
	height: 55%;
`;
const DiaryInfo = styled.div``;

const DiaryList = styled.div``;

const EditBtn: any = styled.button`
	width: 5.5rem;
	margin-bottom: 2rem;
	margin-left: 15%;
	border: 0px;
	font-size: 1.2rem;
	&:hover {
		width: 6rem;
		cursor: pointer;
		background: black;
		color: white;
	}
`;
