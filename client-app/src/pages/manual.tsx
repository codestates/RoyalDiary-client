import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Manual(): ReactElement {
	const Diary = styled.div`
		background: red;
		border: 10px solid red;
		flex-grow: 1;
		max-width: 1000px;
		height: 90%;
		margin-left: 50px;
	`;
	const DiaryInfo = styled.div`
		border: 1px solid black;
		width: 600px;
		justify-content: end;
		display: flex;
	`;
	const DiaryInfoTitle = styled.div`
		width: 600px;
		align-items: center;
		display: flex;
		font-size: 1.5em;
	`;
	return (
		<Diary>
			<DiaryInfo>
				<DiaryInfoTitle className="date_createdAt"> 메뉴얼 페이지</DiaryInfoTitle>
			</DiaryInfo>
			<img
				className="diary_image"
				src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
				width="600px"
				height="400px"
				alt=""
			/>
		</Diary>
	);
}
