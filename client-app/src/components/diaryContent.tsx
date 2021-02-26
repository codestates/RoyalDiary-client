import React from "react";
import styled from "styled-components";

const Diary = styled.div`
	background: white;
	width: 70%;
	height: 60%;
	margin: 10% 15% 0.5% 15%;
	border: 0.2rem solid black;
`;

const Info = styled.div`
	border: 0.01rem solid black;
	width: 100%;
	height: 5%;
	display: flex;
	//justify-content: flex-end;
	border: 0.01 rem solid black;
`;

const Date = styled.span`
	border: 0.01rem solid black;
	width: 10%;
	font-size: 1.3rem;
	display: flex;
	justify-content: center;
`;

const Data = styled.span`
	border: 0.01rem solid black;
	width: 50%;
	font-size: 1.3rem;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const Text = styled.div`
	border: 1px solid black;
	height: 43.5%;
	width: 100%;
`;

function DiaryContent() {
	return (
		<Diary>
			<Info>
				<Date>날짜</Date>
				<Data> 2021 년 2 월 21 일</Data>
				<Date>날씨</Date>
				<img src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg" alt="" />
				<img src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg" alt="" />
				<img src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg" alt="" />
				<img src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg" alt="" />
			</Info>
			<img
				src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
				alt=""
				width="100%"
				height="50%"
			/>
			<Text>d</Text>
		</Diary>
	);
}

export default DiaryContent;
