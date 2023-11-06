import { useControls } from "leva";
import { Avatar } from "./Avatar";
  
export const Experience = () => {
        const { animation } = useControls({
            animation: {
                value: "Typing",
                options: ["Typing", "Falling", "Standing"],
            },
        });

    return (
        <>
            <ambientLight intensity={1}/>
            <group position-y={-1}>
                <Avatar animation={animation} />
                {animation === "Typing" && (
                    <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
                        <boxGeometry />
                        <meshStandardMaterial color="white" />
                    </mesh>
                )}

                <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
                    <planeGeometry />
                    <meshStandardMaterial color="white" />
                </mesh>
            </group>
        </>
    );
};
  