import React from "react";
import styled from "styled-components";

function DiaryCard() {
	const Card = styled.div`
		margin-left: 10px;
	`;
	const DiaryCreatedAt = styled.h2`
		width: 200px;
		justify-content: center;
		display: flex;
		margin-bottom: 5px;
	`;

	const DiaryCardContent = styled.div`
		width: 200px;
		justify-content: center;
		display: flex;
		font-size: 1.2em;
		padding: 0px;
	`;
	const Diaryimage = styled.div`
		border: 1px solid black;
		width: 200px;
	`;

	return (
		<Card>
			<DiaryCreatedAt>2020-02-21</DiaryCreatedAt>
			<Diaryimage>
				<img
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
					width="200px"
					height="200px"
					alt=""
				/>
			</Diaryimage>

			<DiaryCardContent className="writer">작성자 : 송정현 </DiaryCardContent>
		</Card>
	);
}

export default DiaryCard;
