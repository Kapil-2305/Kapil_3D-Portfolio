import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
    {
        title: "AI-Summarizer",
        url: "https://ai-summarizer-kapil-2305.vercel.app/",
        image: "projects/AI-Summarizer.png",
        description: "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
    },
    {
        title: "HooBank",
        url: "https://hoobank-kapil-2305.vercel.app/",
        image: "projects/HooBank.png",
        description: "HooBank is a Modern UI/UX and Business-friendly Landing page Website crafted using React, a powerful JavaScript library for building dynamic user interfaces.",
    },
    {
        title: "StudyNotion",
        url: "https://study-notion-kapil-2305.vercel.app/",
        image: "projects/StudyNotion.png",
        description: "StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
    },
    {
        title: "MernEstate",
        url: "https://mern-estate-63cd.onrender.com/",
        image: "projects/MernEstate.png",
        description: "Mern Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods.",
    },
    {
        title: "Travel-App",
        url: "https://travel-app-kapil-2305.vercel.app/",
        image: "projects/Travel-App.png",
        description: "Build and Deploy a Fully Responsive Modern UI/UX Website, React.js, Next.js 13, Tailwind CSS",
    },
];

const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    return (
        <group {...props}>
            <mesh
                position-z={-0.001}
                onClick={() => window.open(project.url, "_blank")}
                ref={background}
            >
                <planeGeometry args={[2.2, 2]} />
                <meshBasicMaterial color="black" transparent opacity={0.4} />
            </mesh>
            <Image
                scale={[2, 1.2, 1]}
                url={project.image}
                toneMapped={false}
                position-y={0.3}
            />
            <Text
                maxWidth={2}
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.2}
                position={[-1, -0.4, 0]}
            >
                {project.title.toUpperCase()}
            </Text>
            <Text
                maxWidth={2}
                anchorX="left"
                anchorY="top"
                fontSize={0.1}
                position={[-1, -0.6, 0]}
            >
                {project.description}
            </Text>
        </group>
    );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);

    return (
        <group position-y={-viewport.height * 2 + 1}>
            {projects.map((project, index) => (
                <motion.group
                    key={"project_" + index}
                    position={[index * 2.5, 0, -3]}
                    animate={{
                        x: 0 + (index - currentProject) * 2.5,
                        y: currentProject === index ? 0 : -0.1,
                        z: currentProject === index ? -2 : -3,
                        rotateX: currentProject === index ? 0 : -Math.PI / 3,
                        rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
                    }}
                >
                    <Project project={project} highlighted={index === currentProject} />
                </motion.group>
            ))}
        </group>
    );
};