import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import User from "../components/userCollection";
import SubNav from "../components/subNav";

const token = sessionStorage.getItem("accessToken");

export default function UserInfo(props: any): ReactElement {
	const [user, setUser]: any = useState("");
	const [diary, setDiary] = useState([]);

	const { setContentId, content } = props;

	useEffect(() => {
		async function getUserInfo() {
			await axios
				.get("users/mypage", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => setUser(res.data));
		}
		getUserInfo();
		async function getDiary() {
			await axios
				.get(`contents/contents`, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					setDiary(res.data.data.orderByRecent);
				});
		}
		getDiary();
	}, []);
	const contentArr: any[] = [];
	if (user) {
		user.contents.map((el: any) => {
			return contentArr.push(el.contentId);
		});
	}

	if (content.length === 0 && contentArr.length > 0) {
		setContentId(contentArr);
	}

	return (
		<Main>
			<User user={user} diary={diary} />
			<SubNav />
		</Main>
	);
}
const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
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
