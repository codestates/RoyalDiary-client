import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import User from "../components/userCollection";

export default function UserInfo(): ReactElement {
	const Main = styled.div`
		background: #f3f3e9;
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		max-width: 50rem;
		max-height: 53.5rem;
		@media only screen and (max-width: 1348px) {
			max-width: 100%;
		}
	`;

	return (
		<Main>
			<User />
		</Main>
	);
}
