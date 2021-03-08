import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import User from "../components/userCollection";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6rmA6rmA6rmAIiwibmlja25hbWUiOiLsnqDrp4zrs7QiLCJlbWFpbCI6Inp6ekBnbWFpbC5jb20iLCJtb2JpbGUiOiIwMTAxMDEwMTAxIiwiaWF0IjoxNjE1MTI5MjA1LCJleHAiOjE2MTUyMTU2MDV9.7lLzIDeXYGmEXuqVwCJlkq0UM1UnRp0Suku-h4QCQao";

export default function UserInfo(): ReactElement {
	const [user, setUser]: any = useState("");

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
	}, []);

	return (
		<Main>
			<User user={user} />
		</Main>
	);
}
const Main = styled.div`
	background: #f3f3e9;
	display: flex;
	flex-direction: row;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 100%;
	}
`;
