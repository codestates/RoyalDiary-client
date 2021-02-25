import React from "react";
import styled from "styled-components";

function CreateComment() {
	const CommentBox = styled.div`
		width: 31.2rem;
		height: 8rem;
		border: 0.1rem solid black;
		margin-top: 1%;
		background: #ededed;
	`;
	const CommentBoxTitle = styled.h3`
		margin: 0px;
	`;

	const CommentInput = styled.textarea`
		width: 90%;
		height: 30%;
		background: white;
		margin-top: 10px;
		margin-left: 20px;
		resize: none;
		font-size: 1.5em;
	`;

	const CommentStampSend = styled.div`
		display: flex;
		align-items: center;
		margin-left: 1.3rem;
	`;

	const CommentSendButton = styled.button`
		width: 5em;
		height: 2em;
		align-items: center;
		justify-content: center;
		display: flex;
		margin-left: 20em;
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
