import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float speed={3} rotationIntensity={2} floatIntensity={3}>
			<mesh castShadow receiveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshBasicMaterial polygonOffset polygonOffsetFactor={-5} flatShading />
				<Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
			</mesh>
		</Float>
	);
};
const BallCanvas = ({ icons }) => {
	return (
		<Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				{icons.map((icon, index) => (
					<Ball key={index} imgUrl={icon} />
				))}
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
