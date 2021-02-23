import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import User from "../components/userCollection";

export default function UserInfo(): ReactElement {
	const Main = styled.div`
		display: flex;
		flex-direction: column;
		background: #f3f3e9;
		width: 50%;
		height: 100%;
	`;

	return (
		<Main>
			<User />
		</Main>
	);
}
