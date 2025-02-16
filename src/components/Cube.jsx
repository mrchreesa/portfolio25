import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";

const Cube = (props) => {
	const { nodes, materials } = useGLTF("/models/cube.glb");

	const cubeRef = useRef();
	const [hovered, setHovered] = useState(false);

	useGSAP(() => {
		gsap.timeline({
			repeat: -1,
			repeatDelay: 0.5,
		}).to(cubeRef.current.rotation, {
			y: hovered ? "+=2" : `+=${Math.PI * 2}`,
			x: hovered ? "+=2" : `-=${Math.PI * 2}`,
			duration: 5.5,
			stagger: {
				each: 0.15,
			},
			yoyo: true,
		});
	});
	return (
		<Float floatIntensity={1}>
			<group {...props} dispose={null}>
				<group ref={cubeRef} onPointerEnter={() => setHovered(true)} rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
					<mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Chrome} />
					<mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.Chrome} />
				</group>
			</group>
		</Float>
	);
};

useGLTF.preload("/models/cube.glb");

export default Cube;
