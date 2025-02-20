import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
	const { progress } = useProgress();
	const [display, setDisplay] = useState("flex");

	// useEffect(() => {
	// 	if (progress === 100) {
	// 		const timeout = setTimeout(() => {
	// 			setDisplay("none");
	// 		}, 500);

	// 		return () => clearTimeout(timeout);
	// 	}
	// }, [progress]);

	return (
		<Html
			as="div"
			center
			style={{
				display: display,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				opacity: progress === 100 ? 0 : 1,
				transition: "opacity 0.5s ease",
			}}
		>
			<span className="canvas-loader"></span>
			<p
				style={{
					fontSize: 40,
					color: "#F1F1F1",
					fontWeight: 800,
					marginTop: 40,
					display: "flex",
				}}
			>
				<span>.</span> <span>.</span> <span>.</span>
			</p>
			<p
				style={{
					fontSize: 24,
					color: "#F1F1F1",
					fontWeight: 600,
					marginTop: 10,
				}}
			>
				{/* {progress.toFixed(2)}% */}
			</p>
			<style>
				{`
					span {
						animation: dotAnimation 1.4s infinite;
						letter-spacing: 5px;
					}

					@keyframes dotAnimation {
						0%, 80%, 100% {
						opacity: 0;
						}
						40% {
						opacity: 1;
						}
							
					}
						span:nth-child(1) {
							animation-delay: -0.32s;
						}
						span:nth-child(2) {
							animation-delay: -0.16s;
						}
						
				`}
			</style>
		</Html>
	);
};

export default CanvasLoader;
