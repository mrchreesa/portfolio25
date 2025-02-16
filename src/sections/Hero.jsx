import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import ReactLogo from "../components/ReactLogo.jsx";
import Camera from "../components/Camera.jsx";
import Workstation from "../components/Workstation.jsx";
import Cube from "../components/Cube.jsx";
import { useProgress } from "@react-three/drei";
import useTypewriter from "../hooks/useTypewriter.jsx";

const Hero = () => {
	const [showCanvas, setShowCanvas] = useState(false);
	const { progress } = useProgress();
	// const [typewriterComplete, setTypewriterComplete] = useState(false);
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	// Start typewriter immediately
	const firstLine = useTypewriter("Hi, I am Kristian ", 100, 0);
	const secondLine = useTypewriter("Welcome to my Portfolio", 100, 2000);

	// Show canvas after typewriter and loading are complete
	useEffect(() => {
		const totalTypewriterTime = 4500; // Adjust based on your typewriter timing
		// if (progress === 100) {
		setTimeout(() => {
			setShowCanvas(true);
		}, totalTypewriterTime);
		// }
	}, []);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					{firstLine}
					{firstLine === "Hi, I am Kristian " && <span className="waving-hand">👋</span>}
				</p>
				<p className="hero_tag text-gray_gradient">{secondLine}</p>
			</div>
			<div
				className="w-full h-full absolute inset-0"
				style={{
					opacity: showCanvas ? 1 : 0,
					transition: "opacity 1s ease-in-out",
				}}
			>
				{showCanvas && (
					<Canvas className="h-full w-full">
						<Suspense fallback={<CanvasLoader />}>
							<PerspectiveCamera makeDefault position={[0, 0, 20]} />
							<group>
								{/* <Target position={sizes.targetPosition} renderOrder={1} /> */}
								<ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactLogoScale} />
								{/* <Rings position={sizes.ringPosition} /> */}
								<Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
							</group>
							<Camera isMobile={isMobile}>
								{/* <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} /> */}
								<Workstation scale={sizes.workstationScale} position={sizes.workstationPosition} rotation={[0, 0, 0]} />
							</Camera>
							<ambientLight intensity={4.5} />
							<directionalLight intensity={6} position={[10, 10, 10]} />
							<directionalLight intensity={5} position={[-10, -10, -10]} />
							<hemisphereLight intensity={1} />
						</Suspense>
					</Canvas>
				)}
			</div>
		</section>
	);
};

export default Hero;
