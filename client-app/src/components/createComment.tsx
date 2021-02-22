import React from "react";
import styled from "styled-components";

function CreateComment() {
	const CommentBox = styled.div`
		width: 450px;
		height: 200px;
		border: 1px solid black;
		margin-left: 10px;
		background: #ededed;
	`;
	const CommentBoxTitle = styled.h3`
		margin: 0px;
	`;

	const CommentInput = styled.textarea`
		width: 400px;
		height: 120px;
		background: white;
		margin-top: 10px;
		margin-left: 20px;
		resize: none;
		font-size: 1.5em;
	`;

	const CommentStampSend = styled.div`
		display: flex;
		align-items: center;
		justify-content: flex-end;
	`;

	const CommentSendButton = styled.button`
		width: 70px;
		height: 30px;
		align-items: center;
		justify-content: center;
		display: flex;
		margin-right: 22px;
		margin-left: 220px;
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
