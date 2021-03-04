import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Agreement(): ReactElement {
	const Checkstyle = {
		zoom: 1.3,
	};
	const FirstLine = {
		borderTop: "none",
	};

	return (
		<Main>
			<Inputinfo>
				<Title>지원자</Title>
				<Infobox>
					<Linesolo style={FirstLine}>
						<Item>이름</Item>
						<Input placeholder="예) 홍길동" />
						<Item>별명</Item>
						<Input placeholder="예) 아기공룡 둘리" />
					</Linesolo>
					<Linesolo>
						<Item>전자우편</Item>
						<Input placeholder="예) abc@gmail.com" />
						<Item>전화번호</Item>
						<Input placeholder="예) 010-1234-1234" />
					</Linesolo>
					<Linesolo>
						<Item>암호</Item>
						<Inputpwd placeholder="영문+숫자+특수문자 8자이상" />
					</Linesolo>
					<Linesolo>
						<Item>암호확인</Item>
						<Inputpwd placeholder="암호를 확인합니다." />
					</Linesolo>
				</Infobox>
			</Inputinfo>
			<Checkagreement>
				<div>나의 다짐</div>
				<div>
					<input type="checkbox" name="agreement" value="" style={Checkstyle} />
					친구에게 나쁜말을 하지 않겠습니다.
				</div>
				<div>
					<input type="checkbox" name="agreement" value="" style={Checkstyle} />
					친구와 사이좋게 지내겠습니다.
				</div>
				<div>
					<input type="checkbox" name="agreement" value="" style={Checkstyle} />
					그림일기를 꾸준하게 작성하겠습니다.
				</div>
			</Checkagreement>
		</Main>
	);
}

const Main = styled.div`
	/* border: 3px solid red; */
	display: flex;
	flex-direction: column;
	align-items: center;
	/* flex-grow: 1; */
`;
const Inputinfo = styled.div`
	border: 5px solid black;
	margin: 1rem 0rem 0rem 0rem;
	/* height: 10rem; */
	width: 80%;
	display: flex;
	border-radius: 2rem;
	background: white;
	@media only screen and (max-width: 480px) {
		width: 90%;
	}
`;
const Title = styled.div`
	// border: 3px solid #313030;
	flex-grow: 0.5;
	writing-mode: tb-rl;
	padding: 1rem;
	padding-top: 1.2rem;
	font-size: 1.5rem;
	letter-spacing: 1rem;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;
const Infobox = styled.div`
	/* border: 3px solid red; */
	width: 100%;
	margin-bottom: -0.1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex-wrap: nowrap;
`;
const Linesolo = styled.div`
	/* border-right: 1px solid black; */
	border-top: 1px solid rgb(0, 0, 0);
	flex-grow: 4;
	margin-top: -0.1rem;
	margin-bottom: -0.1rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	/* border: 1px solid red; */
`;
const Item = styled.div`
	border-left: 1px solid black;
	border-right: 1px solid black;
	/* border: 1px solid red; */
	margin-top: -0.2rem;
	height: 2.5rem;
	width: 4rem;
	display: flex;
	align-items: center;
`;
const Input = styled.input`
	border: 1px solid white;
	width: 25%;
	height: 70%;
	margin-top: -0.2rem;
	@media only screen and (max-width: 480px) {
		width: 20%;
	}
`;
const Inputpwd = styled.input`
	border: 1px solid white;
	width: 50%;
	height: 70%;
	margin-top: -0.2rem;
`;
const Checkagreement = styled.div`
	border: 5px solid black;
	width: 77%;
	height: 7rem;
	margin: 1rem 0rem 0rem 0rem;
	padding-left: 2rem;
	padding-bottom: 1rem;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 1.2rem;
	background: white;
	@media only screen and (max-width: 480px) {
		font-size: 1rem;
		width: 82%;
	}
`;
