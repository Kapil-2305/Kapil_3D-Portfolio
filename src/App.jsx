import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import ScrollManager from "./components/ScrollManager";
import Interface from "./components/Interface";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import { Leva } from "leva";
import {framerMotionConfig} from './config'

function App() {
	// const [section, setSection] = useState(0);
	// const [menuOpened, setMenuOpened] = useState(false);

	// useEffect(() => {
	// 	setMenuOpened(false);
	// }, [section]);

	return (
		<>
			<Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
				<color attach="background" args={["#e6e7ff"]} />

				<ScrollControls pages={4} damping={0.1}>
					{/* <ScrollManager/> */}
					<Scroll>
						<Experience />
					</Scroll>
					<Scroll html>
						<Interface />
					</Scroll>
				</ScrollControls>
			</Canvas>

			
			{/* <MotionConfig
				transition={{
					...framerMotionConfig,
				}}
			>
				

				<Menu />
				<Cursor />
			</MotionConfig> */}
			
			{/* <Leva /> */}
		</>
	);
}

export default App;
