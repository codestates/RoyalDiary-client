import React from "react";
import styled from "styled-components";

function DiaryContent() {
	const Diary = styled.div`
		background: smokewhite;
		border: 2px solid black;
		width: 600px;
		margin-left: 10px;
	`;

	const DiaryInfo = styled.div`
		border: 1px solid black;
		width: 600px;
		justify-content: end;
		display: flex;
	`;

	const DiaryInfoTitle = styled.span`
		width: 600px;
		align-items: center;
		display: flex;
		font-size: 1.5em;
	`;

	const DiaryTitle = styled.h3`
		border: 1px solid black;
		widht: 600px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const DiaryText = styled.div`
		width: 600px;
		height: 300px;
	`;

	return (
		<Diary>
			<DiaryInfo>
				<DiaryInfoTitle> 날짜 : 2021년 2월 21일</DiaryInfoTitle>
				<span>
					<img
						className="date_weather"
						src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
						alt=""
						width="20px"
						height="20px"
					/>
					<img
						className="date_weather"
						src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
						alt=""
						width="20px"
						height="20px"
					/>
					<img
						className="date_weather"
						src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
						alt=""
						width="20px"
						height="20px"
					/>
				</span>
			</DiaryInfo>
			<img
				className="diary_image"
				src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
				width="600px"
				height="400px"
				alt=""
			/>

			<DiaryTitle>제목 : 오늘은 엄마랑 돈까스 먹은날! 🥰</DiaryTitle>
			<DiaryText> 오늘은 엄마랑 돈까스를 먹었다. 너무 맛있었다. 다음에 또먹고싶다.</DiaryText>
		</Diary>
	);
}

export default DiaryContent;
