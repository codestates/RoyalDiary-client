import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";

export default function Agreement(): ReactElement {
	const Main = styled.div`
		// border: 1px solid red;
		// flex-grow: 1;
		display: flex;
		flex-direction: column;
	`;
	const Inputinfo = styled.div`
		border: 5px solid black;
		margin: 1rem auto;
		height: 10rem;
		flex-grow: 1;
		width: 38rem;
		display: flex;
		flex-direction: row;
		border-radius: 2rem;
		background: white;
	`;
	const Title = styled.div`
		// border: 3px solid red;
		flex-grow: 0.5;
		writing-mode: tb-rl;
		width: 2rem;
		text-align: center;
		padding-right: 1rem;
		font-size: 1.5rem;
		letter-spacing: 1rem;
	`;
	const Infobox = styled.div`
		// border: 3px solid black;
		// border-radius: 2rem;
		margin: -0.25rem;
		// margin-right: 1rem;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
		// margin-top: 0rem;
	`;
	const Linesolo = styled.div`
		border-bottom: 1px solid black;
		display: flex;
		flex-grow: 1;
		padding: auto;
		vertical-align: middle;
	`;

	const Linelastsolo = styled.div`
		// border-bottom: 0.5px solid black;
		display: flex;
		flex-grow: 1;
		// align-items: center;
		padding: auto;
		vertical-align: middle;
	`;

	const Item = styled.div`
		border-top: 1px solid black;
		border-right: 1px solid black;
		border-left: 1px solid black;
		width: 4rem;
		height: 82%;
		text-align: center;
		align-items: center;
		padding-top: 0.5rem;
		margin-top: -0.05rem;
	`;
	const Input = styled.input`
		border: 1px solid white;
		margin: 0.4rem 0.3rem 0.3rem 0.3rem;
		width: 100%
		font-size: 1.2rem;
		// background: #f3f3e9;
	`;

	// const lastline = {
	// 	border: "1px solid blue",
	// };

	const Checkagreement = styled.div`
		border: 5px solid black;
		width: 77%;
		height: 10rem;
		margin: 1rem auto;
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		padding-left: 2rem;
		justify-content: space-around;
		font-size: 1.2rem;
		background: white;
	`;

	const Checkstyle = {
		zoom: 1.3,
	};

	return (
		<Main>
			<Inputinfo>
				<Title>지원자</Title>
				<Infobox>
					<Linesolo>
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
						<Input placeholder="영문+숫자+특수문자 8자이상" />
					</Linesolo>
					<Linelastsolo>
						<Item>암호확인</Item>
						<Input placeholder="암호를 확인합니다." />
					</Linelastsolo>
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
