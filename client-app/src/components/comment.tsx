import React from "react";
import styled from "styled-components";

function Comment() {
	const CommentBox = styled.div`
		margin-top: 0.5rem;
	`;
	const CommentStyle = styled.div`
		background: #edede9;
		display: inline-block;
		width: 71%;
		height: 80px;
		margin: 0.5%;

		border: 1px solid black;
	`;

	const CommentUser = styled.div`
		justify-content: space-between;
		display: flex;
		text-align: center;
		width: 95%;
	`;
	const CommentContents = styled.span`
		font-size: 1.2em;
	`;

	return (
		<CommentStyle>
			<CommentUser>
				<CommentContents>뚱이님의 한마디 </CommentContents>
				<CommentContents>2020-02-21</CommentContents>
			</CommentUser>
			<div className="comment_text">
				<span> 선생님은 뚱이를 응원해요!</span>
				<img
					className="date_weather"
					src="https://image-storage-homemade.s3.ap-northeast-2.amazonaws.com/cloud-sun-rain-solid.svg"
					alt=""
					width="40px"
					height="40px"
				/>
			</div>
		</CommentStyle>
	);
}

export default Comment;
