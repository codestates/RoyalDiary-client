import React, { ReactElement, useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CanvasDraw from "react-canvas-draw";
import axios from "axios";
import { url } from "inspector";
import pointer from "../assets/images/pencil.png";

interface setImgProps {
	conveyImgUrl: (e: string) => void;
	conveyImgData: (e: string) => void;
	weatherNow: string;
	contentId: number;
}

export default function CPaint(props: setImgProps): ReactElement {
	const { conveyImgUrl, conveyImgData, weatherNow, contentId } = props;
	const [color, changeColor] = useState("black");
	const [showColor, displayColor] = useState("none");
	const [brushSize, changeSize] = useState(2.5);
	// 메세지
	const [message, setMessage] = useState("");
	const [msgVisible, setMsgVisible] = useState(false);

	const firstCanvas = useRef<any>(null);
	// const secondCanvas = useRef<any>(null);

	const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

	const setImgUrl = (event: string) => {
		conveyImgUrl(event);
	};
	const setImgData = (event: string) => {
		conveyImgData(event);
	};

	async function dataURLtoFile(dataurl: string) {
		const blobBin = atob(dataurl.split(",")[1]); // base64 데이터 디코딩
		const array = [];
		for (let i = 0; i < blobBin.length; i += 1) {
			array.push(blobBin.charCodeAt(i));
		}
		const u8arr = new Uint8Array(array);
		const file = new Blob([u8arr], { type: "image/png" }); // Blob 생성
		const formdata = new FormData(); // formData 생성
		formdata.append("img", file); // file data 추가
		const imgUrl = await axios
			.post("https://royal-diary.ml/image", formdata, {
				headers: { "content-Type": "multipart/form-data" },
			})
			.then((res) => {
				const returnedUrl = res.data.imgUrl;
				return returnedUrl;
			})
			.catch((err) => {
				console.log("server error occured");
			});
		return imgUrl;
		// axios 로 서버에 img 파일 보내기
		// 유알엘을 리턴하여 saveAsPNG 에서 사용할 수 있도록!!
	}
	const saveAsPNG = async () => {
		const canvas = document.querySelector(".CanvasDraw canvas:nth-child(2)") as HTMLCanvasElement;
		const imgUrl = canvas.toDataURL("image/png");
		// 리턴받은 url 을 handleSaveClick 에 전달
		const returnedUrl = await dataURLtoFile(imgUrl);
		return returnedUrl;

		/* 이미지 데이터로 원하는 이미지 엘리먼트에 이미지를 만들 수 있다.
		const newImage = document.createElement("img");
		newImage.src = image;
		document.querySelector(Main)?.append(newImage);
		*/
		/* 이미지 파일을 다운받을수 있다. 
		 downloadImage(image, "my-canvas.png");
		*/
	};

	/* 이미지 파일 다운받는 함수 
	function downloadImage(data: string, filename: string) {
		const a = document.createElement("a");
		a.href = data;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
	}
	*/
	const handleSaveClick = async () => {
		const isLoginSession = JSON.parse(sessionStorage.getItem("isLogin") || "{}");
		if (isLoginSession !== true) {
			setMessage("로그인을 해주세요 :)");
			setMsgVisible(true);
			setTimeout(() => {
				setMsgVisible(false);
			}, 3000);
			return;
		}
		const data = firstCanvas.current.getSaveData();
		// console.log(sessionStorage.getItem("saveDraw"));
		setImgData(data);
		const imgUrl = await saveAsPNG();
		setImgUrl(imgUrl);
		setMessage("그림이 등록되었습니다.");
		setMsgVisible(true);
		setTimeout(() => {
			setMsgVisible(false);
		}, 3000);
		// multer 에 전송후 받은 url 과 좌표 데이터를 sessionStorage 에 저장해서 글쓰기 완료 버튼을 눌렀을때 사용한다..!
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

	const showWeather = (e: string) => {
		setMessage(e);
		setMsgVisible(true);
		setTimeout(() => {
			setMsgVisible(false);
		}, 1500);
	};

	const reloadPaint = async (e: number) => {
		const accessToken = sessionStorage.getItem("accessToken");
		const contentid = e;

		await axios
			.get("https://royal-diary.ml/contents/content", {
				headers: {
					Authorization: `Bearer ${accessToken}`,
					"Content-Type": "application/json",
					withCredentials: true,
				},
				params: {
					contentId: `${contentid}`,
				},
			})
			.then((res) => {
				// console.log(res.data.data.imgMain);
				const imgData = res.data.data.imgMain;
				firstCanvas.current.loadSaveData(imgData);
			})
			.catch((err) => {
				console.log("error ocurred!!");
			});

		// const imgData = await getImgData(contentid);
		// console.log(imgData);

		// const secondData = secondCanvas.current.loadSaveData();
	};

	useEffect(() => {
		if (weatherNow !== "") {
			if (weatherNow === "cloudy") {
				showWeather("날씨가 흐려요");
			} else if (weatherNow === "sunny") {
				showWeather("날씨가 화창해요");
			} else if (weatherNow === "rainy") {
				showWeather("오늘은 비가 와요");
			} else if (weatherNow === "snowy") {
				showWeather("오늘은 눈이 내려요");
			} else {
				showWeather("오늘은 바람이 불어요");
			}
		}
		if (contentId !== 0) {
			// console.log("clicked contentId!!");
			reloadPaint(contentId);
		}
		// 새로고침 할때 그림이 유지된다. 다만 색상변경 등의 상태변화가 있으면 마찬가지로 그림이 리로드됨....
		// const drawData = sessionStorage.getItem("saveDraw") as string;
		// if (drawData !== null) firstCanvas.current.loadSaveData(drawData); // 새로고침할 경우 저장된 좌표데이터를 로드
	}, [weatherNow, contentId]);

	return (
		<Main>
			{/* {console.log(firstData)} */}
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
			<DivValid>
				<ValidityBox theme={msgVisible}>{message}</ValidityBox>
			</DivValid>
			<Buttons>
				<Button onClick={clear1}>새종이</Button>
				<Button onClick={undo1}>마지막지우기</Button>
				<Button onClick={handleSaveClick}>다그렸다버튼</Button>
				{/* <NotificationModal modalIsOpen={modalVisible} setIsOpen={setModalVisible} message={modalMessage} /> */}
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
	height: 100%;
	margin: 1rem 1rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		height: 80%;
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
	height: 5.5em;
	margin-top: 0.5rem;
	padding-left: 1rem;
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
	/* position: relative; */
	margin-bottom: 1rem;
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
	:hover {
		cursor: pointer;
	}
	@media only screen and (max-width: 480px) {
		font-size: 0.8rem;
	}
`;
const DivValid = styled.div`
	/* border: 3px solid green; */
	width: 100%;
	height: 3rem;
	margin-bottom: 0.3rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const ValidityBox = styled.div`
	/* border: 3px solid red; */
	/* width: 9rem; */
	height: 1.9rem;
	padding: 0rem 1rem 0rem 1rem;
	margin-right: 1.1rem;
	background: #f08080;
	display: ${(props) => (props.theme === true ? "flex" : "none")};
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	animation: a 2s;
	@keyframes a {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 480px) {
		::after {
			border-top: 0px solid transparent;
			border-left: none;
			border-right: none;
			border-bottom: 10px solid #f08080;
			content: "";
			position: absolute;
			top: -10px;
			left: 120px;
		}
	}
`;
