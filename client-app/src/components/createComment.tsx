import React from "react";
import styled from "styled-components";

function CreateComment() {
	const CommentBox = styled.div`
		width: 71%;
		height: 55%;
		border: 0.1rem solid black;
		margin: 1%;
		background: #ededed;
	`;
	const CommentBoxTitle = styled.h3`
		margin: 1% 4%;
	`;

	const CommentInput = styled.textarea`
		width: 90%;
		height: 30%;
		background: white;
		margin-top: 2%;
		margin-left: 4.5%;
		resize: none;
		font-size: 1.5em;
	`;

	const CommentStampSend = styled.div`
		display: flex;
		align-items: center;
		margin-left: 1.3rem;
	`;

	const CommentSendButton = styled.button`
		width: 15%;
		align-items: center;
		justify-content: center;
		display: flex;
		margin-left: 57.2%;
	`;

	return (
		<CommentBox>
			<CommentBoxTitle>한마디쓰기</CommentBoxTitle>
			<CommentInput />
			<CommentStampSend>
				<img
					className="date_weather"
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
					alt=""
					width="40px"
					height="40px"
				/>
				<img
					className="date_weather"
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
					alt=""
					width="40px"
					height="40px"
				/>
				<img
					className="date_weather"
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
					alt=""
					width="40px"
					height="40px"
				/>
				<CommentSendButton>등록하기</CommentSendButton>
			</CommentStampSend>
		</CommentBox>
	);
}

export default CreateComment;
