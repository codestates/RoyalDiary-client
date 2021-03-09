import React from "react";
import styled from "styled-components";

function DiaryCard(props: any) {
	const { diary, pickerFnc } = props;
	diary.createdAt = diary.createdAt.slice(0, 10);

	return (
		<Card onClick={() => pickerFnc(diary.id)}>
			<Diaryimage>
				<img
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7+2021-02-21+%EC%98%A4%ED%9B%84+2.21.11.png"
					width="100%"
					height="100%"
					alt=""
				/>
			</Diaryimage>
			<DiaryCardContent>{diary.nickname} </DiaryCardContent>
			<DiaryCreatedAt>{diary.createdAt}</DiaryCreatedAt>
		</Card>
	);
}

const Card = styled.div`
	width: 30%;
	margin: 0% 1%;
`;
const DiaryCreatedAt = styled.span`
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

const DiaryCardContent = styled.span`
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
const Diaryimage = styled.div`
	border: 1px solid black;
	width: 100%;
`;

export default DiaryCard;
