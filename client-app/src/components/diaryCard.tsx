import React from "react";
import styled from "styled-components";

function DiaryCard() {
	const Card = styled.span`
		height: 28%;
		margin-left: 0.1rem;
		margin-top: 0.5rem;
	`;
	const DiaryCreatedAt = styled.h3`
		margin: 0rem 2.5rem;
	`;

	const DiaryCardContent = styled.div`
		margin: 0rem 2.5rem;
	`;
	const Diaryimage = styled.div`
		border: 1px solid black;
	`;

	return (
		<Card>
			<DiaryCreatedAt>2020-02-21</DiaryCreatedAt>
			<Diaryimage>
				<img
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
					width="180px"
					height="180px"
					alt=""
				/>
			</Diaryimage>
			<DiaryCardContent>작성자 : 송정현 </DiaryCardContent>
		</Card>
	);
}

export default DiaryCard;
