import React from "react";
import styled from "styled-components";

function DiaryCard(props: any) {
	const { diary, pickerFnc } = props;
	diary.createdAt = diary.createdAt.slice(0, 10);

	return (
		<Card onClick={() => pickerFnc(diary.id)}>
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
	height: 20%;
	margin: 0% 1%;
	background: white;
	&:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 1200px) {
		width: 30%;
	}

	@media only screen and (max-width: 480px) {
		width: 28%;
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
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
const Diaryimage = styled.div`
	border: 1px solid black;
	width: 100%;
	height: 8rem;
	:hover {
		transform: translate(0%, -1em);
		transition: transform 0.5s ease-in;
	}

	@media only screen and (max-width: 1200px) {
		width: 80%;
		height: 7rem;
	}

	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 4.5rem;
	}
`;
const Title = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1rem;
	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;
const DiaryInfo = styled.div`
	display: flex;
	justify-content: center;
`;

export default DiaryCard;
