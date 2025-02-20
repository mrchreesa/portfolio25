import { useGLTF, useProgress } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Suspense } from "react";

const Workstation_comp = (props) => {
	const { nodes, materials } = useGLTF("/models/retro_computer_compress.glb");
	return (
		<group {...props} dispose={null}>
			<mesh castShadow receiveShadow geometry={nodes.pCube36_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube42_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.pCylinder12_Screen1_0.geometry} material={materials.Screen1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube257_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube259_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.polySurface7_Desk1_0.geometry} material={materials.Desk1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube283_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube291_Computer1_0.geometry} material={materials.Computer1} />
			<mesh castShadow receiveShadow geometry={nodes.pCube1_Desk1_0.geometry} material={materials.Desk1} position={[-0.014, 0.116, 0]} scale={[0.336, 0.005, 0.185]} />
			<mesh castShadow receiveShadow geometry={nodes.pPlane1_Ground1_0.geometry} material={materials.Ground1} position={[0.008, 0, 0.005]} scale={[0.837, 0.645, 0.645]} />
			<mesh castShadow receiveShadow geometry={nodes.pCube14_Screen1_0.geometry} material={materials.Screen1} position={[-0.082, 0.29, -0.043]} scale={[0.11, 0.029, 0.003]} />
			<mesh castShadow receiveShadow geometry={nodes.pCube255_Computer1_0.geometry} material={materials.Computer1} position={[-0.21, 0.163, -0.049]} scale={[0.02, 0.044, 0.031]} />
			<mesh castShadow receiveShadow geometry={nodes.pCylinder38_Wires_0.geometry} material={materials.Wires} position={[-0.089, 0.193, -0.036]} rotation={[1.548, 0, 0]} scale={0.001} />
		</group>
	);
};

useGLTF.preload("/models/retro_computer_compress.glb");
export default Workstation_comp;
