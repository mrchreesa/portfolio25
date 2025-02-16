import { useGLTF, useProgress } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Suspense } from "react";

const Workstation = (props) => {
	const { nodes, materials } = useGLTF("/models/retro_computer_workstation.glb");

	const screenTxt = useLoader(TextureLoader, "textures/desk/code-min.png");
	const portfolioTxt = useLoader(TextureLoader, "textures/desk/portfolio-min.png");

	return (
		<Suspense fallback={null}>
			<group {...props} dispose={null}>
				<group scale={0.01}>
					<group position={[-8.19, 29.048, -4.342]} scale={[10.961, 2.918, 0.312]}>
						<mesh castShadow receiveShadow geometry={nodes.pCube14_Screen1_0.geometry} material={materials.Screen1} />
						<mesh castShadow receiveShadow geometry={nodes.pCube14_Desk1_0.geometry} material={materials.Desk1} />
					</group>
					<group position={[2.835, 0, -0.715]} rotation={[0, -0.265, 0]}>
						<mesh castShadow receiveShadow geometry={nodes.polySurface144_Desk1_0.geometry} material={materials.Desk1} position={[-2.212, -5.096, 0.241]} scale={[1, 1.441, 1]} />
					</group>
					<group position={[0.598, 0, 0]}>
						<mesh castShadow receiveShadow geometry={nodes.polySurface122_Desk1_0.geometry} material={materials.Desk1} position={[-2.38, -5.096, -0.12]} scale={[1, 1.441, 1]} />
					</group>
					<group position={[15.784, -3.909, 6.182]} rotation={[0, -Math.PI / 2, 0]}>
						<mesh castShadow receiveShadow geometry={nodes.polySurface145_Desk1_0.geometry} material={materials.Desk1} />
						<mesh castShadow receiveShadow geometry={nodes.polySurface145_Screen1_0.geometry} material={materials.Screen1} />
					</group>
					{/* <group position={[-17.439, -15.069, 3.027]} rotation={[0, 1.338, 0]}>
						<mesh castShadow receiveShadow geometry={nodes.polySurface146_Desk1_0.geometry} material={materials.Desk1} />
						<mesh castShadow receiveShadow geometry={nodes.polySurface146_Screen1_0.geometry} material={materials.Screen1} />
					</group> */}
					<mesh castShadow receiveShadow geometry={nodes.pCube1_Desk1_0.geometry} material={materials.Desk1} position={[-1.398, 11.593, 0]} scale={[33.609, 0.491, 18.465]} />
					<mesh castShadow receiveShadow geometry={nodes.pPlane1_Ground1_0.geometry} material={materials.Ground1} position={[0.773, 0, 0.516]} scale={[83.682, 64.541, 64.541]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube17_Desk1_0.geometry} material={materials.Desk1} position={[-5.548, 18.705, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus32_Desk1_0.geometry} material={materials.Desk1} position={[-27.706, 13.419, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube28_Desk1_0.geometry} material={materials.Desk1} position={[-9.946, 22.986, -6.096]} scale={[0.74, 0.488, 2.42]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube32_Screen1_0.geometry} material={materials.Screen1} position={[-12.423, 13.648, 1.172]} rotation={[0, 0.808, 0]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube36_Computer1_0.geometry} material={materials.Computer1} position={[-20.657, 22.975, -4.396]} scale={[3.387, 3.267, 2.283]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube42_Computer1_0.geometry} material={materials.Computer1} position={[5.472, 21.999, -6.68]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder12_Screen1_0.geometry} material={materials.Screen1} position={[13.73, 14.365, 4.508]} scale={[0.344, 2.481, 0.344]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube191_Screen1_0.geometry} material={materials.Screen1} position={[-14.654, 12.086, 5.692]} rotation={[-Math.PI / 2, 0, 1.167]} scale={[3.384, 3.264, 2.281]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube206_Desk1_0.geometry} material={materials.Desk1} position={[13.877, 5.097, -6.807]} rotation={[0, Math.PI / 2, 0]} scale={[0.998, 9.94, 1.73]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube207_Desk1_0.geometry} material={materials.Desk1} position={[-16.757, 5.097, -7.836]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.998, 9.94, 1.73]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube208_Desk1_0.geometry} material={materials.Desk1} position={[-16.757, 5.097, 5.164]} rotation={[0, -Math.PI / 2, 0]} scale={[0.998, 9.94, 1.73]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube209_Desk1_0.geometry} material={materials.Desk1} position={[17.678, 8.725, 11.81]} scale={[0.687, 12.45, 1.19]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube210_Desk1_0.geometry} material={materials.Desk1} position={[27.843, 8.725, 11.81]} rotation={[0, -Math.PI / 2, 0]} scale={[0.687, 12.45, 1.19]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube211_Desk1_0.geometry} material={materials.Desk1} position={[27.843, 8.725, -0.693]} rotation={[0, Math.PI / 2, 0]} scale={[0.687, 12.45, 1.19]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube212_Desk1_0.geometry} material={materials.Desk1} position={[17.678, 8.725, -0.693]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.687, 12.45, 1.19]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube213_Desk1_0.geometry} material={materials.Desk1} position={[-5.548, 22.615, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube214_Desk1_0.geometry} material={materials.Desk1} position={[7.094, 18.705, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube215_Desk1_0.geometry} material={materials.Desk1} position={[7.094, 25.988, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube216_Desk1_0.geometry} material={materials.Desk1} position={[-22.46, 13.904, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube217_Desk1_0.geometry} material={materials.Desk1} position={[-22.46, 21.155, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube223_Desk1_0.geometry} material={materials.Desk1} position={[29.9, 13.284, 5.069]} scale={[26.817, 0.687, 13.927]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube227_Desk1_0.geometry} material={materials.Desk1} position={[-19.029, 0.619, 5.838]} rotation={[0, Math.PI / 2, 0]} scale={[24.967, 0.627, 12.701]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube228_Desk1_0.geometry} material={materials.Desk1} position={[-25.374, 3.098, -2.84]} scale={[25.355, 0.651, 12.899]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube230_Desk1_0.geometry} material={materials.Desk1} position={[-21.901, 6.047, 3.923]} scale={[6.142, 10.259, 10.321]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube232_Desk1_0.geometry} material={materials.Desk1} position={[13.877, 5.097, 5.971]} rotation={[0, Math.PI / 2, 0]} scale={[0.998, 9.94, 1.73]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube233_Desk1_0.geometry} material={materials.Desk1} position={[20.038, 3.098, 4.386]} scale={[25.355, 0.651, 12.899]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube234_Desk1_0.geometry} material={materials.Desk1} position={[-8.143, 22.964, -6.061]} scale={[5.005, 0.415, 2.246]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube238_Desk1_0.geometry} material={materials.Desk1} position={[-9.946, 29.039, -6.096]} scale={[0.74, 0.488, 2.42]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube239_Desk1_0.geometry} material={materials.Desk1} position={[-6.313, 22.986, -6.096]} scale={[0.74, 0.488, 2.42]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube240_Desk1_0.geometry} material={materials.Desk1} position={[-6.313, 29.039, -6.096]} scale={[0.74, 0.488, 2.42]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube245_Screen1_0.geometry} material={materials.Screen1} position={[-8.224, 22.248, -2.772]} rotation={[0.406, 0, 0]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube246_Screen1_0.geometry} material={materials.Screen1} position={[18.268, 19.588, 5.628]} rotation={[0, -Math.PI / 2, 0]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube247_Screen1_0.geometry} material={materials.Screen1} position={[-14.453, 19.843, -1.484]} rotation={[0.387, 0.661, -0.245]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube248_Screen1_0.geometry} material={materials.Screen1} position={[-1.657, 23.272, -2.796]} rotation={[0.237, 0, 0]} scale={[4.261, 4.11, 2.872]}></mesh>
					<mesh castShadow receiveShadow geometry={nodes.pCube249_Screen1_0.geometry} material={materials.Screen1} position={[10.931, 21.544, -0.755]} rotation={[0.34, -0.669, 0.216]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube250_Screen1_0.geometry} material={materials.Screen1} position={[-6.572, 16.544, -2.207]} scale={[4.261, 4.11, 2.872]}>
						<meshBasicMaterial>
							<primitive attach="map" object={portfolioTxt} offset={[-1.27, -0.63]} repeat={[3, 3.4]} />
						</meshBasicMaterial>
					</mesh>
					<mesh castShadow receiveShadow geometry={nodes.pCube251_Screen1_0.geometry} material={materials.Screen1} position={[4.367, 16.544, -0.954]} rotation={[0, -Math.PI / 6, 0]} scale={[4.261, 4.11, 2.872]}>
						<meshBasicMaterial>
							<primitive attach="map" object={screenTxt} offset={[-2.1, -0.65]} repeat={[3, 3]} />
						</meshBasicMaterial>
					</mesh>
					<mesh castShadow receiveShadow geometry={nodes.pCube254_Screen1_0.geometry} material={materials.Screen1} position={[10.959, 12.213, 6.681]} rotation={[-Math.PI / 2, 0, -1.21]} scale={[3.384, 3.264, 2.281]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus79_Desk1_0.geometry} material={materials.Desk1} position={[-44.653, 8.611, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube255_Computer1_0.geometry} material={materials.Computer1} position={[-21.046, 16.263, -4.936]} scale={[1.953, 4.437, 3.1]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube256_Computer1_0.geometry} material={materials.Computer1} position={[-21.91, 6.208, 5.427]} scale={[4.711, 9.802, 6.849]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube257_Computer1_0.geometry} material={materials.Computer1} position={[-1.088, 14.806, -4.936]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube259_Computer1_0.geometry} material={materials.Computer1} position={[-25.749, 18.174, -5.702]} scale={[3.604, 8.189, 5.722]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube260_Computer1_0.geometry} material={materials.Computer1} position={[24.659, 15.25, 10.319]} rotation={[0, -Math.PI / 2, 0]} scale={[3.387, 3.267, 2.283]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube261_Computer1_0.geometry} material={materials.Computer1} position={[19.323, 16.763, 4.75]} rotation={[0, -Math.PI / 2, 0]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube262_Computer1_0.geometry} material={materials.Computer1} position={[-9.134, 14.748, -6.682]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube263_Computer1_0.geometry} material={materials.Computer1} position={[20.647, 18.144, -5.931]} scale={[3.604, 8.189, 5.722]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube264_Computer1_0.geometry} material={materials.Computer1} position={[19.253, 15.843, 10.937]} rotation={[0, -Math.PI / 2, 0]} scale={[1.953, 4.437, 3.1]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube265_Computer1_0.geometry} material={materials.Computer1} position={[22.046, 7.87, 8.197]} rotation={[0, -Math.PI / 2, 0]} scale={[4.294, 8.933, 6.242]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus80_Desk1_0.geometry} material={materials.Desk1} position={[-27.706, 16.789, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube266_Desk1_0.geometry} material={materials.Desk1} position={[-1.587, 0, -6.918]} rotation={[0, 0.698, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube267_Desk1_0.geometry} material={materials.Desk1} position={[-0.917, -0.102, -4.119]} rotation={[0, 0.414, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube268_Desk1_0.geometry} material={materials.Desk1} position={[-4.243, -0.102, -2.091]} rotation={[0, -0.318, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube269_Desk1_0.geometry} material={materials.Desk1} position={[1.857, 0, 0.373]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube270_Desk1_0.geometry} material={materials.Desk1} position={[1.224, 0, 0.144]} rotation={[0, -Math.PI / 6, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface7_Desk1_0.geometry} material={materials.Desk1} position={[-0.756, 0, -0.487]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus81_Desk1_0.geometry} material={materials.Desk1} position={[-21.375, 16.789, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus82_Desk1_0.geometry} material={materials.Desk1} position={[-21.375, 13.419, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus83_Desk1_0.geometry} material={materials.Desk1} position={[-20.161, 16.789, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus84_Desk1_0.geometry} material={materials.Desk1} position={[-20.161, 13.419, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus85_Desk1_0.geometry} material={materials.Desk1} position={[-8.725, 16.789, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus86_Desk1_0.geometry} material={materials.Desk1} position={[-8.725, 13.419, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus87_Desk1_0.geometry} material={materials.Desk1} position={[-20.161, 24.08, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus88_Desk1_0.geometry} material={materials.Desk1} position={[-20.161, 20.71, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus89_Desk1_0.geometry} material={materials.Desk1} position={[-8.725, 20.71, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus90_Desk1_0.geometry} material={materials.Desk1} position={[-8.725, 24.08, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus92_Desk1_0.geometry} material={materials.Desk1} position={[-21.375, 20.71, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus94_Desk1_0.geometry} material={materials.Desk1} position={[-27.706, 20.71, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube271_Desk1_0.geometry} material={materials.Desk1} position={[19.358, 0, 11.684]} rotation={[0, -0.698, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface13_Desk1_0.geometry} material={materials.Desk1} position={[-2.969, 1.893, -17.789]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface17_Desk1_0.geometry} material={materials.Desk1} position={[-10.741, -0.068, -18.049]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus95_Desk1_0.geometry} material={materials.Desk1} position={[-44.651, 11.985, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus96_Desk1_0.geometry} material={materials.Desk1} position={[-35.688, 11.985, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus97_Desk1_0.geometry} material={materials.Desk1} position={[-35.689, 8.611, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus98_Desk1_0.geometry} material={materials.Desk1} position={[-44.648, 19.239, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus99_Desk1_0.geometry} material={materials.Desk1} position={[-44.648, 15.869, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus100_Desk1_0.geometry} material={materials.Desk1} position={[-35.693, 19.239, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus101_Desk1_0.geometry} material={materials.Desk1} position={[-35.693, 15.869, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube273_Desk1_0.geometry} material={materials.Desk1} position={[19.532, 3.098, -2.84]} scale={[25.355, 0.651, 12.899]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus102_Desk1_0.geometry} material={materials.Desk1} position={[9.217, 8.611, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus103_Desk1_0.geometry} material={materials.Desk1} position={[9.219, 11.985, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus104_Desk1_0.geometry} material={materials.Desk1} position={[0.255, 11.985, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus105_Desk1_0.geometry} material={materials.Desk1} position={[0.253, 8.611, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube274_Desk1_0.geometry} material={materials.Desk1} position={[22.447, 13.904, -5.899]} scale={[12.645, 0.324, 6.567]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus106_Desk1_0.geometry} material={materials.Desk1} position={[9.213, 19.239, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus107_Desk1_0.geometry} material={materials.Desk1} position={[9.213, 15.869, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus108_Desk1_0.geometry} material={materials.Desk1} position={[0.259, 19.239, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pTorus109_Desk1_0.geometry} material={materials.Desk1} position={[0.259, 15.869, -5.784]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.884, 0.765, 0.884]} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder34_Desk1_0.geometry} material={materials.Desk1} position={[-1.398, 0, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube277_Desk1_0.geometry} material={materials.Desk1} position={[27.738, 0.018, -17.717]} rotation={[0, -Math.PI / 2, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface35_Desk1_0.geometry} material={materials.Desk1} position={[-2.38, -5.155, -0.12]} scale={[1, 1.441, 1]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface143_Desk1_0.geometry} material={materials.Desk1} position={[-2.198, -5.155, -0.346]} scale={[1, 1.441, 1]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface20_Desk1_0.geometry} material={materials.Desk1} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface20_Screen1_0.geometry} material={materials.Screen1} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface147_Desk1_0.geometry} material={materials.Desk1} position={[-34.894, -0.404, 1.849]} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder35_Screen1_0.geometry} material={materials.Screen1} position={[-20.408, 13.961, 6.844]} scale={[0.344, 2.481, 0.344]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube280_Computer1_0.geometry} material={materials.Computer1} position={[-1.626, 21.999, -6.68]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube281_Computer1_0.geometry} material={materials.Computer1} position={[1.927, 21.999, -6.68]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube283_Computer1_0.geometry} material={materials.Computer1} position={[22.046, 7.87, 3.358]} rotation={[0, -Math.PI / 2, 0]} scale={[4.294, 8.933, 6.242]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube284_Computer1_0.geometry} material={materials.Computer1} position={[-12.099, 4.19, -1.551]} scale={[4.064, 8.455, 5.908]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube285_Computer1_0.geometry} material={materials.Computer1} position={[7.58, 4.269, -1.868]} scale={[4.092, 8.514, 5.949]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube286_Computer1_0.geometry} material={materials.Computer1} position={[-7.499, 4.19, -1.816]} scale={[4.064, 8.455, 5.908]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube287_Computer1_0.geometry} material={materials.Computer1} position={[-25.369, 7.688, -5.713]} scale={[4.064, 8.455, 5.908]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube288_Computer1_0.geometry} material={materials.Computer1} position={[-7.958, 22.04, -5.556]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube290_Computer1_0.geometry} material={materials.Computer1} position={[-16.452, 14.798, -5.879]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube291_Computer1_0.geometry} material={materials.Computer1} position={[-13.375, 14.727, -6.795]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube292_Computer1_0.geometry} material={materials.Computer1} position={[20.617, 24.266, -5.921]} scale={[3.604, 8.189, 5.722]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube293_Computer1_0.geometry} material={materials.Computer1} position={[19.351, 18.122, 4.786]} rotation={[0, -Math.PI / 2, 0]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube294_Computer1_0.geometry} material={materials.Computer1} position={[24.727, 17.666, 10.267]} rotation={[0, -Math.PI / 2, 0]} scale={[3.387, 3.267, 2.283]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube295_Desk1_0.geometry} material={materials.Desk1} position={[-2.551, 6.042, -10.223]} rotation={[0, 0.698, 0]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube297_Screen1_0.geometry} material={materials.Screen1} position={[-16.142, 24.336, -3.564]} rotation={[0.388, 0.652, -0.231]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube298_Screen1_0.geometry} material={materials.Screen1} position={[5.953, 23.728, -2.193]} rotation={[0.236, -0.152, 0.033]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.polySurface148_Desk1_0.geometry} material={materials.Desk1} position={[3.164, 1.893, -17.84]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube299_Computer1_0.geometry} material={materials.Computer1} position={[21.227, 7.688, -5.713]} scale={[4.064, 8.455, 5.908]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube300_Computer1_0.geometry} material={materials.Computer1} position={[13.036, 14.727, -5.659]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube301_Computer1_0.geometry} material={materials.Computer1} position={[10.175, 14.727, -5.693]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube302_Computer1_0.geometry} material={materials.Computer1} position={[13.036, 20.743, -5.659]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube303_Computer1_0.geometry} material={materials.Computer1} position={[10.175, 20.743, -5.693]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube304_Computer1_0.geometry} material={materials.Computer1} position={[10.958, 27.194, -6.059]} scale={[3.138, 7.131, 4.982]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube305_Computer1_0.geometry} material={materials.Computer1} position={[20.626, 21.209, -5.9]} scale={[3.604, 8.189, 5.722]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube306_Screen1_0.geometry} material={materials.Screen1} position={[4.586, 28.242, -4.879]} scale={[4.261, 4.11, 2.872]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube307_Computer1_0.geometry} material={materials.Computer1} position={[4.798, 14.768, -5.022]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube308_Computer1_0.geometry} material={materials.Computer1} position={[-6.482, 13.839, -6.358]} scale={[1.953, 4.437, 3.1]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube309_Computer1_0.geometry} material={materials.Computer1} position={[-20.658, 25.396, -4.415]} scale={[3.387, 3.267, 2.283]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube310_Computer1_0.geometry} material={materials.Computer1} position={[0.043, 3.148, -5.098]} scale={[2.766, 6.286, 4.392]} />
					<mesh castShadow receiveShadow geometry={nodes.pCube311_Computer1_0.geometry} material={materials.Computer1} position={[3.219, 3.134, -4.768]} scale={[2.766, 6.286, 4.392]} />

					<mesh castShadow receiveShadow geometry={nodes.pCylinder38_Wires_0.geometry} material={materials.Wires} position={[-8.868, 19.265, -3.565]} rotation={[1.548, 0, 0]} scale={0.145} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder41_Wires_0.geometry} material={materials.Wires} position={[-25.55, 25.482, -3.624]} rotation={[1.548, 0, 0]} scale={0.145} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder42_Wires_0.geometry} material={materials.Wires} position={[-24.561, 21.885, -3.39]} rotation={[1.548, 0, 0]} scale={0.145} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder45_Wires_0.geometry} material={materials.Wires} position={[15.114, 0.443, 4.568]} rotation={[1.548, 0, 1.778]} scale={0.206} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder46_Wires_0.geometry} material={materials.Wires} position={[2.623, 22.39, -4.615]} rotation={[1.548, 0, 0]} scale={0.197} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder47_Wires_0.geometry} material={materials.Wires} position={[19.399, 22.024, -3.184]} rotation={[1.548, 0, 0]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder48_Wires_0.geometry} material={materials.Wires} position={[-16.677, 16.463, -3.924]} rotation={[1.548, 0, 0]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder49_Wires_0.geometry} material={materials.Wires} position={[-0.641, 1.631, -3.09]} rotation={[1.548, 0, 0.482]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder50_Wires_0.geometry} material={materials.Wires} position={[12.414, 24.04, -3.804]} rotation={[1.548, 0, 0]} scale={0.145} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder51_Wires_0.geometry} material={materials.Wires} position={[5.592, 22.385, -4.726]} rotation={[1.548, 0, 0]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder52_Wires_0.geometry} material={materials.Wires} position={[0.157, 4.779, -3.142]} rotation={[1.548, 0, 0]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder53_Wires_0.geometry} material={materials.Wires} position={[-21.513, 22.175, -3.574]} rotation={[1.548, 0, 0]} scale={0.168} />
					<mesh castShadow receiveShadow geometry={nodes.pCylinder54_Wires_0.geometry} material={materials.Wires} position={[19.859, 22.024, -3.325]} rotation={[1.548, 0, 0]} scale={0.168} />
				</group>
			</group>
		</Suspense>
	);
};

useGLTF.preload("/models/retro_computer_workstation.glb");

export default Workstation;
