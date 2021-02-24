import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

export default function SubNav(): ReactElement {
	const Main = styled.div`
		// border: 3px solid red;
		position: relative;
		// bottom: 1rem;
		right: -23rem;
		bottom: 5rem;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 50%;
		width: 15%;
	`;

	const Navsole = styled.div`
		// border: 1px solid red;
		margin: 0.2rem 0rem;
		display: flex;
		font-weight: bold;
	`;
	const Navin = styled.div`
		// border: 1px solid black;
		width: 40%;
		background: ${(props) => props.color};
		// flex-grow: 1.3;
	`;

	const Navout = styled.div`
		// border: 1px solid blue;
		width: 60%;
		background: ${(props) => props.color};
		// flex-grow: 2;
	`;

	const colorType = {
		color1: "#c2aeae",
		color2: "#c0ca82",
		color3: "#75adcc",
		color4: "#be57a7",
		color5: "#ff5f5f",
		color6: "#c4c4c4",
		color7: "#e1ec9d",
		color8: "#5996f2",
		color9: "#df86e1",
		color10: "#e88383",
	};

	return (
		<Main>
			<Navsole>
				<Navin color={colorType.color1} />
				<Navout color={colorType.color6}>일기쓰기</Navout>
			</Navsole>
			<Navsole>
				<Navin color={colorType.color2} />
				<Navout color={colorType.color7}>일기보기</Navout>
			</Navsole>
			<Navsole>
				<Navin color={colorType.color3} />
				<Navout color={colorType.color8}>훔쳐보기</Navout>
			</Navsole>
			<Navsole>
				<Navin color={colorType.color4} />
				<Navout color={colorType.color9}>나의정보</Navout>
			</Navsole>
			<Navsole>
				<Navin color={colorType.color5} />
				<Navout color={colorType.color10}>제작자</Navout>
			</Navsole>
		</Main>
	);
}

SubNav.propTypes = {
	color: PropTypes.string.isRequired,
};
