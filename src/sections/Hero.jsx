import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import NeuralNet from "../components/NeuralNet.jsx";
import Camera from "../components/Camera.jsx";
import Workstation from "../components/Workstation.jsx";
import Cube from "../components/Cube.jsx";
import useTypewriter from "../hooks/useTypewriter.jsx";

const GREETING = "Hi, I am Kristian ";
const HEADLINE = "AI/ML Engineer";

// Mounts only once everything else in its Suspense boundary has loaded
const SceneReady = ({ onReady }) => {
	useEffect(() => {
		onReady(true);
	}, [onReady]);

	return null;
};

const Hero = () => {
	const [sceneReady, setSceneReady] = useState(false);
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	// Start typewriter immediately
	const firstLine = useTypewriter(GREETING, 100, 0);
	const secondLine = useTypewriter(HEADLINE, 100, 2000);

	// Mount the scene once typing is done (its first render blocks the main thread and
	// would stall the typewriter), then fade it in when its models have loaded
	const typingDone = secondLine === HEADLINE;

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					{firstLine}
					{firstLine === GREETING && <span className="waving-hand">👋</span>}
				</p>
				<p className="hero_tag text-white-700">{secondLine}</p>
			</div>
			<div className={`hero-canvas ${sceneReady ? "opacity-100" : "opacity-0"}`}>
				{typingDone && (
					<Canvas className="h-full w-full hero-canvas-fade">
						<Suspense fallback={null}>
							<PerspectiveCamera makeDefault position={[0, 0, 20]} />
							<group>
								<NeuralNet position={sizes.neuralNetPosition} scale={sizes.neuralNetScale} />
								<Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
							</group>
							<Camera isMobile={isMobile}>
								<Workstation scale={sizes.workstationScale} position={sizes.workstationPosition} rotation={[0, 0, 0]} />
							</Camera>
							<ambientLight intensity={4.5} />
							<directionalLight intensity={6} position={[10, 10, 10]} />
							<directionalLight intensity={5} position={[-10, -10, -10]} />
							<hemisphereLight intensity={1} />
							<SceneReady onReady={setSceneReady} />
						</Suspense>
					</Canvas>
				)}
			</div>
		</section>
	);
};

export default Hero;
