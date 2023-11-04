import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

function App() {
	return (
		<div>
			<Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
				<color attach="background" args={["#ececec"]} />

				<ScrollControls pages={4} damping={0.1}>
					<Experience />
					<Scroll html>
						<h1 className="text-3xl font-bold underline">Hello World</h1>
					</Scroll>
				</ScrollControls>
			</Canvas>
		</div>
	);
}

export default App;
