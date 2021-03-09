import React, { ReactElement, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import User from "../components/userCollection";

const token = sessionStorage.getItem("accessToken");

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
