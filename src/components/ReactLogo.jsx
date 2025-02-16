import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ReactLogo = ({ scale, ...props }) => {
	const { nodes, materials } = useGLTF("/models/react.glb");
	const meshRef = useRef();

	useFrame((state, delta) => {
		meshRef.current.rotation.y += delta * 1; // Adjust speed by changing the multiplier (2)
	});

	return (
		<Float floatIntensity={2} rotationIntensity={1} speed={2}>
			<group {...props} dispose={null}>
				<mesh ref={meshRef} geometry={nodes["React-Logo_Material002_0"].geometry} material={materials["Material.002"]} position={[0, 0.079, 0.181]} rotation={[0, 0, -Math.PI / 2]} scale={[0.392 * scale, 0.392 * scale, 0.527 * scale]} />
			</group>
		</Float>
	);
};

useGLTF.preload("/react.glb");

export default ReactLogo;
