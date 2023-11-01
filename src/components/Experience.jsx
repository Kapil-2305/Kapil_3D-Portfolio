import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
    const {animation} = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Standing", "Falling"]
        }
    });

    return (
        <>
            <OrbitControls />
            <Sky />
            <Environment />
            <group position-y={-1}>
                <Avatar animation={animation}/>
            </group>
        </>
    );
};
