import React, { ReactElement } from "react";
import styled from "styled-components";
import picture from "../assets/images/drawing.png";
import section from "../assets/images/paper.png";
import cloudy from "../assets/images/weather/1.png";
import sunny from "../assets/images/weather/2.png";
import rainy from "../assets/images/weather/3.png";
import snowy from "../assets/images/weather/4.png";
import windy from "../assets/images/weather/5.png";

export default function DiaryContent(): ReactElement {
	const Main = styled.div`
		width: 100%;
	`;
	const Title = styled.div`
		border: 3px solid black;
		border-radius: 1rem;
		flex-grow: 0.4;
		margin: 3rem 5rem 1rem 3rem;
		width: 78%;
		padding-left: 1rem;
		display: flex;
		align-items: center;
		font-size: 1.2rem;
	`;

	const Date = styled.div`
		border: 2px solid black;
		border-radius: 0.5rem;
		flex-grow: 0.3;
		box-sizing: border-box;
		display: flex;
		width: 97%;
	`;

	const Option = styled.span`
		border-right: 2px solid black;
		font-size: 1.3rem;
		width: 10%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const OptionContent = styled.span`
		font-size: 1.3rem;
		border-right: 2px solid black;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30%;
		height: 100%;
	`;

	const Type = styled.div`
		border: 3px solid black;
		border-radius: 1rem;
		flex-grow: 10;
		margin: 0rem 5rem 1rem 3rem;
		padding-top: 1rem;
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
	`;

	const Img = styled.img.attrs({
		src: picture,
	})`
		width: 96%;
		height: 250px;
		margin: 0.2rem 0.2rem;
		border: 0.15rem solid black;
		box-sizing: border-box;
	`;
	const Back = styled.div`
		background-size: cover;
		background: url(${section});
		width: 100.5%;
		height: 18rem;
		margin: 0.2rem -0.5rem;
		border: 0.15rem solid black;
		box-sizing: border-box;
	`;

	const Content = styled.div`
		font-size: 1.3rem;
		letter-spacing: 0.7rem;
		word-spacing: 0.7rem;
		line-height: 1.8rem;
		margin-left: 0.4rem;
		margin-top: 0.2rem;
		word-break: normal;
		box-sizing: border-box;
		//border: 1px solid red;
		width: 32.8rem;
	`;

	const Weather1 = styled.img.attrs({
		src: cloudy,
		sunny,
		rainy,
		snowy,
		windy,
	})`
		width: 2rem;
		height: 1rem;
	`;

	return (
		<Main>
			<Title>제목: 오늘은 맛있는 햄버거를 먹었다.</Title>
			<Type>
				<Date>
					<Option>날짜</Option>
					<OptionContent>2021년 2월 21일</OptionContent>
					<Option>날씨</Option>
				</Date>
				<Img />
				<Back>
					<Content>
						오늘은 엄마랑 치과를 갔다. 배가 많이 고팠는데 엄마가 돈까스를 사주셨다. ㅎㅎ 치즈 돈까스를 먹었는데 아저씨가
						양을 많이줘서 기분이 좋았다 다음에 또. 오고싶다 다음에 오면 피자돈까스를 먹어야겠다 옆사람이 먹는데 디게
						맛있어 보였다. 오늘은 밥먹고 일찍 자야겠다 코딩을 너무 많이했다 뽀삐랑 산책도 해야지 031,$
					</Content>
				</Back>
			</Type>
		</Main>
	);
}
