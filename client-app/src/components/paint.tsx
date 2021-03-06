import React, { ReactElement, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import CanvasDraw from "react-canvas-draw";
import axios from "axios";

export default function CPaint(): ReactElement {
	const [color, changeColor] = useState("black");
	const [showColor, displayColor] = useState("none");
	const [brushSize, changeSize] = useState(2.5);
	const firstCanvas = useRef<any>(null);
	// const secondCanvas = useRef<any>(null);

	const handleRange = (event: any) => {
		const size = Number(event.target.value);
		changeSize(size);
	};
	const handleMouseHover = () => {
		if (showColor === "none") {
			displayColor("flex");
		} else {
			displayColor("none");
		}
	};
	const handleColorClick = (event: any) => {
		const newColor = event.target.style.backgroundColor;
		changeColor(newColor);
	};
	const clear1 = () => {
		firstCanvas.current.clear();
	};
	const undo1 = () => {
		firstCanvas.current.undo();
	};
	const saveAsPNG = () => {
		const canvas = document.querySelector(".CanvasDraw canvas:nth-child(2)") as HTMLCanvasElement;
		const imgUrl = canvas.toDataURL("image/png");
		console.log("PNG image data");
		console.log(imgUrl);
		dataURLtoFile(imgUrl);

		/* 이미지 데이터로 원하는 이미지 엘리먼트에 이미지를 만들 수 있다.
		const newImage = document.createElement("img");
		newImage.src = image;
		document.querySelector(Main)?.append(newImage);
		*/
		/* 이미지 파일을 다운받을수 있다. 
		 downloadImage(image, "my-canvas.png");
		*/
	};
	function dataURLtoFile(dataurl: string) {
		const blobBin = atob(dataurl.split(",")[1]); // base64 데이터 디코딩
		const array = [];
		for (let i = 0; i < blobBin.length; i += 1) {
			array.push(blobBin.charCodeAt(i));
		}
		const u8arr = new Uint8Array(array);
		const file = new Blob([u8arr], { type: "image/png" }); // Blob 생성
		const formdata = new FormData(); // formData 생성
		formdata.append("drawImg", file); // file data 추가
		console.log(file);
		// axios 로 서버에 img 파일 보내기
		// const imgUrl = axios.post("https://royaldiary.ml", formdata, {
		// 	headers: { "content-Type": "multipart/form-data" },
		// });
	}
	/* 이미지 파일 다운받는 함수 
	function downloadImage(data: string, filename: string) {
		const a = document.createElement("a");
		a.href = data;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
	}
	*/
	const handleSaveClick = () => {
		saveAsPNG();
		const data = firstCanvas.current.getSaveData();
		console.log("모든좌표 데이터", data);
		// secondCanvas.current.loadSaveData(data);
	};
	// Three methods used to revise pre-drawing
	// const clear2 = () => {
	// 	secondCanvas.current.clear();
	// };
	// const undo2 = () => {
	// 	secondCanvas.current.undo();
	// };
	// const revise = () => {
	// 	const secondData = secondCanvas.current.getSaveData();
	// 	console.log("SecondData", secondData); // 두번째 캔버스의 모든 데이터.
	// };

	return (
		<Main>
			<CanvasDraw
				className="CanvasDraw"
				brushRadius={brushSize}
				brushColor={color}
				lazyRadius={1}
				catenaryColor="red"
				hideGrid
				ref={firstCanvas}
				style={canvasStyle}
			/>
			{/* <CanvasDraw brushRadius={1} brushColor={color} hideGrid ref={secondCanvas} style={canvasStyle} /> */}
			<Control className="colors">
				<Range type="range" onChange={handleRange} min="0.1" max="20" step="0.1" />
				{/* <Eraser className="fas fa-eraser" /> */}
				<Paint className="fas fa-brush" onMouseEnter={handleMouseHover} /* onMouseLeave={handleMouseHover} */ />
				<Colors theme={showColor}>
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "white" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#2c2c2c" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#FF3B30" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#FF9500" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#FFCC00" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#4CD963" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#5AC8FA" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#0579FF" }} />
					<Color className="singleColor" onClick={handleColorClick} style={{ backgroundColor: "#5856D6" }} />
				</Colors>
			</Control>
			<Buttons>
				<Button onClick={clear1}>새종이</Button>
				<Button onClick={undo1}>마지막지우기</Button>
				<Button onClick={handleSaveClick}>다그렸다버튼</Button>
				{/* <Button onClick={clear2}>newPaper</Button>
				<Button onClick={undo2}>undo</Button>
				<Button onClick={revise}>Save Revision</Button> */}
			</Buttons>
		</Main>
	);
}
const Main = styled.div`
	/* border: 3px solid black; */
	/* background: white; */
	height: 70%;
	margin: 1rem 1rem 3rem 1rem;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		height: 50%;
	}
`;
const canvasStyle = {
	width: "100%",
	height: "100%",
	border: "3px solid black",
	// background: "white",
};
const Control = styled.div`
	/* border: 3px solid red; */
	position: relative;
	top: 2rem;
	display: flex;
	justify-content: flex-start;
`;
const Range = styled.input`
	width: 45px;
	text-align: center;
	/* padding: 16px; */
`;
const Paint = styled.i`
	/* border: 1px solid black; */
	width: 20px;
	padding: 16px;
	font-size: 25px;
	display: flex;
	align-items: center;
`;
const Colors = styled.div`
	/* border: 3px solid blue; */
	width: 100%;
	display: ${(props) => props.theme};
	/* justify-content: center; */
	align-items: center;
	flex-wrap: wrap;
	animation: a 2s;
	@keyframes a {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
const Color = styled.div`
	width: 40px;
	height: 40px;
	margin-right: 1%;
	border-radius: 25px;
	cursor: pointer;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

	@media only screen and (max-width: 480px) {
		width: 30px;
		height: 30px;
	}
`;
const Buttons = styled.div`
	/* border: 3px solid red; */
	position: relative;
	bottom: -3rem;
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	/* @media only screen and (max-width: 480px) {
		bottom: -4rem;
	} */
`;
const Button = styled.button`
	background: #f6f6ee;
	margin-right: 1rem;
	font-size: 1rem;
	font-weight: bold;
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
	}
`;
