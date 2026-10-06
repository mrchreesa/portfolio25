import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { easing } from "maath";

const LAYERS = [3, 4, 2];
const LAYER_GAP = 1.1;
const NODE_GAP = 0.65;
const COLOR = "#D6D9E9";

// Node positions per layer, centred on the origin
const layers = LAYERS.map((count, l) =>
	Array.from({ length: count }, (_, i) => [(l - (LAYERS.length - 1) / 2) * LAYER_GAP, ((count - 1) / 2 - i) * NODE_GAP, 0]),
);
const nodes = layers.flatMap((layer, l) => layer.map((position) => ({ position, layer: l })));
// Fully connected between neighbouring layers
const edges = layers.slice(0, -1).flatMap((layer, l) => layer.flatMap((from) => layers[l + 1].map((to) => [from, to])));

const NeuralNet = ({ scale, ...props }) => {
	const groupRef = useRef();
	const nodeRefs = useRef([]);

	useFrame(({ clock }, delta) => {
		const t = clock.getElapsedTime();

		// Sway rather than spin, so the layers stay readable
		groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.5;

		// Forward pass: each layer lights up in turn, then a beat of rest
		const activeLayer = Math.floor(t * 1.2) % (LAYERS.length + 1);
		nodeRefs.current.forEach((mesh, i) => {
			const size = nodes[i].layer === activeLayer ? 1.5 : 1;
			easing.damp3(mesh.scale, [size, size, size], 0.12, delta);
		});
	});

	return (
		<Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
			<group {...props} scale={scale} ref={groupRef}>
				{edges.map(([from, to], i) => (
					<Line key={i} points={[from, to]} color={COLOR} lineWidth={1} transparent opacity={0.35} />
				))}
				{nodes.map(({ position }, i) => (
					<mesh key={i} position={position} ref={(mesh) => (nodeRefs.current[i] = mesh)}>
						<sphereGeometry args={[0.12, 16, 16]} />
						<meshBasicMaterial color={COLOR} />
					</mesh>
				))}
			</group>
		</Float>
	);
};

export default NeuralNet;
