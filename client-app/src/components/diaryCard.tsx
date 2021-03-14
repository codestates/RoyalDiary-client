import React from "react";
import styled from "styled-components";

function DiaryCard(props: any) {
	const { diary, pickerFnc } = props;
	diary.createdAt = diary.createdAt.slice(0, 10);

	return (
		<Card onClick={() => pickerFnc(diary.id)}>
			<Title>{diary.title}</Title>
			<Diaryimage>
				<img src={diary.imgUrl} width="100%" height="100%" alt="" />
			</Diaryimage>
			<DiaryInfo>
				<DiaryCardContent>{diary.nickname} </DiaryCardContent>
				<DiaryCreatedAt>{diary.createdAt}</DiaryCreatedAt>
			</DiaryInfo>
		</Card>
	);
}

const Card = styled.div`
	width: 30%;

	margin: 0% 1%;
	&:hover {
		background: #c5c3c3;
	}
`;
const DiaryCreatedAt = styled.span`
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

const DiaryCardContent = styled.span`
	margin-right: 1rem;
	@media only screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`;
const Diaryimage = styled.div`
	border: 1px solid black;
	width: 100%;
	height: 8rem;
`;
const Title = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1rem;
`;
const DiaryInfo = styled.div`
	display: flex;
	justify-content: center;
`;

export default DiaryCard;
