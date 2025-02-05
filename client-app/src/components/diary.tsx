import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";

interface diaryProps {
	saveDiary: any;
	contentInfo: any;
}

export default function CDiary(props: diaryProps): ReactElement {
	const { saveDiary, contentInfo } = props;
	const [count, countLetter] = useState(0);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const saveTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
		saveDiary(event);
	};
	const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const contentValue = event.target.value as string;
		setContent(contentValue);
		LetterCount(contentValue);
		saveContent(event);
	};
	const LetterCount = (v: string) => {
		countLetter(v.length);
	};
	const saveContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		// setContent(e);
		saveDiary(e);
	};
	useEffect(() => {
		if (contentInfo !== 0) {
			const titleIn = contentInfo.title;
			const contentIn = contentInfo.content;
			setTitle(titleIn);
			setContent(contentIn);
		}
	}, [setTitle, setContent, contentInfo]);
	return (
		<Main>
			<Title>
				제목:
				<TypeTitle
					value={title}
					maxLength={15}
					placeholder="15자 이내로 작성해주세요"
					onChange={saveTitle}
					id="typeTitle"
				/>
			</Title>
			<Content>
				<TypeContent
					value={content}
					maxLength={149}
					placeholder="오늘은 퇴근후 친구들을 만나..."
					onChange={handleContent}
					id="typeContent"
				/>
			</Content>
			<Counter id="counter">({count} / 최대 150자)</Counter>
		</Main>
	);
}
const Main = styled.div`
	// border: 5px solid black;
	flex-grow: 6;
	display: flex;
	flex-direction: column;
`;
const Title = styled.div`
	border: 5px solid black;
	border-radius: 1rem;
	flex-grow: 1;
	margin: 3.5rem 3rem 1rem 3rem;
	padding-left: 1rem;
	display: flex;
	align-items: center;
	font-size: 1.7rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.2rem;
		margin: 2rem 1rem 1rem 1rem;
	}
`;
const TypeTitle = styled.input`
	/* border: 1px solid rgb(246, 246, 238); */
	border: none;
	border-bottom: 1px solid black;
	margin-top: 0.2rem;
	margin-left: 0.8rem;
	height: 40%;
	width: 70%;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.8rem;
	background-color: rgb(246, 246, 238);
	:focus {
		outline: none;
	}
	@media only screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;
const Content = styled.div`
	border: 5px solid black;
	border-radius: 1rem;
	flex-grow: 6;
	margin: 0rem 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		margin: 0rem 1rem 0rem 1rem;
	}
`;
const TypeContent = styled.textarea`
	border: none;
	width: 92%;
	height: 90%;
	font-family: "Nanum Brush Script", cursive;
	font-size: 1.9rem;
	background-color: rgb(246, 246, 238);
	outline: none;
	resize: none;
	line-height: 3rem;
	letter-spacing: 0.05rem;
	overflow: hidden;
	:focus {
		outline: none;
	}
	@media only screen and (max-width: 480px) {
		font-size: 1.3rem;
		line-height: 2rem;
	}
`;
const Counter = styled.span`
	/* border: 3px solid red; */
	margin: 0.5rem 3rem 1rem 3rem;
	padding-left: 0.3rem;
	color: "#aaa";
	font-size: 1.2rem;
	@media only screen and (max-width: 480px) {
		margin: 0.2rem 3rem 2rem 1rem;
	}
`;
